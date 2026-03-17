import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

const profileUpdate = async (id: string, payload: any) => {
    try {
        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 12);
        }

        const result = await prisma.user.update({
            where: { id },
            data: {
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                imageLink: payload.imageLink,
                bio: payload.bio,
                address: payload.address,
                password: payload.password,
            },
            select: {
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
        });

        return result;

    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new Error("user not found.");
        }
        throw new Error(`Profile Update Failed: ${error.message}`);
    }
};

const deleteProfile = async (id: string) => {
    try {
        const result = await prisma.user.update({
            where: { id },
            data: {
                isDeleted: true,
            },
            select: {
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
        });

        return result;
    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new Error("user not found.");
        }
        throw new Error(`Profile Deletion Failed: ${error.message}`);
    }
};

const getAll = async (payload: any) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: payload.id,
            }
        });
        const { password, ...userData } = user!;
        return userData;
    } catch (error) {
        throw error;
    }
}
export const StudentService = {
    // Add service methods here
    profileUpdate,
    deleteProfile,
};