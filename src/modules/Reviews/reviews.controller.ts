import { Request, Response } from "express";
import { ReviewsService } from "./reviews.service";
import { success } from "zod";

const createReview = async (req: Request, res: Response) => {
    try {
        const result = await ReviewsService.createReview(req.body);
        res.status(201).json({
            success: true,
            massage: "Review created successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getAllReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await ReviewsService.getAllReviews();
        res.status(200).json({
            success: true,
            data: reviews
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getReviewsByTutorId = async (req: Request, res: Response) => {
    try {
        const tutorId = req.params.tutorId as string;
        const reviews = await ReviewsService.getReviewsByTutorId(tutorId);
        res.status(200).json({
            success: true,
            data: reviews
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getReviewsByStudentId = async (req: Request, res: Response) => {
    try {
        const studentId = req.params.studentId as string;
        const reviews = await ReviewsService.getReviewsByStudentId(studentId);
        res.status(200).json({
            success: true,
            data: reviews
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteReview = async (req: Request, res: Response) => {
    try {
        const reviewId = req.params.reviewId as string;
        const result = await ReviewsService.deleteReview(reviewId);
        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const ReviewsController = {
    // Add controller methods here
    createReview,
    getAllReviews,
    getReviewsByTutorId,
    getReviewsByStudentId,
    deleteReview,
};