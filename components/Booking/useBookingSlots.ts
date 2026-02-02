// =============================================
// BOOKING SLOTS HOOK
// Hook para manejar la disponibilidad y reservas
// =============================================

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../lib/supabase';
import { TimeSlot, Booking, BookingFormData, AVAILABLE_DAYS, TIME_SLOTS_CONFIG } from './bookingTypes';

interface UseBookingSlotsReturn {
  availableSlots: Map<string, TimeSlot[]>;
  isLoading: boolean;
  error: string | null;
  refreshSlots: () => Promise<void>;
  createBooking: (
    slot: TimeSlot,
    formData: BookingFormData,
    serviceType: 'mentoria-usa' | 'mentoria-peru',
    priceAmount: number,
    priceCurrency: 'USD' | 'PEN'
  ) => Promise<Booking>;
}

// Formato de fecha para keys del Map: YYYY-MM-DD
const formatDateKey = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Generar slots locales para fechas sin datos en DB
const generateLocalSlots = (date: Date): TimeSlot[] => {
  const dayOfWeek = date.getDay();
  if (!AVAILABLE_DAYS.includes(dayOfWeek)) return [];

  const dateStr = formatDateKey(date);
  const slots: TimeSlot[] = [];

  // Slots de mañana
  TIME_SLOTS_CONFIG.morning.forEach((time, index) => {
    slots.push({
      id: `local-${dateStr}-${time.start}`,
      date: dateStr,
      startTime: time.start,
      endTime: time.end,
      status: 'available',
    });
  });

  // Slots de tarde
  TIME_SLOTS_CONFIG.afternoon.forEach((time, index) => {
    slots.push({
      id: `local-${dateStr}-${time.start}`,
      date: dateStr,
      startTime: time.start,
      endTime: time.end,
      status: 'available',
    });
  });

  return slots;
};

export const useBookingSlots = (
  startDate: Date,
  endDate: Date
): UseBookingSlotsReturn => {
  const [availableSlots, setAvailableSlots] = useState<Map<string, TimeSlot[]>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSlots = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const startStr = formatDateKey(startDate);
      const endStr = formatDateKey(endDate);

      // Intentar obtener slots de Supabase
      const { data: dbSlots, error: dbError } = await supabase
        .from('booking_slots')
        .select('*')
        .gte('date', startStr)
        .lte('date', endStr)
        .order('date', { ascending: true })
        .order('start_time', { ascending: true });

      const slotsMap = new Map<string, TimeSlot[]>();

      if (dbError) {
        console.warn('Error fetching from Supabase, using local slots:', dbError);
        // Si hay error, generar slots locales
        const current = new Date(startDate);
        while (current <= endDate) {
          const dateKey = formatDateKey(current);
          const daySlots = generateLocalSlots(current);
          if (daySlots.length > 0) {
            slotsMap.set(dateKey, daySlots);
          }
          current.setDate(current.getDate() + 1);
        }
      } else if (dbSlots && dbSlots.length > 0) {
        // Usar slots de la base de datos
        dbSlots.forEach((slot) => {
          const dateKey = slot.date;
          const timeSlot: TimeSlot = {
            id: slot.id,
            date: slot.date,
            startTime: slot.start_time,
            endTime: slot.end_time,
            status: slot.status as TimeSlot['status'],
          };

          if (slotsMap.has(dateKey)) {
            slotsMap.get(dateKey)!.push(timeSlot);
          } else {
            slotsMap.set(dateKey, [timeSlot]);
          }
        });
      } else {
        // No hay datos en DB, generar localmente
        const current = new Date(startDate);
        while (current <= endDate) {
          const dateKey = formatDateKey(current);
          const daySlots = generateLocalSlots(current);
          if (daySlots.length > 0) {
            slotsMap.set(dateKey, daySlots);
          }
          current.setDate(current.getDate() + 1);
        }
      }

      setAvailableSlots(slotsMap);
    } catch (err) {
      console.error('Error in fetchSlots:', err);
      setError('Error al cargar los horarios disponibles');

      // Fallback a slots locales
      const slotsMap = new Map<string, TimeSlot[]>();
      const current = new Date(startDate);
      while (current <= endDate) {
        const dateKey = formatDateKey(current);
        const daySlots = generateLocalSlots(current);
        if (daySlots.length > 0) {
          slotsMap.set(dateKey, daySlots);
        }
        current.setDate(current.getDate() + 1);
      }
      setAvailableSlots(slotsMap);
    } finally {
      setIsLoading(false);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  const createBooking = async (
    slot: TimeSlot,
    formData: BookingFormData,
    serviceType: 'mentoria-usa' | 'mentoria-peru',
    priceAmount: number,
    priceCurrency: 'USD' | 'PEN'
  ): Promise<Booking> => {
    try {
      // Preparar datos de la reserva
      const bookingData = {
        slot_id: slot.id.startsWith('local-') ? null : slot.id,
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,
        client_country: formData.country,
        service_type: serviceType,
        price_amount: priceAmount,
        price_currency: priceCurrency,
        booking_date: slot.date,
        booking_start_time: slot.startTime,
        booking_end_time: slot.endTime,
        notes: formData.notes || null,
        status: 'pending' as const,
      };

      // Intentar insertar en Supabase
      const { data, error: insertError } = await supabase
        .from('bookings')
        .insert(bookingData)
        .select()
        .single();

      if (insertError) {
        console.warn('Error inserting booking, creating local:', insertError);
        // Crear reserva local si falla DB
        const localBooking: Booking = {
          id: `local-booking-${Date.now()}`,
          slotId: null,
          clientName: formData.name,
          clientEmail: formData.email,
          clientPhone: formData.phone,
          clientCountry: formData.country,
          serviceType,
          priceAmount,
          priceCurrency,
          bookingDate: slot.date,
          bookingStartTime: slot.startTime,
          bookingEndTime: slot.endTime,
          notes: formData.notes || null,
          status: 'pending',
          createdAt: new Date().toISOString(),
        };
        return localBooking;
      }

      // Si el slot tiene ID real, actualizarlo a pending
      if (!slot.id.startsWith('local-')) {
        await supabase
          .from('booking_slots')
          .update({ status: 'pending' })
          .eq('id', slot.id);
      }

      // Transformar respuesta a tipo Booking
      const booking: Booking = {
        id: data.id,
        slotId: data.slot_id,
        clientName: data.client_name,
        clientEmail: data.client_email,
        clientPhone: data.client_phone,
        clientCountry: data.client_country,
        serviceType: data.service_type,
        priceAmount: data.price_amount,
        priceCurrency: data.price_currency,
        bookingDate: data.booking_date,
        bookingStartTime: data.booking_start_time,
        bookingEndTime: data.booking_end_time,
        notes: data.notes,
        status: data.status,
        createdAt: data.created_at,
      };

      // Refrescar slots
      await fetchSlots();

      return booking;
    } catch (err) {
      console.error('Error creating booking:', err);
      throw new Error('Error al crear la reserva. Por favor, intenta de nuevo.');
    }
  };

  return {
    availableSlots,
    isLoading,
    error,
    refreshSlots: fetchSlots,
    createBooking,
  };
};
