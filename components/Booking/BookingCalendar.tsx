// =============================================
// BOOKING CALENDAR COMPONENT
// Componente principal que orquesta el sistema de calendario
// =============================================

import React, { useState, useMemo } from 'react';
import { BookingCalendarProps, TimeSlot, Booking, BookingFormData, ColorTheme } from './bookingTypes';
import { createBookingStyles, spinnerKeyframes } from './bookingStyles';
import { useBookingSlots } from './useBookingSlots';
import { CalendarGrid } from './CalendarGrid';
import { TimeSlots } from './TimeSlots';
import { BookingModal } from './BookingModal';
import { BookingConfirmation } from './BookingConfirmation';

// Formatear fecha para key del Map
const formatDateKey = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const BookingCalendar: React.FC<BookingCalendarProps> = ({
  serviceType,
  priceAmount,
  priceCurrency,
  whatsappNumber,
  colors,
  onBookingComplete,
}) => {
  const styles = createBookingStyles(colors);

  // Estado del calendario
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completedBooking, setCompletedBooking] = useState<Booking | null>(null);

  // Calcular rango de fechas para buscar slots (3 meses)
  const dateRange = useMemo(() => {
    const start = new Date();
    start.setDate(1); // Inicio del mes actual
    const end = new Date();
    end.setMonth(end.getMonth() + 3);
    end.setDate(0); // Último día del mes +3
    return { start, end };
  }, []);

  // Hook para manejar slots
  const { availableSlots, isLoading, error, createBooking } = useBookingSlots(
    dateRange.start,
    dateRange.end
  );

  // Cambiar mes
  const handleMonthChange = (direction: 'prev' | 'next') => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));

      // No permitir ir al pasado
      const today = new Date();
      today.setDate(1);
      if (newMonth < today) return prev;

      // No permitir ir más de 3 meses adelante
      const maxMonth = new Date();
      maxMonth.setMonth(maxMonth.getMonth() + 3);
      if (newMonth > maxMonth) return prev;

      return newMonth;
    });
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  // Seleccionar fecha
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  // Seleccionar slot
  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  // Enviar reserva
  const handleBookingSubmit = async (formData: BookingFormData) => {
    if (!selectedSlot) return;

    const booking = await createBooking(
      selectedSlot,
      formData,
      serviceType,
      priceAmount,
      priceCurrency
    );

    setIsModalOpen(false);
    setCompletedBooking(booking);

    if (onBookingComplete) {
      onBookingComplete(booking);
    }
  };

  // Cerrar confirmación
  const handleConfirmationClose = () => {
    setCompletedBooking(null);
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  // Obtener slots para la fecha seleccionada
  const slotsForSelectedDate = selectedDate
    ? availableSlots.get(formatDateKey(selectedDate)) || []
    : [];

  return (
    <>
      {/* Keyframes para animaciones */}
      <style>{spinnerKeyframes}</style>

      <div style={styles.calendarContainer}>
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: `${colors.success}15`,
              borderRadius: '100px',
              marginBottom: '12px',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={colors.success}>
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
            </svg>
            <span style={{ color: colors.success, fontWeight: 600, fontSize: '0.9rem' }}>
              Martes y Jueves disponibles
            </span>
          </div>
          <p style={{ color: colors.textLight, fontSize: '0.95rem' }}>
            Selecciona una fecha y horario para tu sesión de mentoría
          </p>
        </div>

        {/* Estado de carga */}
        {isLoading && (
          <div style={styles.loading}>
            <div style={styles.spinner} />
            <span style={{ marginLeft: '12px' }}>Cargando horarios disponibles...</span>
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <div style={styles.error}>
            {error}
            <button
              onClick={() => window.location.reload()}
              style={{
                marginLeft: '12px',
                padding: '4px 12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#dc2626',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              Reintentar
            </button>
          </div>
        )}

        {/* Calendario */}
        {!isLoading && (
          <>
            <CalendarGrid
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              availableSlots={availableSlots}
              onDateSelect={handleDateSelect}
              onMonthChange={handleMonthChange}
              colors={colors}
            />

            {/* Slots de tiempo */}
            {selectedDate && (
              <TimeSlots
                selectedDate={selectedDate}
                slots={slotsForSelectedDate}
                selectedSlot={selectedSlot}
                onSlotSelect={handleSlotSelect}
                colors={colors}
              />
            )}
          </>
        )}

        {/* Información adicional */}
        <div
          style={{
            marginTop: '24px',
            padding: '16px',
            backgroundColor: colors.backgroundAlt,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={colors.accent}
            style={{ flexShrink: 0, marginTop: '2px' }}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          <div style={{ fontSize: '0.9rem', color: colors.text, lineHeight: 1.6 }}>
            <strong>¿Cómo funciona?</strong>
            <ol style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
              <li>Selecciona un día disponible (Martes o Jueves)</li>
              <li>Elige el horario que mejor te convenga</li>
              <li>Completa tus datos y confirma por WhatsApp</li>
              <li>Te responderé para coordinar el pago y confirmar la cita</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Modal de reserva */}
      {selectedSlot && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedSlot={selectedSlot}
          serviceType={serviceType}
          priceAmount={priceAmount}
          priceCurrency={priceCurrency}
          onSubmit={handleBookingSubmit}
          colors={colors}
        />
      )}

      {/* Confirmación */}
      {completedBooking && (
        <BookingConfirmation
          booking={completedBooking}
          whatsappNumber={whatsappNumber}
          onClose={handleConfirmationClose}
          colors={colors}
        />
      )}
    </>
  );
};

export default BookingCalendar;
