import { Router } from "express";
import { registerHandler } from "../controllers/auth/auth.controller";
const router = Router();



router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.get('/verify-email', verifyEmailHandler);