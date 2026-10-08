import { reservationDAO } from '../dao/reservation.dao.js';

class ReservationRepository {
  async getReservations() {
    return await reservationDAO.getAll();
  }

  async getReservationById(id) {
    return await reservationDAO.getById(id);
  }

  async createReservation(reservationData) {
    return await reservationDAO.create(reservationData);
  }

  async updateReservation(id, reservationData) {
    return await reservationDAO.update(id, reservationData);
  }

  async deleteReservation(id) {
    return await reservationDAO.delete(id);
  }
}

export const reservationRepository = new ReservationRepository();
