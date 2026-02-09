// =============================================
// TIME SLOTS COMPONENT - PREMIUM EDITION
// Selector de horarios con animaciones elegantes
// =============================================

import React, { useState } from 'react';
import { TimeSlotsProps, TimeSlot, DAYS_FULL_ES, MONTHS_ES } from './bookingTypes';
import { createBookingStyles } from './bookingStyles';

const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
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

  const morningSlots = slots.filter((slot) => {
    const hour = parseInt(slot.startTime.split(':')[0], 10);
    return hour < 12;
  });

  const afternoonSlots = slots.filter((slot) => {
    const hour = parseInt(slot.startTime.split(':')[0], 10);
    return hour >= 12;
  });

  const dayName = DAYS_FULL_ES[selectedDate.getDay()];
  const dateStr = `${selectedDate.getDate()} de ${MONTHS_ES[selectedDate.getMonth()]}`;

  const renderSlot = (slot: TimeSlot, index: number) => {
    const isAvailable = slot.status === 'available';
    const isSelected = selectedSlot?.id === slot.id;
    const isHovered = hoveredSlot === slot.id;

    let slotStyle: React.CSSProperties = {
      ...styles.timeSlot,
      animationDelay: `${index * 60}ms`,
      animation: 'booking-fadeIn 0.4s ease both',
    };

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
              transform: 'translateY(-4px)',
              boxShadow: `0 8px 24px ${colors.success}25`,
              backgroundColor: `${colors.success}08`,
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          {isAvailable && !isSelected && <ClockIcon />}
          <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{formatTime(slot.startTime)}</span>
        </div>
        <span style={{
          display: 'block',
          fontSize: '0.72rem',
          marginTop: '4px',
          opacity: isSelected ? 0.9 : 0.5,
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}>
          {isAvailable ? `hasta ${formatTime(slot.endTime)}` : 'Ocupado'}
        </span>
        {isSelected && (
          <div style={{
            position: 'absolute',
            top: '6px',
            right: '6px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        )}
      </button>
    );
  };

  if (slots.length === 0) {
    return (
      <div style={{
        ...styles.timeSlotsContainer,
        animation: 'booking-fadeIn 0.4s ease both',
      }}>
        <div style={{
          textAlign: 'center',
          padding: '48px 20px',
          color: colors.textLight,
        }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ margin: '0 auto 16px', opacity: 0.4 }}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>No hay horarios disponibles para este día</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      ...styles.timeSlotsContainer,
      animation: 'booking-slideUp 0.5s ease both',
    }}>
      {/* Header de horarios */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
        flexWrap: 'wrap' as const,
        gap: '8px',
      }}>
        <h4 style={{ ...styles.timeSlotsTitle, marginBottom: 0 }}>
          Selecciona tu horario
        </h4>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          backgroundColor: `${colors.primary}12`,
          borderRadius: '100px',
          fontSize: '0.82rem',
          color: colors.primary,
          fontWeight: 600,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
          </svg>
          {dayName}, {dateStr}
        </span>
      </div>

      {/* Horarios de mañana */}
      {morningSlots.length > 0 && (
        <>
          <div style={{
            ...styles.timePeriodLabel,
            color: '#f59e0b',
          }}>
            <SunIcon />
            <span>Mañana</span>
            <span style={{
              fontSize: '0.75rem',
              color: colors.textLight,
              fontWeight: 500,
              textTransform: 'none' as const,
              letterSpacing: '0',
            }}>
              8:00 AM - 12:00 PM
            </span>
          </div>
          <div style={styles.timeSlotsGrid}>
            {morningSlots.map((slot, i) => renderSlot(slot, i))}
          </div>
        </>
      )}

      {/* Horarios de tarde */}
      {afternoonSlots.length > 0 && (
        <>
          <div style={{
            ...styles.timePeriodLabel,
            marginTop: '28px',
            color: '#6366f1',
          }}>
            <MoonIcon />
            <span>Tarde</span>
            <span style={{
              fontSize: '0.75rem',
              color: colors.textLight,
              fontWeight: 500,
              textTransform: 'none' as const,
              letterSpacing: '0',
            }}>
              4:00 PM - 7:00 PM
            </span>
          </div>
          <div style={styles.timeSlotsGrid}>
            {afternoonSlots.map((slot, i) => renderSlot(slot, i + morningSlots.length))}
          </div>
        </>
      )}

      {/* Timezone info */}
      <p style={{
        marginTop: '24px',
        fontSize: '0.82rem',
        color: colors.textLight,
        textAlign: 'center',
        opacity: 0.7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6 }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        Hora local ({Intl.DateTimeFormat().resolvedOptions().timeZone})
      </p>
    </div>
  );
};
