import { z } from 'zod';

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const reservationSchema = z.object({
  customerName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  customerEmail: z.string().email('Email inválido'),
  date: z.string().datetime('La fecha debe tener un formato ISO válido'),
  services: z.array(
    z.object({
      service: z.string().regex(objectIdRegex, 'ID de servicio inválido'),
      quantity: z.number().int().positive('La cantidad debe ser un entero positivo').default(1)
    })
  ).min(1, 'La reserva debe incluir al menos un servicio'),
  status: z.enum(['pending', 'confirmed', 'cancelled']).optional()
});

export const validateReservation = (data) => reservationSchema.parse(data);
export const validateReservationUpdate = (data) => reservationSchema.partial().parse(data);
