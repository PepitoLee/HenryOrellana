// =============================================
// BOOKING CONFIRMATION COMPONENT - PREMIUM EDITION
// Pantalla de éxito con animaciones celebratorias
// =============================================

import React, { useEffect, useState } from 'react';
import { BookingConfirmationProps, DAYS_FULL_ES, MONTHS_ES } from './bookingTypes';
import { createBookingStyles } from './bookingStyles';

const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

// Partícula de confetti
const ConfettiParticle: React.FC<{ delay: number; color: string; left: string }> = ({ delay, color, left }) => (
  <div style={{
    position: 'absolute',
    top: '-8px',
    left,
    width: '8px',
    height: '8px',
    borderRadius: '2px',
    backgroundColor: color,
    animation: `booking-confetti 1.5s ease ${delay}s both`,
    opacity: 0,
  }} />
);

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  booking,
  whatsappNumber,
  onClose,
  colors,
}) => {
  const styles = createBookingStyles(colors);
  const [whatsappHover, setWhatsappHover] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const bookingDate = new Date(booking.bookingDate + 'T00:00:00');
  const dayName = DAYS_FULL_ES[bookingDate.getDay()];
  const dateStr = `${bookingDate.getDate()} de ${MONTHS_ES[bookingDate.getMonth()]}, ${bookingDate.getFullYear()}`;

  const serviceName = booking.serviceType === 'mentoria-usa' ? 'Mentoría USA' : 'Asesoría LATAM';
  const priceFormatted =
    booking.priceCurrency === 'USD' ? `$${booking.priceAmount} USD` : `S/${booking.priceAmount} PEN`;

  const generateWhatsAppMessage = (): string => {
    const message = `Hola Henry, quiero confirmar mi reserva de mentoría:

📅 *Fecha:* ${dayName}, ${dateStr}
⏰ *Hora:* ${formatTime(booking.bookingStartTime)} - ${formatTime(booking.bookingEndTime)}
📋 *Servicio:* ${serviceName}
💰 *Inversión:* ${priceFormatted}

*Mis datos:*
👤 Nombre: ${booking.clientName}
📧 Email: ${booking.clientEmail}
📱 Teléfono: ${booking.clientPhone}
🌎 País: ${booking.clientCountry}
${booking.notes ? `\n📝 Notas: ${booking.notes}` : ''}

🔖 *ID de reserva:* ${booking.id.slice(0, 8).toUpperCase()}

Quedo atento a la confirmación. ¡Gracias!`;

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${generateWhatsAppMessage()}`;

  const confettiColors = [colors.success, colors.primary, colors.accent, '#FFD700', '#FF6B6B', '#4ECDC4'];

  return (
    <div style={styles.modalOverlay}>
      <div style={{
        ...styles.modalContent,
        animation: 'booking-scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
        padding: '0',
      }}>
        {/* Header con gradiente de éxito */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.success}15, ${colors.primary}10)`,
          padding: '28px 24px 20px',
          textAlign: 'center' as const,
          position: 'relative' as const,
          overflow: 'hidden' as const,
          borderBottom: `1px solid ${colors.border}30`,
        }}>
          {/* Glow superior */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${colors.success}, #25D366, ${colors.primary})`,
          }} />

          {/* Confetti particles */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {confettiColors.map((color, i) => (
              <ConfettiParticle
                key={i}
                delay={0.2 + i * 0.15}
                color={color}
                left={`${15 + i * 14}%`}
              />
            ))}
          </div>

          {/* Checkmark animado */}
          <div style={{
            ...styles.confirmationIcon,
            background: `linear-gradient(135deg, ${colors.success}25, ${colors.success}10)`,
            border: `2px solid ${colors.success}30`,
            animation: 'booking-checkmark 0.6s ease 0.2s both',
          }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h2 style={{
            ...styles.confirmationTitle,
            color: colors.text,
            animation: 'booking-fadeIn 0.5s ease 0.4s both',
          }}>
            ¡Reserva Registrada!
          </h2>

          <p style={{
            ...styles.confirmationText,
            marginBottom: 0,
            animation: 'booking-fadeIn 0.5s ease 0.5s both',
          }}>
            Tu sesión ha sido agendada. Solo falta confirmarla por WhatsApp.
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 24px 28px' }}>
          {/* Step indicator - paso 3 activo */}
          <div style={{
            ...styles.stepIndicator,
            marginBottom: '24px',
            animation: 'booking-fadeIn 0.4s ease 0.5s both',
          }}>
            <div style={{ ...styles.stepDot, background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})` }} />
            <div style={{ ...styles.stepLine, backgroundColor: colors.success }} />
            <div style={{ ...styles.stepDot, background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})` }} />
            <div style={{ ...styles.stepLine, backgroundColor: colors.success }} />
            <div style={{ ...styles.stepDot, background: `linear-gradient(135deg, ${colors.success}, ${colors.primary})`, animation: 'booking-glow 2s ease infinite' }} />
          </div>

          {/* Resumen de la reserva */}
          <div style={{
            ...styles.bookingSummary,
            animation: 'booking-fadeIn 0.4s ease 0.55s both',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 0 12px',
              borderBottom: `1px solid ${colors.border}30`,
            }}>
              <span style={{ ...styles.summaryLabel, fontSize: '0.82rem' }}>ID de Reserva</span>
              <span style={{
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '0.88rem',
                color: colors.primary,
                backgroundColor: `${colors.primary}12`,
                padding: '4px 12px',
                borderRadius: '8px',
                letterSpacing: '1px',
              }}>
                {booking.id.slice(0, 8).toUpperCase()}
              </span>
            </div>
            <div style={{ ...styles.summaryRow, borderBottom: `1px solid ${colors.border}30` }}>
              <span style={styles.summaryLabel}>Servicio</span>
              <span style={styles.summaryValue}>{serviceName}</span>
            </div>
            <div style={{ ...styles.summaryRow, borderBottom: `1px solid ${colors.border}30` }}>
              <span style={styles.summaryLabel}>Fecha</span>
              <span style={styles.summaryValue}>{dayName}, {dateStr}</span>
            </div>
            <div style={{ ...styles.summaryRow, borderBottom: `1px solid ${colors.border}30` }}>
              <span style={styles.summaryLabel}>Horario</span>
              <span style={styles.summaryValue}>
                {formatTime(booking.bookingStartTime)} - {formatTime(booking.bookingEndTime)}
              </span>
            </div>
            <div style={{ ...styles.summaryRow, borderBottom: 'none' }}>
              <span style={styles.summaryLabel}>Inversión</span>
              <span style={styles.priceHighlight(colors)}>{priceFormatted}</span>
            </div>
          </div>

          {/* Siguiente paso - card */}
          <div style={{
            background: `linear-gradient(135deg, #25D36610, #128C7E08)`,
            border: '1.5px solid #25D36630',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '24px',
            animation: 'booking-fadeIn 0.4s ease 0.6s both',
          }}>
            <h4 style={{
              color: '#25D366',
              fontWeight: 700,
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.95rem',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Siguiente paso
            </h4>
            <p style={{
              color: colors.text,
              fontSize: '0.9rem',
              lineHeight: 1.6,
              margin: 0,
              opacity: 0.85,
            }}>
              Haz clic en el botón de abajo para enviarme un mensaje por WhatsApp con los detalles.
              Te responderé a la brevedad para confirmar y coordinar el pago.
            </p>
          </div>

          {/* Botón de WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setWhatsappHover(true)}
            onMouseLeave={() => setWhatsappHover(false)}
            style={{
              ...styles.whatsappButton,
              textDecoration: 'none',
              animation: 'booking-fadeIn 0.4s ease 0.65s both',
              ...(whatsappHover ? {
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 32px rgba(37,211,102,0.4)',
              } : {}),
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Confirmar por WhatsApp
          </a>

          <button
            type="button"
            onClick={onClose}
            style={{
              ...styles.buttonSecondary(colors),
              animation: 'booking-fadeIn 0.4s ease 0.7s both',
            }}
          >
            Cerrar
          </button>

          {/* Nota final */}
          <p style={{
            marginTop: '20px',
            fontSize: '0.82rem',
            color: colors.textLight,
            textAlign: 'center',
            opacity: 0.7,
            animation: 'booking-fadeIn 0.4s ease 0.75s both',
          }}>
            También te enviaremos confirmación a <strong style={{ color: colors.text }}>{booking.clientEmail}</strong>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes booking-scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes booking-fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes booking-checkmark {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes booking-confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-80px) rotate(360deg); opacity: 0; }
        }
        @keyframes booking-glow {
          0%, 100% { box-shadow: 0 0 6px rgba(37,211,102,0.3); }
          50% { box-shadow: 0 0 16px rgba(37,211,102,0.5); }
        }
      `}</style>
    </div>
  );
};
