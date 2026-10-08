import { reservationModel } from './models/reservation.model.js';

class ReservationDAO {
  async getAll() {
    return await reservationModel.find().populate('services.service');
  }

  async getById(id) {
    return await reservationModel.findById(id).populate('services.service');
  }

  async create(reservationData) {
    return await reservationModel.create(reservationData);
  }

  async update(id, reservationData) {
    return await reservationModel.findByIdAndUpdate(id, reservationData, { new: true }).populate('services.service');
  }

  async delete(id) {
    return await reservationModel.findByIdAndDelete(id);
  }
}

export const reservationDAO = new ReservationDAO();
