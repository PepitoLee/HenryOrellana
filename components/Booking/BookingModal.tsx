// =============================================
// BOOKING MODAL COMPONENT - PREMIUM EDITION
// Modal elegante con formulario animado
// =============================================

import React, { useState, useEffect } from 'react';
import { BookingModalProps, BookingFormData, LATIN_COUNTRIES, DAYS_FULL_ES, MONTHS_ES } from './bookingTypes';
import { createBookingStyles } from './bookingStyles';

const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

// Iconos para el resumen
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.5 }}>
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.5 }}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const ServiceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.5 }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const MoneyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.5 }}>
    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
  </svg>
);

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedSlot,
  serviceType,
  priceAmount,
  priceCurrency,
  onSubmit,
  colors,
}) => {
  const styles = createBookingStyles(colors);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [closeHover, setCloseHover] = useState(false);
  const [submitHover, setSubmitHover] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '', country: '', notes: '' });
      setErrors({});
      setSubmitError(null);
      setAcceptedTerms(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Nombre requerido (mínimo 2 caracteres)';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Teléfono requerido';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Teléfono inválido (mínimo 8 dígitos)';
    }
    if (!formData.country) {
      newErrors.country = 'País requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!acceptedTerms) {
      setSubmitError('Debes aceptar que entiendes que esto es una mentoría, no asesoría legal.');
      return;
    }
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Error al procesar la reserva');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isOpen) return null;

  const slotDate = new Date(selectedSlot.date + 'T00:00:00');
  const dayName = DAYS_FULL_ES[slotDate.getDay()];
  const dateStr = `${slotDate.getDate()} de ${MONTHS_ES[slotDate.getMonth()]}, ${slotDate.getFullYear()}`;
  const serviceName = serviceType === 'mentoria-usa' ? 'Mentoría USA' : 'Asesoría LATAM';
  const priceFormatted = priceCurrency === 'USD' ? `$${priceAmount} USD` : `S/${priceAmount} PEN`;

  const inputStyle = (field: string, hasError: boolean) => ({
    ...styles.input,
    ...(focusedField === field ? styles.inputFocus(colors) : {}),
    ...(hasError ? { borderColor: '#ef4444', boxShadow: '0 0 0 3px rgba(239,68,68,0.1)' } : {}),
  });

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div
        style={{
          ...styles.modalContent,
          animation: 'booking-scaleIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) both',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con gradiente */}
        <div style={styles.modalHeader}>
          <div style={styles.modalHeaderGlow} />
          <button
            style={{
              ...styles.modalClose,
              ...(closeHover ? styles.modalCloseHover : {}),
            }}
            onClick={onClose}
            onMouseEnter={() => setCloseHover(true)}
            onMouseLeave={() => setCloseHover(false)}
            aria-label="Cerrar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <h2 style={styles.modalTitle}>Confirmar Reserva</h2>
          <p style={styles.modalSubtitle}>Completa tus datos para agendar tu sesión</p>
        </div>

        <div style={styles.modalBody}>
          {/* Step indicator visual */}
          <div style={styles.stepIndicator}>
            <div style={{
              ...styles.stepDot,
              background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})`,
            }} />
            <div style={{ ...styles.stepLine, backgroundColor: colors.success }} />
            <div style={{
              ...styles.stepDot,
              background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})`,
            }} />
            <div style={{ ...styles.stepLine, backgroundColor: `${colors.border}` }} />
            <div style={{
              ...styles.stepDot,
              backgroundColor: `${colors.border}`,
            }} />
          </div>

          {/* Resumen compacto y elegante */}
          <div style={styles.bookingSummary}>
            <div style={{ ...styles.summaryRow, borderBottom: `1px solid ${colors.border}30` }}>
              <span style={styles.summaryLabel}><ServiceIcon /> Servicio</span>
              <span style={styles.summaryValue}>{serviceName}</span>
            </div>
            <div style={{ ...styles.summaryRow, borderBottom: `1px solid ${colors.border}30` }}>
              <span style={styles.summaryLabel}><CalendarIcon /> Fecha</span>
              <span style={styles.summaryValue}>{dayName}, {dateStr}</span>
            </div>
            <div style={{ ...styles.summaryRow, borderBottom: `1px solid ${colors.border}30` }}>
              <span style={styles.summaryLabel}><ClockIcon /> Horario</span>
              <span style={styles.summaryValue}>
                {formatTime(selectedSlot.startTime)} - {formatTime(selectedSlot.endTime)}
              </span>
            </div>
            <div style={{ ...styles.summaryRow, borderBottom: 'none', paddingBottom: '4px' }}>
              <span style={styles.summaryLabel}><MoneyIcon /> Inversión</span>
              <span style={styles.priceHighlight(colors)}>{priceFormatted}</span>
            </div>
          </div>

          {submitError && (
            <div style={{
              ...styles.error,
              animation: 'booking-fadeIn 0.3s ease both',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#b91c1c" style={{ flexShrink: 0 }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <span>{submitError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div style={{ ...styles.formGroup, animation: 'booking-fadeIn 0.4s ease 0.05s both' }}>
              <label style={styles.label} htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                placeholder="Tu nombre completo"
                style={inputStyle('name', !!errors.name)}
              />
              {errors.name && (
                <span style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div style={{ ...styles.formGroup, animation: 'booking-fadeIn 0.4s ease 0.1s both' }}>
              <label style={styles.label} htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="tu@email.com"
                style={inputStyle('email', !!errors.email)}
              />
              {errors.email && (
                <span style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                  {errors.email}
                </span>
              )}
            </div>

            {/* Teléfono y País en una fila */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', animation: 'booking-fadeIn 0.4s ease 0.15s both' }}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="phone">WhatsApp *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+1 234 567 8900"
                  style={inputStyle('phone', !!errors.phone)}
                />
                {errors.phone && (
                  <span style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                    {errors.phone}
                  </span>
                )}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="country">País *</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('country')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...styles.select,
                    ...(focusedField === 'country' ? styles.inputFocus(colors) : {}),
                    ...(errors.country ? { borderColor: '#ef4444' } : {}),
                  }}
                >
                  <option value="">Seleccionar...</option>
                  {LATIN_COUNTRIES.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && (
                  <span style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                    {errors.country}
                  </span>
                )}
              </div>
            </div>

            {/* Notas */}
            <div style={{ ...styles.formGroup, animation: 'booking-fadeIn 0.4s ease 0.2s both' }}>
              <label style={styles.label} htmlFor="notes">
                ¿Qué te gustaría discutir? <span style={{ fontWeight: 400, color: colors.textLight }}>(Opcional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                onFocus={() => setFocusedField('notes')}
                onBlur={() => setFocusedField(null)}
                placeholder="Cuéntanos brevemente tu situación o dudas principales..."
                style={{
                  ...styles.textarea,
                  ...(focusedField === 'notes' ? styles.inputFocus(colors) : {}),
                }}
              />
            </div>

            {/* Disclaimer */}
            <div style={{ ...styles.disclaimer, animation: 'booking-fadeIn 0.4s ease 0.25s both' }}>
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                style={{
                  marginTop: '2px',
                  cursor: 'pointer',
                  accentColor: colors.primary,
                  width: '18px',
                  height: '18px',
                  flexShrink: 0,
                }}
              />
              <label htmlFor="terms" style={{ cursor: 'pointer', flex: 1, fontSize: '0.85rem' }}>
                Entiendo que esta es una <strong>mentoría basada en experiencia personal</strong>, NO asesoría legal.
                Henry Orellana NO es abogado.
              </label>
            </div>

            {/* Botón submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              onMouseEnter={() => setSubmitHover(true)}
              onMouseLeave={() => setSubmitHover(false)}
              style={{
                ...styles.buttonPrimary(colors),
                ...(submitHover && !isSubmitting ? styles.buttonPrimaryHover(colors) : {}),
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'wait' : 'pointer',
                animation: 'booking-fadeIn 0.4s ease 0.3s both',
              }}
            >
              {isSubmitting ? (
                <>
                  <span style={{
                    width: '20px',
                    height: '20px',
                    border: '2.5px solid rgba(255,255,255,0.3)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    animation: 'booking-spin 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite',
                    display: 'inline-block',
                  }} />
                  Procesando...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Reservar y Contactar por WhatsApp
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              style={styles.buttonSecondary(colors)}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes booking-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes booking-scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes booking-fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
