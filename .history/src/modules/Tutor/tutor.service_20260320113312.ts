import { prisma } from "../../lib/prisma";

const createTutor = async (payload: any) => {
    try {
        const result = await prisma.tutorProfiles.create({
            data: {
                userId: payload.userId,
                aboutTutor: payload.aboutTutor,
                sessionPrice: payload.sessionPrice || 0,
                experienceYears: payload.experienceYears || 0,
                education: payload.education || null,
                status: payload.status || 'AVAILABLE',
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        imageLink: true
                    }
                }
            }
        });

        return result;
    } catch (error: any) {
        if (error.code === 'P2002') {
            throw new Error("Tutor profile already exists for this user.");
        }
        throw error;
    }
};

const getTutor = async () => {
    try {
        const result = await prisma.tutorProfiles.findMany()
        return result;
    } catch (error) {
        throw error
    }
}

// const getSingleTutor = async (payload: any) => {
//     try {
//         const result = await prisma.tutorProfiles.findUnique({
//             where: {
//                 userId: payload.id,
//             }
//         })
//         return result;
//     } catch (error) {
//         throw error
//     }
// }


const getAllTutorAccount = async () => {
    try {
        const result = await prisma.tutorProfiles.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        phone: true,
                        imageLink: true,
                        bio: true,
                        address: true,
                        role: true,
                        status: true,
                        createdAt: true,
                    }
                }
            }
        })
        return result;
    } catch (error) {
        throw error
    }
}

const updateTutor = async (id: string, payload: any) => {
    try {
        const result = await prisma.tutorProfiles.update({
            where: {
                id: id,
            },
            data: payload
        })
        return result;
    } catch (error) {
        throw error
    }
}

const deleteTutor = async (payload: any) => {
    try {
        const result = await prisma.tutorProfiles.delete({
            where: {
                id: payload.id,
            }
        })
        return result;
    } catch (error) {
        throw error
    }
}

export const TutorService = {
    // Add service methods here
    createTutor,
    getTutor,
    getSingleTutorAccount,
    updateTutor,
    deleteTutor,
    getAllTutorAccount
};