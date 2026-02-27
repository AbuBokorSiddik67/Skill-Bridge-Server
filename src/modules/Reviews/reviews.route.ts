import express from 'express';
import { ReviewsController } from './reviews.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.post("/create", auth(UserRole.admin || UserRole.student || UserRole.tutor), ReviewsController.createReview);
router.get("/", ReviewsController.getAllReviews);
router.get("/tutor/:tutorId", auth(UserRole.admin || UserRole.tutor), ReviewsController.getReviewsByTutorId);
router.get("/student/:studentId", auth(UserRole.admin || UserRole.student), ReviewsController.getReviewsByStudentId);
router.delete("/delete/:reviewId", auth(UserRole.admin || UserRole.student || UserRole.tutor), ReviewsController.deleteReview);

export const ReviewsRoutes = router;
