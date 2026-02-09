// =============================================
// BOOKING SYSTEM STYLES - PREMIUM EDITION
// Estilos inline con glassmorphism, gradientes y micro-interacciones
// =============================================

import { ColorTheme } from './bookingTypes';

export const createBookingStyles = (colors: ColorTheme) => ({
  // Container principal con borde gradiente sutil
  calendarContainer: {
    width: '100%',
    maxWidth: '920px',
    margin: '0 auto',
    padding: '32px',
    backgroundColor: colors.background,
    borderRadius: '28px',
    boxShadow: `0 4px 24px rgba(0,0,0,0.06), 0 20px 60px rgba(0,0,0,0.08)`,
    border: `1px solid ${colors.border}`,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  } as React.CSSProperties,

  // Gradiente decorativo superior
  calendarGlow: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${colors.primary}, ${colors.success}, ${colors.accent})`,
    borderRadius: '28px 28px 0 0',
  } as React.CSSProperties,

  // Encabezado del calendario
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px',
    padding: '0 4px',
  } as React.CSSProperties,

  monthTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: colors.text,
    fontFamily: "'Cormorant Garamond', serif",
    letterSpacing: '0.02em',
    textTransform: 'capitalize' as const,
  } as React.CSSProperties,

  navButton: {
    width: '46px',
    height: '46px',
    borderRadius: '14px',
    border: `1.5px solid ${colors.border}`,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    color: colors.text,
  } as React.CSSProperties,

  navButtonHover: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    color: '#fff',
    transform: 'scale(1.05)',
    boxShadow: `0 6px 20px ${colors.primary}40`,
  } as React.CSSProperties,

  // Grid de días
  daysHeader: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '6px',
    marginBottom: '10px',
  } as React.CSSProperties,

  dayHeaderCell: {
    textAlign: 'center' as const,
    padding: '10px 4px',
    fontSize: '0.8rem',
    fontWeight: 700,
    color: colors.textLight,
    textTransform: 'uppercase' as const,
    letterSpacing: '1.2px',
  } as React.CSSProperties,

  daysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '6px',
  } as React.CSSProperties,

  // Celdas de días
  dayCell: {
    aspectRatio: '1',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '14px',
    fontSize: '0.95rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent',
    position: 'relative' as const,
    gap: '2px',
  } as React.CSSProperties,

  dayCellAvailable: (colors: ColorTheme) => ({
    backgroundColor: `${colors.success}10`,
    color: colors.text,
    border: `2px solid ${colors.success}30`,
  }) as React.CSSProperties,

  dayCellSelected: (colors: ColorTheme) => ({
    background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})`,
    color: '#fff',
    border: '2px solid transparent',
    transform: 'scale(1.08)',
    boxShadow: `0 8px 24px ${colors.success}45`,
  }) as React.CSSProperties,

  dayCellDisabled: {
    backgroundColor: 'transparent',
    color: `${colors.textLight}60`,
    cursor: 'not-allowed',
    opacity: 0.5,
  } as React.CSSProperties,

  dayCellToday: (colors: ColorTheme) => ({
    border: `2px solid ${colors.accent}`,
    fontWeight: 700,
  }) as React.CSSProperties,

  // Indicador de disponibilidad
  availabilityDot: {
    position: 'absolute' as const,
    bottom: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
  } as React.CSSProperties,

  // Sección de horarios
  timeSlotsContainer: {
    marginTop: '32px',
    padding: '28px',
    background: `linear-gradient(135deg, ${colors.backgroundAlt}, ${colors.background})`,
    borderRadius: '20px',
    border: `1px solid ${colors.border}`,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  } as React.CSSProperties,

  timeSlotsTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: colors.text,
    marginBottom: '24px',
    fontFamily: "'Cormorant Garamond', serif",
    letterSpacing: '0.02em',
  } as React.CSSProperties,

  timePeriodLabel: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: colors.textLight,
    marginBottom: '14px',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  } as React.CSSProperties,

  timeSlotsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
    gap: '12px',
  } as React.CSSProperties,

  timeSlot: {
    padding: '16px 18px',
    borderRadius: '14px',
    border: `2px solid ${colors.border}`,
    backgroundColor: colors.background,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'center' as const,
    fontSize: '0.95rem',
    fontWeight: 600,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  } as React.CSSProperties,

  timeSlotAvailable: (colors: ColorTheme) => ({
    border: `2px solid ${colors.success}30`,
    color: colors.text,
  }) as React.CSSProperties,

  timeSlotSelected: (colors: ColorTheme) => ({
    background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})`,
    borderColor: 'transparent',
    color: '#fff',
    transform: 'scale(1.03)',
    boxShadow: `0 8px 24px ${colors.success}40`,
  }) as React.CSSProperties,

  timeSlotUnavailable: {
    backgroundColor: `${colors.border}40`,
    borderColor: `${colors.border}60`,
    color: `${colors.textLight}80`,
    cursor: 'not-allowed',
    textDecoration: 'line-through',
    opacity: 0.6,
  } as React.CSSProperties,

  // Modal
  modalOverlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '12px',
    paddingTop: '20px',
    overflowY: 'auto' as const,
    WebkitOverflowScrolling: 'touch' as const,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  } as React.CSSProperties,

  modalContent: {
    backgroundColor: colors.background,
    borderRadius: '24px',
    padding: '0',
    maxWidth: '520px',
    width: '100%',
    position: 'relative' as const,
    boxShadow: '0 25px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)',
    border: `1px solid ${colors.border}`,
    marginBottom: '20px',
    flexShrink: 0,
  } as React.CSSProperties,

  // Header del modal con gradiente
  modalHeader: {
    padding: '24px 24px 16px',
    borderBottom: `1px solid ${colors.border}`,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  } as React.CSSProperties,

  modalHeaderGlow: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, ${colors.primary}, ${colors.success}, ${colors.accent})`,
  } as React.CSSProperties,

  modalBody: {
    padding: '20px 24px 28px',
  } as React.CSSProperties,

  modalClose: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    width: '38px',
    height: '38px',
    borderRadius: '12px',
    border: `1.5px solid ${colors.border}`,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    color: colors.textLight,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 10,
  } as React.CSSProperties,

  modalCloseHover: {
    backgroundColor: '#ff4444',
    borderColor: '#ff4444',
    color: '#fff',
    transform: 'scale(1.05)',
  } as React.CSSProperties,

  modalTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: colors.text,
    marginBottom: '4px',
    fontFamily: "'Cormorant Garamond', serif",
    letterSpacing: '0.02em',
  } as React.CSSProperties,

  modalSubtitle: {
    fontSize: '0.9rem',
    color: colors.textLight,
    lineHeight: 1.5,
  } as React.CSSProperties,

  // Resumen de reserva
  bookingSummary: {
    background: `linear-gradient(135deg, ${colors.backgroundAlt}, ${colors.background})`,
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '28px',
    border: `1px solid ${colors.border}`,
  } as React.CSSProperties,

  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: `1px solid ${colors.border}40`,
  } as React.CSSProperties,

  summaryLabel: {
    color: colors.textLight,
    fontSize: '0.88rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  } as React.CSSProperties,

  summaryValue: {
    fontWeight: 600,
    color: colors.text,
    fontSize: '0.95rem',
  } as React.CSSProperties,

  priceHighlight: (colors: ColorTheme) => ({
    fontSize: '1.3rem',
    fontWeight: 800,
    background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }) as React.CSSProperties,

  // Formulario
  formGroup: {
    marginBottom: '22px',
  } as React.CSSProperties,

  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '0.88rem',
    fontWeight: 600,
    color: colors.text,
    letterSpacing: '0.01em',
  } as React.CSSProperties,

  input: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '14px',
    border: `2px solid ${colors.border}`,
    fontSize: '0.95rem',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: colors.background,
    color: colors.text,
    outline: 'none',
    boxSizing: 'border-box' as const,
  } as React.CSSProperties,

  inputFocus: (colors: ColorTheme) => ({
    borderColor: colors.primary,
    boxShadow: `0 0 0 4px ${colors.primary}15`,
  }) as React.CSSProperties,

  select: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '14px',
    border: `2px solid ${colors.border}`,
    fontSize: '0.95rem',
    backgroundColor: colors.background,
    color: colors.text,
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box' as const,
  } as React.CSSProperties,

  textarea: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '14px',
    border: `2px solid ${colors.border}`,
    fontSize: '0.95rem',
    minHeight: '100px',
    resize: 'vertical' as const,
    backgroundColor: colors.background,
    color: colors.text,
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box' as const,
  } as React.CSSProperties,

  // Botones
  buttonPrimary: (colors: ColorTheme) => ({
    width: '100%',
    padding: '16px 24px',
    borderRadius: '14px',
    border: 'none',
    background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})`,
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    letterSpacing: '0.02em',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  }) as React.CSSProperties,

  buttonPrimaryHover: (colors: ColorTheme) => ({
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 32px ${colors.success}45`,
  }) as React.CSSProperties,

  buttonSecondary: (colors: ColorTheme) => ({
    width: '100%',
    padding: '14px 24px',
    borderRadius: '14px',
    border: `2px solid ${colors.border}`,
    backgroundColor: 'transparent',
    color: colors.textLight,
    fontSize: '0.95rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    marginTop: '12px',
  }) as React.CSSProperties,

  // Confirmación
  confirmationIcon: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    fontSize: '2.5rem',
    position: 'relative' as const,
  } as React.CSSProperties,

  confirmationTitle: {
    fontSize: '1.8rem',
    fontWeight: 700,
    textAlign: 'center' as const,
    marginBottom: '8px',
    fontFamily: "'Cormorant Garamond', serif",
    letterSpacing: '0.02em',
  } as React.CSSProperties,

  confirmationText: {
    textAlign: 'center' as const,
    color: colors.textLight,
    marginBottom: '28px',
    lineHeight: 1.7,
    fontSize: '0.95rem',
  } as React.CSSProperties,

  whatsappButton: {
    width: '100%',
    padding: '16px 24px',
    borderRadius: '14px',
    border: 'none',
    background: 'linear-gradient(135deg, #25D366, #128C7E)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    letterSpacing: '0.02em',
  } as React.CSSProperties,

  // Estados de carga
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px',
    color: colors.textLight,
    flexDirection: 'column' as const,
    gap: '16px',
  } as React.CSSProperties,

  spinner: {
    width: '44px',
    height: '44px',
    border: `3px solid ${colors.border}`,
    borderTopColor: colors.primary,
    borderRadius: '50%',
    animation: 'booking-spin 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite',
  } as React.CSSProperties,

  // Error
  error: {
    background: 'linear-gradient(135deg, #fff5f5, #ffe8e8)',
    border: '1px solid #fca5a5',
    borderRadius: '14px',
    padding: '16px 20px',
    color: '#b91c1c',
    marginBottom: '16px',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  } as React.CSSProperties,

  // Disclaimer en modal
  disclaimer: {
    background: `linear-gradient(135deg, ${colors.accent}10, ${colors.accent}05)`,
    border: `1.5px solid ${colors.accent}30`,
    borderRadius: '14px',
    padding: '14px 16px',
    fontSize: '0.85rem',
    color: colors.text,
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    lineHeight: 1.5,
  } as React.CSSProperties,

  // Step indicator (para el flujo visual)
  stepIndicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '28px',
  } as React.CSSProperties,

  stepDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  stepLine: {
    width: '32px',
    height: '2px',
    borderRadius: '1px',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,
});

// Keyframes CSS para animaciones
export const spinnerKeyframes = `
  @keyframes booking-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes booking-fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes booking-scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes booking-slideUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes booking-pulse {
    0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
    50% { transform: translateX(-50%) scale(1.4); opacity: 1; }
  }
  @keyframes booking-checkmark {
    0% { transform: scale(0) rotate(-45deg); opacity: 0; }
    50% { transform: scale(1.2) rotate(0deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
  @keyframes booking-confetti {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-60px) rotate(360deg); opacity: 0; }
  }
  @keyframes booking-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes booking-glow {
    0%, 100% { box-shadow: 0 0 8px rgba(37,211,102,0.2); }
    50% { box-shadow: 0 0 20px rgba(37,211,102,0.4); }
  }
`;
