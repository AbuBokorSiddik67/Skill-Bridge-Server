import express from 'express';
import { AdminController } from './admin.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.get("/deleted-users", auth(UserRole.admin), AdminController.deletdUser);
router.delete("/delete-user/:id", auth(UserRole.admin), AdminController.deleteUser);

export const AdminRoutes = router;