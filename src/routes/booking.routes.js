import { Router } from 'express';
import { bookingController } from '../controllers/booking.controller.js';
import { validateBody } from '../middlewares/validate.middleware.js';
import { reservationSchema } from '../validators/reservation.validator.js';

const router = Router();

router.get('/', bookingController.getBookings);
router.get('/:id', bookingController.getBookingById);
router.post('/', validateBody(reservationSchema), bookingController.createBooking);
router.put('/:id', validateBody(reservationSchema.partial()), bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

export default router;
