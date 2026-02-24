import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { success } from "zod";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AuthService.createUser(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "User creation failed",
            error: error.message,
        });
    }
}

const logInUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AuthService.logInUser(req.body);
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    } catch (error: any) {
        res.status(401).json({
            success: false,
            message: "Login failed",
            error: error.message,
        });
    }
}

export const AuthController = {
    // Add controller methods here
    createUser,
    logInUser,
};