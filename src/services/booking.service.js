import { reservationRepository } from '../repositories/reservation.repository.js';

class BookingService {
  async getAllReservations() {
    return await reservationRepository.getReservations();
  }

  async getReservationById(id) {
    return await reservationRepository.getReservationById(id);
  }

  async createReservation(reservationData) {
    return await reservationRepository.createReservation(reservationData);
  }

  async updateReservation(id, reservationData) {
    return await reservationRepository.updateReservation(id, reservationData);
  }

  async deleteReservation(id) {
    return await reservationRepository.deleteReservation(id);
  }
}

export const bookingService = new BookingService();
