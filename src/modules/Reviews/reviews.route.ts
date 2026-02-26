import express from 'express';
import { ReviewsController } from './reviews.controller';

const router = express.Router();

router.post("/create", ReviewsController.createReview);
router.get("/", ReviewsController.getAllReviews);
router.get("/tutor/:tutorId", ReviewsController.getReviewsByTutorId);
router.get("/student/:studentId", ReviewsController.getReviewsByStudentId);
router.delete("/:reviewId", ReviewsController.deleteReview);

export const ReviewsRoutes = router;
