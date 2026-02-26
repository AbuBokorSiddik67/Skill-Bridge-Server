import express from 'express';
import { BookingsController } from './bookings.controller';

const router = express.Router();

router.post("/create", BookingsController.createBooking);
router.get("/my-bookings/:id", BookingsController.getBookingsByUser);
router.delete("/delete/:id", BookingsController.deleteBooking);
router.put("/update/:id", BookingsController.updateBooking);
router.get("/all", BookingsController.getAllBookings);

export const BookingsRoutes = router;
