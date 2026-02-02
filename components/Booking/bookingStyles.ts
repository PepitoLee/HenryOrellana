// =============================================
// BOOKING SYSTEM STYLES
// Estilos inline centralizados para el sistema de calendario
// =============================================

import { ColorTheme } from './bookingTypes';

export const createBookingStyles = (colors: ColorTheme) => ({
  // Container principal
  calendarContainer: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: colors.background,
    borderRadius: '24px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  } as React.CSSProperties,

  // Encabezado del calendario
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    padding: '0 8px',
  } as React.CSSProperties,

  monthTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: colors.text,
    fontFamily: "'Cormorant Garamond', serif",
  } as React.CSSProperties,

  navButton: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: `2px solid ${colors.border}`,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    color: colors.text,
  } as React.CSSProperties,

  navButtonHover: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    color: '#fff',
  } as React.CSSProperties,

  // Grid de días
  daysHeader: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px',
    marginBottom: '8px',
  } as React.CSSProperties,

  dayHeaderCell: {
    textAlign: 'center' as const,
    padding: '12px 4px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: colors.textLight,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  } as React.CSSProperties,

  daysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px',
  } as React.CSSProperties,

  // Celdas de días
  dayCell: {
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    position: 'relative' as const,
  } as React.CSSProperties,

  dayCellAvailable: (colors: ColorTheme) => ({
    backgroundColor: `${colors.success}15`,
    color: colors.success,
    border: `2px solid ${colors.success}40`,
  }) as React.CSSProperties,

  dayCellSelected: (colors: ColorTheme) => ({
    backgroundColor: colors.success,
    color: '#fff',
    border: `2px solid ${colors.success}`,
    transform: 'scale(1.05)',
    boxShadow: `0 4px 15px ${colors.success}40`,
  }) as React.CSSProperties,

  dayCellDisabled: {
    backgroundColor: 'transparent',
    color: '#ccc',
    cursor: 'not-allowed',
  } as React.CSSProperties,

  dayCellToday: (colors: ColorTheme) => ({
    border: `2px solid ${colors.accent}`,
  }) as React.CSSProperties,

  // Indicador de disponibilidad
  availabilityDot: {
    position: 'absolute' as const,
    bottom: '4px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
  } as React.CSSProperties,

  // Sección de horarios
  timeSlotsContainer: {
    marginTop: '32px',
    padding: '24px',
    backgroundColor: colors.backgroundAlt,
    borderRadius: '16px',
  } as React.CSSProperties,

  timeSlotsTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: colors.text,
    marginBottom: '20px',
    fontFamily: "'Cormorant Garamond', serif",
  } as React.CSSProperties,

  timePeriodLabel: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: colors.textLight,
    marginBottom: '12px',
    marginTop: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  } as React.CSSProperties,

  timeSlotsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '12px',
  } as React.CSSProperties,

  timeSlot: {
    padding: '14px 16px',
    borderRadius: '12px',
    border: `2px solid ${colors.border}`,
    backgroundColor: colors.background,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center' as const,
    fontSize: '0.95rem',
    fontWeight: 500,
  } as React.CSSProperties,

  timeSlotAvailable: (colors: ColorTheme) => ({
    border: `2px solid ${colors.success}40`,
    color: colors.text,
  }) as React.CSSProperties,

  timeSlotSelected: (colors: ColorTheme) => ({
    backgroundColor: colors.success,
    borderColor: colors.success,
    color: '#fff',
    transform: 'scale(1.02)',
    boxShadow: `0 4px 15px ${colors.success}40`,
  }) as React.CSSProperties,

  timeSlotUnavailable: {
    backgroundColor: '#f5f5f5',
    borderColor: '#e0e0e0',
    color: '#bbb',
    cursor: 'not-allowed',
    textDecoration: 'line-through',
  } as React.CSSProperties,

  // Modal
  modalOverlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px',
    backdropFilter: 'blur(4px)',
  } as React.CSSProperties,

  modalContent: {
    backgroundColor: colors.background,
    borderRadius: '24px',
    padding: '32px',
    maxWidth: '500px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
    position: 'relative' as const,
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  } as React.CSSProperties,

  modalClose: {
    position: 'absolute' as const,
    top: '16px',
    right: '16px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: colors.backgroundAlt,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    color: colors.textLight,
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: colors.text,
    marginBottom: '8px',
    fontFamily: "'Cormorant Garamond', serif",
  } as React.CSSProperties,

  // Resumen de reserva
  bookingSummary: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '24px',
  } as React.CSSProperties,

  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: `1px solid ${colors.border}`,
  } as React.CSSProperties,

  summaryLabel: {
    color: colors.textLight,
    fontSize: '0.9rem',
  } as React.CSSProperties,

  summaryValue: {
    fontWeight: 600,
    color: colors.text,
  } as React.CSSProperties,

  priceHighlight: (colors: ColorTheme) => ({
    fontSize: '1.25rem',
    fontWeight: 700,
    color: colors.success,
  }) as React.CSSProperties,

  // Formulario
  formGroup: {
    marginBottom: '20px',
  } as React.CSSProperties,

  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: colors.text,
  } as React.CSSProperties,

  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: `2px solid ${colors.border}`,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: colors.background,
    color: colors.text,
    outline: 'none',
  } as React.CSSProperties,

  inputFocus: (colors: ColorTheme) => ({
    borderColor: colors.primary,
    boxShadow: `0 0 0 3px ${colors.primary}20`,
  }) as React.CSSProperties,

  select: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: `2px solid ${colors.border}`,
    fontSize: '1rem',
    backgroundColor: colors.background,
    color: colors.text,
    cursor: 'pointer',
    outline: 'none',
  } as React.CSSProperties,

  textarea: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: `2px solid ${colors.border}`,
    fontSize: '1rem',
    minHeight: '100px',
    resize: 'vertical' as const,
    backgroundColor: colors.background,
    color: colors.text,
    outline: 'none',
    fontFamily: 'inherit',
  } as React.CSSProperties,

  // Botones
  buttonPrimary: (colors: ColorTheme) => ({
    width: '100%',
    padding: '16px 24px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: colors.success,
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  }) as React.CSSProperties,

  buttonPrimaryHover: (colors: ColorTheme) => ({
    backgroundColor: colors.success,
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 25px ${colors.success}40`,
  }) as React.CSSProperties,

  buttonSecondary: (colors: ColorTheme) => ({
    width: '100%',
    padding: '14px 24px',
    borderRadius: '12px',
    border: `2px solid ${colors.border}`,
    backgroundColor: 'transparent',
    color: colors.text,
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '12px',
  }) as React.CSSProperties,

  // Confirmación
  confirmationIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    fontSize: '2.5rem',
  } as React.CSSProperties,

  confirmationTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    textAlign: 'center' as const,
    marginBottom: '8px',
    fontFamily: "'Cormorant Garamond', serif",
  } as React.CSSProperties,

  confirmationText: {
    textAlign: 'center' as const,
    color: colors.textLight,
    marginBottom: '24px',
    lineHeight: 1.6,
  } as React.CSSProperties,

  whatsappButton: {
    width: '100%',
    padding: '16px 24px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#25D366',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  } as React.CSSProperties,

  // Estados de carga
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    color: colors.textLight,
  } as React.CSSProperties,

  spinner: {
    width: '40px',
    height: '40px',
    border: `3px solid ${colors.border}`,
    borderTopColor: colors.primary,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  } as React.CSSProperties,

  // Error
  error: {
    backgroundColor: '#fee',
    border: '1px solid #f88',
    borderRadius: '12px',
    padding: '16px',
    color: '#c00',
    marginBottom: '16px',
    fontSize: '0.9rem',
  } as React.CSSProperties,

  // Disclaimer en modal
  disclaimer: {
    backgroundColor: `${colors.accent}15`,
    border: `1px solid ${colors.accent}40`,
    borderRadius: '8px',
    padding: '12px',
    fontSize: '0.85rem',
    color: colors.text,
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  } as React.CSSProperties,
});

// Animación de keyframes para spinner (añadir al CSS global o como style tag)
export const spinnerKeyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
