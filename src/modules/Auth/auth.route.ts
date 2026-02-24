import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/register', AuthController.createUser);
router.post('/login', AuthController.logInUser);

export const AuthRoutes = router;
