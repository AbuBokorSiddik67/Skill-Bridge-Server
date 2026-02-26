import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.put("/profile-update/:id", StudentController.profileUpdate);
router.delete("/delete-profile/:id", StudentController.deleteProfile);

export const StudentRoutes = router;
