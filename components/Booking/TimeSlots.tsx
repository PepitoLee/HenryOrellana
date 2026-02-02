// =============================================
// TIME SLOTS COMPONENT
// Selector de horarios disponibles
// =============================================

import React, { useState } from 'react';
import { TimeSlotsProps, TimeSlot, DAYS_FULL_ES, MONTHS_ES } from './bookingTypes';
import { createBookingStyles } from './bookingStyles';

// Convertir hora de 24h a formato legible
const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

// Iconos para mañana y tarde
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate,
  slots,
  selectedSlot,
  onSlotSelect,
  colors,
}) => {
  const styles = createBookingStyles(colors);
  const [hoveredSlot, setHoveredSlot] = useState<string | null>(null);

  // Separar slots en mañana y tarde
  const morningSlots = slots.filter((slot) => {
    const hour = parseInt(slot.startTime.split(':')[0], 10);
    return hour < 12;
  });

  const afternoonSlots = slots.filter((slot) => {
    const hour = parseInt(slot.startTime.split(':')[0], 10);
    return hour >= 12;
  });

  // Formatear fecha seleccionada
  const dayName = DAYS_FULL_ES[selectedDate.getDay()];
  const dateStr = `${selectedDate.getDate()} de ${MONTHS_ES[selectedDate.getMonth()]}`;

  const renderSlot = (slot: TimeSlot) => {
    const isAvailable = slot.status === 'available';
    const isSelected = selectedSlot?.id === slot.id;
    const isHovered = hoveredSlot === slot.id;

    let slotStyle: React.CSSProperties = { ...styles.timeSlot };

    if (!isAvailable) {
      slotStyle = { ...slotStyle, ...styles.timeSlotUnavailable };
    } else if (isSelected) {
      slotStyle = { ...slotStyle, ...styles.timeSlotSelected(colors) };
    } else {
      slotStyle = {
        ...slotStyle,
        ...styles.timeSlotAvailable(colors),
        ...(isHovered
          ? {
              borderColor: colors.success,
              transform: 'translateY(-2px)',
              boxShadow: `0 4px 12px ${colors.success}20`,
            }
          : {}),
      };
    }

    return (
      <button
        key={slot.id}
        onClick={() => isAvailable && onSlotSelect(slot)}
        onMouseEnter={() => isAvailable && setHoveredSlot(slot.id)}
        onMouseLeave={() => setHoveredSlot(null)}
        style={slotStyle}
        disabled={!isAvailable}
        aria-label={`${formatTime(slot.startTime)} a ${formatTime(slot.endTime)}${!isAvailable ? ' - No disponible' : ''}`}
      >
        <span style={{ fontWeight: 600 }}>{formatTime(slot.startTime)}</span>
        {!isAvailable && (
          <span
            style={{
              display: 'block',
              fontSize: '0.75rem',
              marginTop: '4px',
              opacity: 0.7,
            }}
          >
            Ocupado
          </span>
        )}
      </button>
    );
  };

  if (slots.length === 0) {
    return (
      <div style={styles.timeSlotsContainer}>
        <div style={{ textAlign: 'center', padding: '40px 20px', color: colors.textLight }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ margin: '0 auto 16px', opacity: 0.5 }}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <p>No hay horarios disponibles para este día</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.timeSlotsContainer}>
      <h4 style={styles.timeSlotsTitle}>
        Horarios para {dayName}, {dateStr}
      </h4>

      {/* Horarios de mañana */}
      {morningSlots.length > 0 && (
        <>
          <div style={styles.timePeriodLabel}>
            <SunIcon />
            <span>Mañana (8:00 AM - 12:00 PM)</span>
          </div>
          <div style={styles.timeSlotsGrid}>{morningSlots.map(renderSlot)}</div>
        </>
      )}

      {/* Horarios de tarde */}
      {afternoonSlots.length > 0 && (
        <>
          <div style={{ ...styles.timePeriodLabel, marginTop: '24px' }}>
            <MoonIcon />
            <span>Tarde (4:00 PM - 7:00 PM)</span>
          </div>
          <div style={styles.timeSlotsGrid}>{afternoonSlots.map(renderSlot)}</div>
        </>
      )}

      {/* Info de zona horaria */}
      <p
        style={{
          marginTop: '20px',
          fontSize: '0.85rem',
          color: colors.textLight,
          textAlign: 'center',
        }}
      >
        * Horarios en tu zona horaria local ({Intl.DateTimeFormat().resolvedOptions().timeZone})
      </p>
    </div>
  );
};
