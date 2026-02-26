import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const createCategory = async (payload: any) => {
    try {
        const result = await prisma.categories.create({
            data: {
                name: payload.name,
            }
        })
        return result;
    } catch (error) {
        throw error;
    }
}

const getCategory = async () => {
    try {
        const result = await prisma.categories.findMany();
        return result;
    } catch (error) {
        throw error;
    }
}

const updateCategory = async (id: string, payload: any) => {
    try {
        const result = await prisma.categories.update({
            where: {
                id: id
            },
            data: {
                name: payload.name,
            }
        })
        return result;
    } catch (error) {
        throw error;
    }
}

const deleteCategory = async (id: string) => {
    try {
        const result = await prisma.categories.delete({
            where: {
                id: id
            }
        })
        return result;
    } catch (error) {
        throw error;
    }
}

export const CategoriesService = {
    // Add service methods here
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
};