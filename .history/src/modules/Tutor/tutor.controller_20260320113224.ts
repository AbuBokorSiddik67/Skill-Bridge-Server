import { NextFunction, Request, Response } from "express";
import { TutorService } from "./tutor.service";

const createTutor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await TutorService.createTutor(req.body);
        res.status(201).json({
            success: true,
            massage: "Tutor profile created successfully.",
            data: result
        })
    } catch (error: any) {
        res.status(401).json({
            success: false,
            massage: error.massage || "Something wrong !!!"
        });
    }
}

const getTutor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await TutorService.getTutor();
        res.status(201).json({
            success: true,
            massage: "All tutor retrieved successfully.",
            data: result
        })
    } catch (error: any) {
        res.status(401).json({
            success: false,
            massage: error.massage || "Something wrong !!!"
        });
    }
}

// const getSingleTutor = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const result = await TutorService.getSingleTutor(req.params);
//         res.status(201).json({
//             success: true,
//             massage: "Tutor retrieved successfully.",
//             data: result
//         })
//     } catch (error: any) {
//         res.status(401).json({
//             success: false,
//             massage: error.massage || "Something wrong !!!"
//         });
//     }
// }

const getAllTutorAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await TutorService.getAllTutorAccount();
        res.status(200).json({     
            success: true,
            message: "All tutor account retrieved successfully.",
            data: result
        })
    } catch (error: any) {
        next(error)                    
    }
}


const updateTutor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await TutorService.updateTutor( req.params.id as string, req.body);    
        res.status(201).json({
            success: true,
            massage: "Tutor profile updated successfully.",
            data: result
        })
    } catch (error: any) {
        res.status(401).json({
            success: false,
            massage: error.massage || "Something wrong !!!"
        });
    }
}

const deleteTutor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await TutorService.deleteTutor(req.params);  
        res.status(201).json({
            success: true,
            massage: "Tutor profile deleted successfully.",
            data: result
        })
    } catch (error: any) {
        res.status(401).json({
            success: false,
            massage: error.massage || "Something wrong !!!"
        });
    }
}

export const TutorController = {
    // Add controller methods here
    createTutor,
    getTutor,
    // getSingleTutorAccout,
    updateTutor,
    deleteTutor,
    getAllTutorAccount,
};