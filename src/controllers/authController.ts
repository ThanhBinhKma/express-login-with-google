import { Request, Response } from 'express';
import passport from 'passport';
import { saveUser } from '../services/userServices';

export const getHome = (req: Request, res: Response) => {
  console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return res.redirect('/dashboard');
    }
    res.send('<a href="/auth/google">Login with Google</a>');
  };
  
  // Controller để bắt đầu quy trình xác thực với Google
  export const authenticateWithGoogle = passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  });
  
  // Controller nhận callback từ Google
  export const googleRedirect = async (req: Request, res: Response) => {
   try {
    await saveUser(req.user);

    res.redirect("/dashboard");
   } catch (error) {
    res.status(500).send("Error saving user");
   }
  };