import { Request, Response } from "express";
import { StudentService } from "./student.service";

const getAll = async (req: Request, res: Response) => {
    // Implement the logic to update the student's profile
    try {
        const result = await StudentService.profileUpdate();
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

const profileUpdate = async (req: Request, res: Response) => {
    // Implement the logic to update the student's profile
    try {
        const result = await StudentService.profileUpdate(req.params.id as string, req.body);
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
        const result = await StudentService.deleteProfile(req.params.id as string);
        res.status(200).json({
            success: true,
            message: "Profile deleted successfully",
            data: result,
        });
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to delete profile",
        });
    }
};

export const StudentController = {
    // Add controller methods here
    profileUpdate,
    deleteProfile,
};