import express from "express";
import dotenv from "dotenv";
import session from "express-session";

import { passport } from "./utils";
import authRouter from "./routes/authRoutes";
import dashboardRouter from "./routes/dashboadRoutes";


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
app.use(authRouter);
app.use(dashboardRouter)


app.listen(process.env.PORT, () => {
  console.log(`Server running ${process.env.PORT}`);
});
