import express from 'express';
import { TutorController } from './tutor.controller';

const router = express.Router();

router.post("/create", TutorController.createTutor)
router.get("/", TutorController.getTutor)
router.get("/:id", TutorController.getSingleTutor)
router.put("/update/:id", TutorController.updateTutor)
router.delete("/delete/:id", TutorController.deleteTutor)

export const TutorRoutes = router;
