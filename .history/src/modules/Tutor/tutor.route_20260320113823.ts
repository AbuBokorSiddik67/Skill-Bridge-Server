import express from 'express';
import { TutorController } from './tutor.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.post("/create", auth(UserRole.admin, UserRole.student, UserRole.tutor), TutorController.createTutor)
router.get("/", TutorController.getTutor)
router.get("single/:id", TutorController.getSingleTutorAccount)
router.get("/all-account", TutorController.getAllTutorAccount)
router.put("/update/:id", auth(UserRole.admin, UserRole.tutor), TutorController.updateTutor)
router.delete("/delete/:id", auth(UserRole.admin, UserRole.tutor), TutorController.deleteTutor)

export const TutorRoutes = router;
