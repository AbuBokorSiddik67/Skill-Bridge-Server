import { prisma } from "../../lib/prisma";

const createBooking = async (payload: any) => {
    try {
        const result = await prisma.bookings.create({
            data: {
                tutorId: payload.tutorId,
                studentId: payload.studentId,
                categoryId: payload.categoryId,
                startDate: new Date(payload.date),
                endDate: new Date(payload.date),
                totalPrice: payload.totalPrice,
                location: payload.location,
            },
        });
        return result;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

const getBookingsByUser = async (user: any) => {
    try {
        let bookings;

        if (user.role === "ADMIN") {
            bookings = await prisma.bookings.findMany({
                include: {
                    student: true,
                    tutor: true,
                    category: true,
                },
            });
        }

        else if (user.role === "STUDENT") {
            bookings = await prisma.bookings.findMany({
                where: {
                    studentId: user.id,
                },
                include: {
                    tutor: true,
                    category: true,
                },
            });
        }

        else if (user.role === "TUTOR") {
            bookings = await prisma.bookings.findMany({
                where: {
                    tutorId: user.id,
                },
                include: {
                    student: true,
                    category: true,
                },
            });
        }

        return bookings;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

const deleteBooking = async (bookingId: string) => {
    try {
        const result = await prisma.bookings.delete({
            where: {
                id: bookingId,
            },
        });
        return result;
    } catch (error: any) {
        throw new Error(error.message);
    }   
};

export const BookingsService = {
    // Add service methods here
    createBooking,
    getBookingsByUser,
    deleteBooking,
};