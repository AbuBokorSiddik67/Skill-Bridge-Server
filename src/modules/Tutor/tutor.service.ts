import { prisma } from "../../lib/prisma";

const createTutor = async (payload: any) => {
    try {
        const result = await prisma.tutorProfiles.create({
            data: {
                aboutTutor: payload.aboutTutor,
                sessionPrice: payload.sessionPrice,
                userId: payload.userId
            }
        })
        return result;
    } catch (error) {
        throw error
    }
}

const getTutor = async () => {
    try {
        const result = await prisma.tutorProfiles.findMany()
        return result;
    } catch (error) {
        throw error
    }
}

const getSingleTutor = async (payload: any) => {
    try {
        const result = await prisma.tutorProfiles.findUnique({
            where: {
                id: payload.id,
            }
        })
        return result;
    } catch (error) {
        throw error
    }
}

const updateTutor = async (payload: any) => {
    try {
        const result = await prisma.tutorProfiles.update({ 
            where: {
                id: payload.id,
            },
            data: {
                aboutTutor: payload.aboutTutor,
                sessionPrice: payload.sessionPrice,
                userId: payload.userId
            }
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
    getSingleTutor,
    updateTutor,
    deleteTutor
};