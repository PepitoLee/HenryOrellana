// =============================================
// BOOKING CALENDAR COMPONENT - PREMIUM EDITION
// Orquestador principal con diseño elegante
// =============================================

import React, { useState, useMemo } from 'react';
import { BookingCalendarProps, TimeSlot, Booking, BookingFormData, ColorTheme } from './bookingTypes';
import { createBookingStyles, spinnerKeyframes } from './bookingStyles';
import { useBookingSlots } from './useBookingSlots';
import { CalendarGrid } from './CalendarGrid';
import { TimeSlots } from './TimeSlots';
import { BookingModal } from './BookingModal';
import { BookingConfirmation } from './BookingConfirmation';

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

  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completedBooking, setCompletedBooking] = useState<Booking | null>(null);

  const dateRange = useMemo(() => {
    const start = new Date();
    start.setDate(1);
    const end = new Date();
    end.setMonth(end.getMonth() + 3);
    end.setDate(0);
    return { start, end };
  }, []);

  const { availableSlots, isLoading, error, createBooking } = useBookingSlots(
    dateRange.start,
    dateRange.end
  );

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      const today = new Date();
      today.setDate(1);
      if (newMonth < today) return prev;
      const maxMonth = new Date();
      maxMonth.setMonth(maxMonth.getMonth() + 3);
      if (newMonth > maxMonth) return prev;
      return newMonth;
    });
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

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

  const handleConfirmationClose = () => {
    setCompletedBooking(null);
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const slotsForSelectedDate = selectedDate
    ? availableSlots.get(formatDateKey(selectedDate)) || []
    : [];

  return (
    <>
      <style>{spinnerKeyframes}</style>

      <div style={styles.calendarContainer}>
        {/* Barra gradiente superior */}
        <div style={styles.calendarGlow} />

        {/* Encabezado con badge */}
        <div style={{
          textAlign: 'center',
          marginBottom: '28px',
          paddingTop: '8px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: `linear-gradient(135deg, ${colors.success}15, ${colors.primary}10)`,
            borderRadius: '100px',
            marginBottom: '14px',
            border: `1px solid ${colors.success}25`,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill={colors.success}>
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
            </svg>
            <span style={{
              color: colors.success,
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.02em',
            }}>
              Martes y Jueves disponibles
            </span>
          </div>
          <p style={{
            color: colors.textLight,
            fontSize: '0.92rem',
            margin: 0,
            lineHeight: 1.5,
          }}>
            Selecciona una fecha y horario para tu sesión
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div style={styles.loading}>
            <div style={styles.spinner} />
            <span style={{ fontSize: '0.9rem' }}>Cargando horarios...</span>
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <div style={styles.error}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#b91c1c" style={{ flexShrink: 0 }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <span>{error}</span>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginLeft: 'auto',
                padding: '6px 16px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#dc2626',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 600,
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

        {/* Info card */}
        <div style={{
          marginTop: '28px',
          padding: '20px',
          background: `linear-gradient(135deg, ${colors.backgroundAlt}, ${colors.background})`,
          borderRadius: '16px',
          border: `1px solid ${colors.border}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accent}10)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={colors.accent}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
          <div style={{ fontSize: '0.88rem', color: colors.text, lineHeight: 1.7 }}>
            <strong style={{ fontSize: '0.92rem' }}>¿Cómo funciona?</strong>
            <ol style={{ margin: '10px 0 0 0', paddingLeft: '20px', color: colors.textLight }}>
              <li style={{ marginBottom: '4px' }}>Selecciona un día disponible (Martes o Jueves)</li>
              <li style={{ marginBottom: '4px' }}>Elige el horario que mejor te convenga</li>
              <li style={{ marginBottom: '4px' }}>Completa tus datos y confirma por WhatsApp</li>
              <li>Te responderé para coordinar el pago y confirmar</li>
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
