import express from "express";
import { authenticateWithGoogle, getHome,  googleRedirect} from "../controllers/authController";

const router = express.Router();

// Route gốc
router.get("/", getHome);

// Route để bắt đầu quy trình xác thực với Google
router.get("/auth/google", authenticateWithGoogle);

// Route nhận callback từ Google
router.get("/auth/google/redirect", authenticateWithGoogle, googleRedirect);

export default router;
