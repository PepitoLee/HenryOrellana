// =============================================
// BOOKING MODAL COMPONENT
// Modal con formulario de reserva
// =============================================

import React, { useState, useEffect } from 'react';
import { BookingModalProps, BookingFormData, LATIN_COUNTRIES, DAYS_FULL_ES, MONTHS_ES } from './bookingTypes';
import { createBookingStyles } from './bookingStyles';

// Convertir hora de 24h a formato legible
const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

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

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '', country: '', notes: '' });
      setErrors({});
      setSubmitError(null);
      setAcceptedTerms(false);
    }
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevenir scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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

  // Formatear fecha y hora del slot
  const slotDate = new Date(selectedSlot.date + 'T00:00:00');
  const dayName = DAYS_FULL_ES[slotDate.getDay()];
  const dateStr = `${slotDate.getDate()} de ${MONTHS_ES[slotDate.getMonth()]}, ${slotDate.getFullYear()}`;

  const serviceName = serviceType === 'mentoria-usa' ? 'Mentoría USA' : 'Asesoría LATAM';
  const priceFormatted = priceCurrency === 'USD' ? `$${priceAmount} USD` : `S/${priceAmount} PEN`;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.modalClose} onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <h2 style={styles.modalTitle}>Confirmar Reserva</h2>

        {/* Resumen de la reserva */}
        <div style={styles.bookingSummary}>
          <div style={{ ...styles.summaryRow, borderBottom: 'none' }}>
            <span style={styles.summaryLabel}>Servicio</span>
            <span style={styles.summaryValue}>{serviceName}</span>
          </div>
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>Fecha</span>
            <span style={styles.summaryValue}>
              {dayName}, {dateStr}
            </span>
          </div>
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>Horario</span>
            <span style={styles.summaryValue}>
              {formatTime(selectedSlot.startTime)} - {formatTime(selectedSlot.endTime)}
            </span>
          </div>
          <div style={{ ...styles.summaryRow, borderBottom: 'none' }}>
            <span style={styles.summaryLabel}>Inversión</span>
            <span style={styles.priceHighlight(colors)}>{priceFormatted}</span>
          </div>
        </div>

        {/* Error de envío */}
        {submitError && <div style={styles.error}>{submitError}</div>}

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="Tu nombre completo"
              style={{
                ...styles.input,
                ...(focusedField === 'name' ? styles.inputFocus(colors) : {}),
                ...(errors.name ? { borderColor: '#dc2626' } : {}),
              }}
            />
            {errors.name && (
              <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>
                {errors.name}
              </span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="tu@email.com"
              style={{
                ...styles.input,
                ...(focusedField === 'email' ? styles.inputFocus(colors) : {}),
                ...(errors.email ? { borderColor: '#dc2626' } : {}),
              }}
            />
            {errors.email && (
              <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>
                {errors.email}
              </span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">
              Teléfono (WhatsApp) *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              placeholder="+1 234 567 8900"
              style={{
                ...styles.input,
                ...(focusedField === 'phone' ? styles.inputFocus(colors) : {}),
                ...(errors.phone ? { borderColor: '#dc2626' } : {}),
              }}
            />
            {errors.phone && (
              <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>
                {errors.phone}
              </span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="country">
              País de residencia *
            </label>
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
                ...(errors.country ? { borderColor: '#dc2626' } : {}),
              }}
            >
              <option value="">Selecciona tu país</option>
              {LATIN_COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>
                {errors.country}
              </span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="notes">
              ¿Qué te gustaría discutir? (Opcional)
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
          <div style={styles.disclaimer}>
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              style={{ marginTop: '2px', cursor: 'pointer' }}
            />
            <label htmlFor="terms" style={{ cursor: 'pointer', flex: 1 }}>
              Entiendo que esta es una <strong>mentoría basada en experiencia personal</strong>, NO asesoría legal.
              Henry Orellana NO es abogado.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              ...styles.buttonPrimary(colors),
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'wait' : 'pointer',
            }}
          >
            {isSubmitting ? (
              <>
                <span
                  style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                  }}
                />
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

          <button type="button" onClick={onClose} style={styles.buttonSecondary(colors)}>
            Cancelar
          </button>
        </form>
      </div>

      {/* Keyframes para spinner */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
