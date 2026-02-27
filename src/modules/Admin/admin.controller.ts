import { Request, Response } from "express";
import { AdminService } from "./admin.service";

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

const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id  as string;
    try {
        const result = await AdminService.deleteUser(id);
        res.status(200).json({
            success: true,
            message: "User permanently deleted successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to delete user",
        });
    }
};

export const AdminController = {
    // Add controller methods here
    deletdUser,
    deleteUser,
};
