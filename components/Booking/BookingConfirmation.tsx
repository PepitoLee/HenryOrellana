// =============================================
// BOOKING CONFIRMATION COMPONENT
// Pantalla de confirmación post-reserva
// =============================================

import React, { useEffect } from 'react';
import { BookingConfirmationProps, DAYS_FULL_ES, MONTHS_ES } from './bookingTypes';
import { createBookingStyles } from './bookingStyles';

// Convertir hora de 24h a formato legible
const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  booking,
  whatsappNumber,
  onClose,
  colors,
}) => {
  const styles = createBookingStyles(colors);

  // Prevenir scroll del body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Formatear fecha
  const bookingDate = new Date(booking.bookingDate + 'T00:00:00');
  const dayName = DAYS_FULL_ES[bookingDate.getDay()];
  const dateStr = `${bookingDate.getDate()} de ${MONTHS_ES[bookingDate.getMonth()]}, ${bookingDate.getFullYear()}`;

  const serviceName = booking.serviceType === 'mentoria-usa' ? 'Mentoría USA' : 'Asesoría LATAM';
  const priceFormatted =
    booking.priceCurrency === 'USD' ? `$${booking.priceAmount} USD` : `S/${booking.priceAmount} PEN`;

  // Generar mensaje de WhatsApp
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

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        {/* Icono de éxito */}
        <div
          style={{
            ...styles.confirmationIcon,
            backgroundColor: `${colors.success}20`,
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill={colors.success}>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>

        <h2 style={{ ...styles.confirmationTitle, color: colors.text }}>¡Reserva Registrada!</h2>

        <p style={styles.confirmationText}>
          Tu reserva ha sido registrada exitosamente. Ahora solo falta confirmarla por WhatsApp para
          coordinar los detalles del pago.
        </p>

        {/* Resumen de la reserva */}
        <div style={styles.bookingSummary}>
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>ID de Reserva</span>
            <span
              style={{
                ...styles.summaryValue,
                fontFamily: 'monospace',
                backgroundColor: colors.backgroundAlt,
                padding: '4px 8px',
                borderRadius: '4px',
              }}
            >
              {booking.id.slice(0, 8).toUpperCase()}
            </span>
          </div>
          <div style={styles.summaryRow}>
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
              {formatTime(booking.bookingStartTime)} - {formatTime(booking.bookingEndTime)}
            </span>
          </div>
          <div style={{ ...styles.summaryRow, borderBottom: 'none' }}>
            <span style={styles.summaryLabel}>Inversión</span>
            <span style={styles.priceHighlight(colors)}>{priceFormatted}</span>
          </div>
        </div>

        {/* Siguiente paso */}
        <div
          style={{
            backgroundColor: `${colors.success}10`,
            border: `2px solid ${colors.success}30`,
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '24px',
          }}
        >
          <h4
            style={{
              color: colors.success,
              fontWeight: 600,
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={colors.success}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Siguiente paso
          </h4>
          <p style={{ color: colors.text, fontSize: '0.95rem', lineHeight: 1.5 }}>
            Haz clic en el botón de abajo para enviarme un mensaje por WhatsApp con los detalles de tu
            reserva. Te responderé a la brevedad para confirmar y coordinar el pago.
          </p>
        </div>

        {/* Botón de WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.whatsappButton,
            textDecoration: 'none',
          }}
          onClick={() => {
            // Opcional: marcar que se envió WhatsApp
            console.log('WhatsApp sent for booking:', booking.id);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Confirmar por WhatsApp
        </a>

        <button type="button" onClick={onClose} style={styles.buttonSecondary(colors)}>
          Cerrar
        </button>

        {/* Nota */}
        <p
          style={{
            marginTop: '20px',
            fontSize: '0.85rem',
            color: colors.textLight,
            textAlign: 'center',
          }}
        >
          También te enviaremos un email de confirmación a <strong>{booking.clientEmail}</strong>
        </p>
      </div>
    </div>
  );
};
