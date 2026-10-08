import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({
  services: [
    {
      service: {
        type: Schema.Types.ObjectId,
        ref: 'Service',
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
}, { timestamps: true });

export const BookingModel = model('Booking', bookingSchema);