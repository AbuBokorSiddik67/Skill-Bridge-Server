import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import { de } from "zod/v4/locales";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await AdminService.getAllUsers();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch users",
        });
    }
};

const profileUpdate = async (req: Request, res: Response) => {
    // Implement the logic to update the student's profile
    try {
        const result = await AdminService.profileUpdate(req.params.id as string, req.body);
        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to update profile",
        });
    }
}

const deleteProfile = async (req: Request, res: Response) => {
    try {
        const result = await AdminService.deleteProfile(req.params.id as string);
        res.status(200).json({
            success: true,
            message: "Profile deleted successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to delete profile",
        });
    }
};

const deletdUser = async (req: Request, res: Response) => {
    try {
        const result = await AdminService.deletdUser();
        res.status(200).json({
            success: true,
            message: "Deleted users fetched successfully",
            data: result,
            meta: {
                count: result.length,
                fields: {
                    id: true,
                    email: true,
                    role: true,
                    status: true,
                    name: true,
                    phone: true,
                    imageLink: true,
                    emailVerified: true,
                    isDeleted: true,
                    lastLogin: true,
                    createdAt: true,
                    updatedAt: true,
                }
            }
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch deleted users",
        });
    }
};

export const AdminController = {
    // Add controller methods here
    profileUpdate,
    getAllUsers,
    deleteProfile,
    deletdUser,
};
