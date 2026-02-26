import { prisma } from "../../lib/prisma";

const createBooking = async (payload: any) => {
    try {
        const result = await prisma.bookings.create({
            data: {
                tutorId: payload.tutorId,
                studentId: payload.studentId,
                categoryId: payload.categoryId,
                startDate: new Date(payload.startDate),
                endDate: new Date(payload.endDate),
                totalPrice: payload.totalPrice,
                location: payload.location || "Online",
                meetingLink: payload.meetingLink || null,
                notes: payload.notes || null,
                paymentMethod: payload.paymentMethod || null,
            },
            include: {
                tutor: {
                    include: {
                        user: {
                            select: { name: true, email: true }
                        }
                    }
                },
                student: {
                    select: { name: true, email: true }
                },
                category: true
            }
        });
        return result;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

const getBookingsByUser = async (id: any) => {
    try {
        let bookings;
        const user = await prisma.user.findUnique({
            where: { id },
        });

        // console.log("User in getBookingsByUser:", user);

        if (user!.role === "ADMIN") {
            bookings = await prisma.bookings.findMany({
                include: {
                    student: true,
                    tutor: true,
                    category: true,
                },
            });
        }

        else if (user!.role === "STUDENT") {
            bookings = await prisma.bookings.findMany({
                where: {
                    studentId: user!.id,
                },
                include: {
                    tutor: true,
                    category: true,
                },
            });
        }

        else if (user!.role === "TUTOR") {
            bookings = await prisma.bookings.findMany({
                where: {
                    tutorId: user!.id,
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

const updateBooking = async (id: string, payload: any) => {
    try {
        const result = await prisma.bookings.update({
            where: { id },
            data: {
                startDate: payload.startDate ? new Date(payload.startDate) : undefined,
                endDate: payload.endDate ? new Date(payload.endDate) : undefined,
                location: payload.location,
                meetingLink: payload.meetingLink,
                notes: payload.notes,
                status: payload.status,
                paymentStatus: payload.paymentStatus,
                cancellationReason: payload.cancellationReason,
                categoryId: payload.categoryId
            },
            include: {
                tutor: {
                    include: {
                        user: { select: { name: true, email: true } }
                    }
                },
                student: { select: { name: true, email: true } },
                category: true
            }
        });

        return result;
    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new Error("Booking record not found.");
        }
        throw new Error(`Booking update failed: ${error.message}`);
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

const getAllBookings = async () => {
    try {
        const result = await prisma.bookings.findMany({
            include: {
                student: true,
                tutor: true,
                category: true,
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
    updateBooking,
    getAllBookings,
};
