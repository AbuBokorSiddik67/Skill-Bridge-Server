import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

router.put("/user/profile-update/:id", AdminController.profileUpdate);
router.get("/users", AdminController.getAllUsers);
router.delete("/user/delete/:id", AdminController.deleteProfile);
router.get("/deleted-users", AdminController.deletdUser);

export const AdminRoutes = router;