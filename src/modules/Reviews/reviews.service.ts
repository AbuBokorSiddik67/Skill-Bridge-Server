import { prisma } from "../../lib/prisma";

const createReview = async (payload: any) => {
    try {
        // Logic to create a review
        const result = await prisma.studentReviews.create({
            data: {
                tutorId: payload.tutorId,
                studentId: payload.studentId,
                rating: payload.rating,
                comment: payload.comment,
            }
        });
        return result;
    } catch (error: any) {
        throw new Error(`Failed to create review: ${error.message}`);
    }
}

const getAllReviews = async () => {
    try {
        // Logic to get all reviews        const reviews = await prisma.studentReviews.findMany({
        const reviews = await prisma.studentReviews.findMany({
            include: {
                tutor: {
                    select: {
                        id: true,
                    }
                },
                student: {
                    select: {
                        id: true, name: true,
                    }
                }
            }
        });
        return reviews;
    } catch (error: any) {
        throw new Error(`Failed to get reviews: ${error.message}`);
    }
};

const getReviewsByTutorId = async (tutorId: string) => {
    try {
        // Logic to get reviews by tutor ID
        const reviews = await prisma.studentReviews.findMany({
            where: { tutorId },
            include: {
                student: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
        return reviews;
    } catch (error: any) {
        throw new Error(`Failed to get reviews: ${error.message}`);
    }
};

const getReviewsByStudentId = async (studentId: string) => {
    try {
        // Logic to get reviews by student ID
        const reviews = await prisma.studentReviews.findMany({
            where: { studentId },
            include: {
                tutor: {
                    select: {
                        id: true,
                    }
                }
            }
        });
        return reviews;
    }
    catch (error: any) {
        throw new Error(`Failed to get reviews: ${error.message}`);
    }
};

const deleteReview = async (reviewId: string) => {
    try {
        // Logic to delete a review
        const result = await prisma.studentReviews.delete({
            where: { id: reviewId }
        });
        return result;
    } catch (error: any) {
        throw new Error(`Failed to delete review: ${error.message}`);
    }
};

export const ReviewsService = {
    // Add service methods here
    createReview,
    getAllReviews,
    getReviewsByTutorId,
    getReviewsByStudentId,
    deleteReview,
};