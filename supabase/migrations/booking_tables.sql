-- =============================================
-- BOOKING SYSTEM TABLES
-- Sistema de reservas para mentorías
-- =============================================

-- Tabla: booking_slots
-- Almacena los slots de tiempo disponibles
CREATE TABLE IF NOT EXISTS booking_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mentor_id VARCHAR(50) NOT NULL DEFAULT 'henry',
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  status VARCHAR(20) DEFAULT 'available'
    CHECK (status IN ('available', 'pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Evitar slots duplicados para el mismo mentor
  UNIQUE(mentor_id, date, start_time)
);

-- Tabla: bookings
-- Almacena las reservas de los clientes
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slot_id UUID REFERENCES booking_slots(id) ON DELETE SET NULL,

  -- Datos del cliente
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  client_country VARCHAR(100) NOT NULL,

  -- Datos del servicio
  service_type VARCHAR(50) NOT NULL CHECK (service_type IN ('mentoria-usa', 'mentoria-peru')),
  price_amount DECIMAL(10,2) NOT NULL,
  price_currency VARCHAR(3) NOT NULL CHECK (price_currency IN ('USD', 'PEN')),

  -- Datos de la cita (duplicados del slot para histórico)
  booking_date DATE NOT NULL,
  booking_start_time TIME NOT NULL,
  booking_end_time TIME NOT NULL,

  -- Notas y estado
  notes TEXT,
  status VARCHAR(20) DEFAULT 'pending'
    CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled', 'no_show')),

  -- Timestamps de seguimiento
  whatsapp_sent_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para optimizar búsquedas
CREATE INDEX IF NOT EXISTS idx_booking_slots_date ON booking_slots(date);
CREATE INDEX IF NOT EXISTS idx_booking_slots_status ON booking_slots(status);
CREATE INDEX IF NOT EXISTS idx_booking_slots_mentor_date ON booking_slots(mentor_id, date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_bookings_client_email ON bookings(client_email);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_booking_slots_updated_at
    BEFORE UPDATE ON booking_slots
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
    BEFORE UPDATE ON bookings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================

-- Habilitar RLS
ALTER TABLE booking_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Políticas para booking_slots
-- Lectura pública (cualquiera puede ver slots disponibles)
CREATE POLICY "Slots visibles públicamente" ON booking_slots
  FOR SELECT USING (true);

-- Solo admins pueden insertar/actualizar/eliminar slots
CREATE POLICY "Solo admins gestionan slots" ON booking_slots
  FOR ALL USING (
    auth.role() = 'authenticated' AND
    EXISTS (
      SELECT 1 FROM admin_profiles
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

-- Políticas para bookings
-- Cualquiera puede crear una reserva (insert público)
CREATE POLICY "Cualquiera puede crear reserva" ON bookings
  FOR INSERT WITH CHECK (true);

-- Los usuarios pueden ver sus propias reservas por email
CREATE POLICY "Ver propias reservas por email" ON bookings
  FOR SELECT USING (true);

-- Solo admins pueden actualizar/eliminar reservas
CREATE POLICY "Solo admins gestionan reservas" ON bookings
  FOR UPDATE USING (
    auth.role() = 'authenticated' AND
    EXISTS (
      SELECT 1 FROM admin_profiles
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Solo admins eliminan reservas" ON bookings
  FOR DELETE USING (
    auth.role() = 'authenticated' AND
    EXISTS (
      SELECT 1 FROM admin_profiles
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

-- =============================================
-- FUNCIÓN: Generar slots automáticamente
-- Genera slots para Martes y Jueves
-- Horarios: 8-12 AM y 4-7 PM
-- =============================================

CREATE OR REPLACE FUNCTION generate_booking_slots(
  start_date DATE,
  end_date DATE,
  p_mentor_id VARCHAR(50) DEFAULT 'henry'
)
RETURNS INTEGER AS $$
DECLARE
  current_date DATE := start_date;
  day_of_week INTEGER;
  slot_count INTEGER := 0;
  time_slot TIME;
BEGIN
  WHILE current_date <= end_date LOOP
    day_of_week := EXTRACT(DOW FROM current_date);

    -- Solo Martes (2) y Jueves (4)
    IF day_of_week IN (2, 4) THEN
      -- Slots de mañana: 8:00, 9:00, 10:00, 11:00
      FOREACH time_slot IN ARRAY ARRAY['08:00'::TIME, '09:00'::TIME, '10:00'::TIME, '11:00'::TIME] LOOP
        INSERT INTO booking_slots (mentor_id, date, start_time, end_time, status)
        VALUES (p_mentor_id, current_date, time_slot, time_slot + INTERVAL '1 hour', 'available')
        ON CONFLICT (mentor_id, date, start_time) DO NOTHING;
        slot_count := slot_count + 1;
      END LOOP;

      -- Slots de tarde: 16:00, 17:00, 18:00
      FOREACH time_slot IN ARRAY ARRAY['16:00'::TIME, '17:00'::TIME, '18:00'::TIME] LOOP
        INSERT INTO booking_slots (mentor_id, date, start_time, end_time, status)
        VALUES (p_mentor_id, current_date, time_slot, time_slot + INTERVAL '1 hour', 'available')
        ON CONFLICT (mentor_id, date, start_time) DO NOTHING;
        slot_count := slot_count + 1;
      END LOOP;
    END IF;

    current_date := current_date + INTERVAL '1 day';
  END LOOP;

  RETURN slot_count;
END;
$$ LANGUAGE plpgsql;

-- Generar slots para los próximos 3 meses
SELECT generate_booking_slots(
  CURRENT_DATE,
  CURRENT_DATE + INTERVAL '3 months'
);
