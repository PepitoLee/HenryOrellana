// =============================================
// BOOKING SYSTEM TYPES
// =============================================

export interface TimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'available' | 'pending' | 'confirmed' | 'cancelled';
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  notes?: string;
}

export interface Booking {
  id: string;
  slotId: string | null;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCountry: string;
  serviceType: 'mentoria-usa' | 'mentoria-peru';
  priceAmount: number;
  priceCurrency: 'USD' | 'PEN';
  bookingDate: string;
  bookingStartTime: string;
  bookingEndTime: string;
  notes: string | null;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show';
  createdAt: string;
}

export interface BookingCalendarProps {
  serviceType: 'mentoria-usa' | 'mentoria-peru';
  priceAmount: number;
  priceCurrency: 'USD' | 'PEN';
  whatsappNumber: string;
  colors: ColorTheme;
  onBookingComplete?: (booking: Booking) => void;
}

export interface ColorTheme {
  primary: string;
  secondary: string;
  success: string;
  accent: string;
  background: string;
  backgroundAlt: string;
  text: string;
  textLight: string;
  border: string;
}

export interface CalendarGridProps {
  currentMonth: Date;
  selectedDate: Date | null;
  availableSlots: Map<string, TimeSlot[]>;
  onDateSelect: (date: Date) => void;
  onMonthChange: (direction: 'prev' | 'next') => void;
  colors: ColorTheme;
}

export interface TimeSlotsProps {
  selectedDate: Date;
  slots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSlotSelect: (slot: TimeSlot) => void;
  colors: ColorTheme;
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSlot: TimeSlot;
  serviceType: 'mentoria-usa' | 'mentoria-peru';
  priceAmount: number;
  priceCurrency: 'USD' | 'PEN';
  onSubmit: (data: BookingFormData) => Promise<void>;
  colors: ColorTheme;
}

export interface BookingConfirmationProps {
  booking: Booking;
  whatsappNumber: string;
  onClose: () => void;
  colors: ColorTheme;
}

// Países latinos comunes para el dropdown
export const LATIN_COUNTRIES = [
  'Argentina',
  'Bolivia',
  'Brasil',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Cuba',
  'Ecuador',
  'El Salvador',
  'Estados Unidos',
  'Guatemala',
  'Honduras',
  'México',
  'Nicaragua',
  'Panamá',
  'Paraguay',
  'Perú',
  'Puerto Rico',
  'República Dominicana',
  'Uruguay',
  'Venezuela',
  'Otro',
];

// Slots de tiempo predefinidos
export const TIME_SLOTS_CONFIG = {
  morning: [
    { start: '08:00', end: '09:00' },
    { start: '09:00', end: '10:00' },
    { start: '10:00', end: '11:00' },
    { start: '11:00', end: '12:00' },
  ],
  afternoon: [
    { start: '16:00', end: '17:00' },
    { start: '17:00', end: '18:00' },
    { start: '18:00', end: '19:00' },
  ],
};

// Días de la semana disponibles (Martes=2, Jueves=4)
export const AVAILABLE_DAYS = [2, 4];

// Nombres de días y meses en español
export const DAYS_ES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
export const DAYS_FULL_ES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
export const MONTHS_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
