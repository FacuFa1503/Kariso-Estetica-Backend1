import mongoose from 'mongoose';

const reservationCollection = 'reservations';

const reservationSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  date: { type: Date, required: true },
  services: [
    {
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'services',
        required: true
      },
      quantity: { type: Number, required: true, default: 1 }
    }
  ],
  status: { type: String, default: 'pending' }
});

export const reservationModel = mongoose.model(reservationCollection, reservationSchema);
