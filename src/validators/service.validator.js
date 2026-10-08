import { z } from 'zod';

export const serviceSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  price: z.number().positive('El precio debe ser un número positivo'),
  duration: z.number().int().positive('La duración debe ser en minutos enteros positivos'),
  availability: z.boolean().optional()
});

export const validateService = (data) => serviceSchema.parse(data);
export const validateServiceUpdate = (data) => serviceSchema.partial().parse(data);
