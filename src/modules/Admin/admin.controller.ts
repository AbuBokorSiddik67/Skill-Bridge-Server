import { Request, Response } from "express";
import { AdminService } from "./admin.service";

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

export const AdminController = {
    // Add controller methods here
    profileUpdate,
    getAllUsers,
};