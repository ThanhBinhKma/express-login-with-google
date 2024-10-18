import passport from "passport";

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";

dotenv.config();

const googleClientId = process.env.GOOGLE_CLIENT_ID ?? '';
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET ?? '';

passport.use(
    new GoogleStrategy({
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: "http://localhost:3434/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
        return done(null, profile  );
    })
)
;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user: false | Express.User | null | undefined, done) => {
    done(null, user);
})

export default passport;