import { NextFunction, Request, Response } from "express";
import { CategoriesService } from "./categories.service";

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Logic to create a new category
        const result = await CategoriesService.createCategory(req.body);
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Error creating category",
            error: error.message
        });
    }
}

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Logic to create a new category
        const result = await CategoriesService.getCategory();
        res.status(201).json({
            success: true,
            message: "Category retrived successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Error retrived category",
            error: error.message
        });
    }
}

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Logic to create a new category
        const result = await CategoriesService.updateCategory(req.params.id as string, req.body);
        res.status(201).json({
            success: true,
            message: "Category updated successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Error updating category",
            error: error.message
        });
    }
}

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Logic to create a new category
        const result = await CategoriesService.deleteCategory(req.params.id as string);
        res.status(201).json({
            success: true,
            message: "Category deleted successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Error deleting category",
            error: error.message
        });
    }
}

export const CategoriesController = {
    // Add controller methods here
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
};