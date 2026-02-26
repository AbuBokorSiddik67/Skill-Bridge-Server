import { prisma } from "../../lib/prisma";

const getAllUsers = async () => {
    try {
        const result = await prisma.user.findMany();
        return result;
    } catch (error: any) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
};

const profileUpdate = async (userId: string, payload: any) => {
    // Implement the logic to update the student's profile
    try {
        const result = await prisma.user.update({
            where: { id: userId },
            data: {
                email: payload.email,
                role: payload.role,
                phone: payload.phone,
                name: payload.name,
                imageLink: payload.imageLink,
                categoryId: payload.categoryId,
                bio: payload.bio,
            },
        });
        return result;
    } catch (error: any) {
        throw new Error(`Failed to update profile: ${error.message}`);
    }
}

export const AdminService = {
    // Add service methods here
    profileUpdate,
    getAllUsers,
};