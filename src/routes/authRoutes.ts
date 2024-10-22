import express from "express";
import { authenticateWithGoogle, getHome,  googleRedirect} from "../controllers/authController";
import jwt from 'jsonwebtoken';

const router = express.Router();

// Route gốc
router.get("/", getHome);

// Route để bắt đầu quy trình xác thực với Google
router.get("/auth/google", authenticateWithGoogle);

// Route nhận callback từ Google
router.get("/auth/google/redirect", authenticateWithGoogle, googleRedirect);


const generateToken = (userId: string) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET_B!, { expiresIn: '1h' });
  };

router.get('/check-login', (req, res) => {
    console.log(req.isAuthenticated());
    if(!req.isAuthenticated()) {
        res.redirect('/');
    }
    const token = generateToken('asadas'); // Sử dụng JWT để tạo token
  res.redirect(`http://localhost:3121/callback?token=${token}`);

})
export default router;
