import express from "express";
import dotenv from "dotenv";
import session from "express-session";

import passport from "./utils/passport-config";
dotenv.config();
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET ?? "",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Login with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

app.get(
  "/auth/google/redirect",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.send("success");
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Server running ${process.env.PORT}`);
});
