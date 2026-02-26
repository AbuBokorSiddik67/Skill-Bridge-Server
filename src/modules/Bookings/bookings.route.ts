import express from 'express';
import { BookingsController } from './bookings.controller';

const router = express.Router();

router.post("/create", BookingsController.createBooking);
router.get("/my-bookings", BookingsController.getBookingsByUser);
router.delete("/delete/:id", BookingsController.deleteBooking);

export const BookingsRoutes = router;
