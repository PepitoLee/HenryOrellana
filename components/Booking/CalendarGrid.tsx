// =============================================
// CALENDAR GRID COMPONENT
// Grid de días del mes con navegación
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

  // Obtener días del mes
  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    // Añadir días vacíos para alinear con el día de la semana
    const startDayOfWeek = firstDay.getDay();
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(new Date(year, month, -startDayOfWeek + i + 1));
    }

    // Añadir días del mes
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Completar última semana
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(new Date(year, month + 1, i));
      }
    }

    return days;
  };

  // Verificar si una fecha es hoy
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Verificar si una fecha está seleccionada
  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Verificar si una fecha es del mes actual
  const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentMonth.getMonth();
  };

  // Verificar si una fecha es pasada
  const isPastDate = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Verificar si una fecha es disponible (Martes o Jueves, no pasada)
  const isAvailableDate = (date: Date): boolean => {
    if (isPastDate(date)) return false;
    if (!isCurrentMonth(date)) return false;
    return AVAILABLE_DAYS.includes(date.getDay());
  };

  // Obtener slots disponibles para una fecha
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Días de la semana */}
      <div style={styles.daysHeader}>
        {DAYS_ES.map((day, index) => (
          <div
            key={day}
            style={{
              ...styles.dayHeaderCell,
              color: AVAILABLE_DAYS.includes(index) ? colors.success : colors.textLight,
              fontWeight: AVAILABLE_DAYS.includes(index) ? 700 : 600,
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Grid de días */}
      <div style={styles.daysGrid}>
        {days.map((date, index) => {
          const available = isAvailableDate(date);
          const selected = isSelected(date);
          const today = isToday(date);
          const currentMo = isCurrentMonth(date);
          const slotsCount = available ? getAvailableSlotsCount(date) : 0;

          let cellStyle: React.CSSProperties = {
            ...styles.dayCell,
          };

          if (!currentMo) {
            cellStyle = { ...cellStyle, opacity: 0.3 };
          } else if (selected) {
            cellStyle = { ...cellStyle, ...styles.dayCellSelected(colors) };
          } else if (available) {
            cellStyle = {
              ...cellStyle,
              ...styles.dayCellAvailable(colors),
              ...(hoveredDay === index
                ? {
                    transform: 'scale(1.05)',
                    boxShadow: `0 4px 15px ${colors.success}30`,
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
              disabled={!available}
              aria-label={`${date.getDate()} de ${MONTHS_ES[date.getMonth()]}${available ? `, ${slotsCount} horarios disponibles` : ''}`}
            >
              {date.getDate()}
              {available && slotsCount > 0 && (
                <span
                  style={{
                    ...styles.availabilityDot,
                    backgroundColor: selected ? '#fff' : colors.success,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Leyenda */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '20px',
          fontSize: '0.85rem',
          color: colors.textLight,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '4px',
              backgroundColor: `${colors.success}30`,
              border: `2px solid ${colors.success}`,
            }}
          />
          Disponible
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '4px',
              backgroundColor: colors.success,
            }}
          />
          Seleccionado
        </div>
      </div>
    </div>
  );
};
