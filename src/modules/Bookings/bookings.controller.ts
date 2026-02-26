import { Request, Response } from "express";
import { BookingsService } from "./bookings.service";
import { success } from "zod";
import { cleanRegex } from "zod/v4/core/util.cjs";

const createBooking = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await BookingsService.createBooking(payload);
        res.status(201).json({
            success: true,
            massage: "Booking created successfully",
            data: result
        });
        return result;
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getBookingsByUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const result = await BookingsService.getBookingsByUser(id);
        res.status(200).json({
            success: true,
            message: "Bookings retrieved successfully",
            data: result
        });
        return result;
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateBooking = async (req: Request, res: Response) => {
    try {
        const bookingId = req.params.id;
        const payload = req.body;
        const result = await BookingsService.updateBooking(bookingId as string, payload);
        res.status(200).json({
            success: true,
            message: "Booking updated successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteBooking = async (req: Request, res: Response) => {
    try {
        const bookingId = req.params.id;
        const result = await BookingsService.deleteBooking(bookingId as string);
        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
            data: result
        });
        return result;
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAllBookings = async (req: Request, res: Response) => {
    try {
        const result = await BookingsService.getAllBookings();
        res.status(200).json({
            success: true,
            message: "All bookings retrieved successfully",
            data: result
        });
        return result;
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const BookingsController = {
    // Add controller methods here
    createBooking,
    getBookingsByUser,
    deleteBooking,
    updateBooking,
    getAllBookings,
};