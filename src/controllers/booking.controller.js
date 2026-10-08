import { bookingService } from '../services/booking.service.js';

class BookingController {
  async getBookings(req, res) {
    try {
      const bookings = await bookingService.getAllReservations();
      return res.status(200).json({ status: 'success', payload: bookings });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }

  async getBookingById(req, res) {
    try {
      const { id } = req.params;
      const booking = await bookingService.getReservationById(id);
      if (!booking) {
        return res.status(404).json({ status: 'error', message: 'Reserva no encontrada' });
      }
      return res.status(200).json({ status: 'success', payload: booking });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }

  async createBooking(req, res) {
    try {
      const newBooking = await bookingService.createReservation(req.body);
      return res.status(201).json({ status: 'success', payload: newBooking });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }

  async updateBooking(req, res) {
    try {
      const { id } = req.params;
      const updatedBooking = await bookingService.updateReservation(id, req.body);
      if (!updatedBooking) {
        return res.status(404).json({ status: 'error', message: 'Reserva no encontrada' });
      }
      return res.status(200).json({ status: 'success', payload: updatedBooking });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }

  async deleteBooking(req, res) {
    try {
      const { id } = req.params;
      const deletedBooking = await bookingService.deleteReservation(id);
      if (!deletedBooking) {
        return res.status(404).json({ status: 'error', message: 'Reserva no encontrada' });
      }
      return res.status(200).json({ status: 'success', message: 'Reserva eliminada correctamente' });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }
}

export const bookingController = new BookingController();
