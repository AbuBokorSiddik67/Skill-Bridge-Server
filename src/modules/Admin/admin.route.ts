import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

router.put("/user/profile-update/:id", AdminController.profileUpdate);
router.get("/users", AdminController.getAllUsers);

export const AdminRoutes = router;