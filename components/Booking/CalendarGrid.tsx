// =============================================
// CALENDAR GRID COMPONENT - PREMIUM EDITION
// Grid de días con animaciones y visual hierarchy
// =============================================

import React, { useState } from 'react';
import { CalendarGridProps, DAYS_ES, MONTHS_ES, AVAILABLE_DAYS, TimeSlot } from './bookingTypes';
import { createBookingStyles } from './bookingStyles';

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentMonth,
  selectedDate,
  availableSlots,
  onDateSelect,
  onMonthChange,
  colors,
}) => {
  const styles = createBookingStyles(colors);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    const startDayOfWeek = firstDay.getDay();
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(new Date(year, month, -startDayOfWeek + i + 1));
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(new Date(year, month + 1, i));
      }
    }

    return days;
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const isPastDate = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isAvailableDate = (date: Date): boolean => {
    if (isPastDate(date)) return false;
    if (!isCurrentMonth(date)) return false;
    return AVAILABLE_DAYS.includes(date.getDay());
  };

  const getAvailableSlotsCount = (date: Date): number => {
    const dateKey = date.toISOString().split('T')[0];
    const slots = availableSlots.get(dateKey);
    if (!slots) return 0;
    return slots.filter((s) => s.status === 'available').length;
  };

  const days = getDaysInMonth(currentMonth);
  const monthYear = `${MONTHS_ES[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;

  return (
    <div>
      {/* Header con navegación */}
      <div style={styles.calendarHeader}>
        <button
          onClick={() => onMonthChange('prev')}
          style={{
            ...styles.navButton,
            ...(hoveredDay === -1 ? styles.navButtonHover : {}),
          }}
          onMouseEnter={() => setHoveredDay(-1)}
          onMouseLeave={() => setHoveredDay(null)}
          aria-label="Mes anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <h3 style={styles.monthTitle}>{monthYear}</h3>

        <button
          onClick={() => onMonthChange('next')}
          style={{
            ...styles.navButton,
            ...(hoveredDay === -2 ? styles.navButtonHover : {}),
          }}
          onMouseEnter={() => setHoveredDay(-2)}
          onMouseLeave={() => setHoveredDay(null)}
          aria-label="Mes siguiente"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Días de la semana */}
      <div style={styles.daysHeader}>
        {DAYS_ES.map((day, index) => {
          const isAvailDay = AVAILABLE_DAYS.includes(index);
          return (
            <div
              key={day}
              style={{
                ...styles.dayHeaderCell,
                color: isAvailDay ? colors.success : colors.textLight,
                fontWeight: isAvailDay ? 800 : 600,
                position: 'relative' as const,
              }}
            >
              {day}
              {isAvailDay && (
                <div style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '2px',
                  borderRadius: '1px',
                  backgroundColor: colors.success,
                  opacity: 0.6,
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Grid de días */}
      <div style={styles.daysGrid}>
        {days.map((date, index) => {
          const available = isAvailableDate(date);
          const selected = isSelected(date);
          const today = isToday(date);
          const currentMo = isCurrentMonth(date);
          const slotsCount = available ? getAvailableSlotsCount(date) : 0;
          const isHovered = hoveredDay === index && available;

          let cellStyle: React.CSSProperties = {
            ...styles.dayCell,
          };

          if (!currentMo) {
            cellStyle = { ...cellStyle, opacity: 0.2, cursor: 'default' };
          } else if (selected) {
            cellStyle = { ...cellStyle, ...styles.dayCellSelected(colors) };
          } else if (available) {
            cellStyle = {
              ...cellStyle,
              ...styles.dayCellAvailable(colors),
              ...(isHovered
                ? {
                    transform: 'scale(1.1)',
                    boxShadow: `0 8px 24px ${colors.success}30`,
                    borderColor: colors.success,
                    backgroundColor: `${colors.success}20`,
                  }
                : {}),
            };
          } else {
            cellStyle = { ...cellStyle, ...styles.dayCellDisabled };
          }

          if (today && !selected) {
            cellStyle = { ...cellStyle, ...styles.dayCellToday(colors) };
          }

          return (
            <button
              key={index}
              onClick={() => available && onDateSelect(date)}
              onMouseEnter={() => available && setHoveredDay(index)}
              onMouseLeave={() => setHoveredDay(null)}
              style={cellStyle}
              disabled={!available && currentMo}
              aria-label={`${date.getDate()} de ${MONTHS_ES[date.getMonth()]}${available ? `, ${slotsCount} horarios disponibles` : ''}`}
            >
              <span>{date.getDate()}</span>
              {available && slotsCount > 0 && (
                <span
                  style={{
                    ...styles.availabilityDot,
                    backgroundColor: selected ? '#fff' : colors.success,
                    animation: !selected ? 'booking-pulse 2s ease-in-out infinite' : 'none',
                  }}
                />
              )}
              {today && !selected && (
                <span style={{
                  position: 'absolute',
                  top: '3px',
                  right: '3px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: colors.accent,
                }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Leyenda elegante */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '24px',
          fontSize: '0.82rem',
          color: colors.textLight,
          padding: '12px 0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '6px',
              backgroundColor: `${colors.success}15`,
              border: `2px solid ${colors.success}50`,
              display: 'inline-block',
            }}
          />
          <span>Disponible</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '6px',
              background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})`,
              display: 'inline-block',
            }}
          />
          <span>Seleccionado</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '6px',
              border: `2px solid ${colors.accent}`,
              display: 'inline-block',
            }}
          />
          <span>Hoy</span>
        </div>
      </div>
    </div>
  );
};
