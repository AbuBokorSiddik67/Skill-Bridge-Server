import express from 'express';
import { BookingsController } from './bookings.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.post("/create", auth(UserRole.admin, UserRole.student, UserRole.tutor), BookingsController.createBooking);
router.get("/", auth(UserRole.admin), BookingsController.getAllBookings);
router.get("/my-booking/:id", auth(UserRole.admin, UserRole.student, UserRole.tutor), BookingsController.getBookingsByUser);
router.delete("/delete/:id", auth(UserRole.admin, UserRole.student, UserRole.tutor), BookingsController.deleteBooking);
router.put("/update/:id", auth(UserRole.admin, UserRole.student, UserRole.tutor), BookingsController.updateBooking);

export const BookingsRoutes = router;
