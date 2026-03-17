import express from 'express';
import { StudentController } from './student.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();


router.put("/profile-update/:id", auth(UserRole.admin || UserRole.student), StudentController.profileUpdate);
router.delete("/delete-profile/:id", auth(UserRole.admin || UserRole.student), StudentController.deleteProfile);

export const StudentRoutes = router;
