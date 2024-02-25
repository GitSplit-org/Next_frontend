import { Url } from "./src/lib/url";

const express = require("express");
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

const app = express();
const port = 3000;

// Replace these placeholders with your GitHub application credentials
const GITHUB_CLIENT_ID = "36faf9be094651d448f6";
const GITHUB_CLIENT_SECRET = "f192e9a16d88e33d76088a512385a783b3b6a87a";
const url = Url();
const CALLBACK_URL = `${url}auth/github/callback`;

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      // You can customize how to handle the GitHub user profile data here
      return done(null, profile);
    }
  )
);

app.use(passport.initialize());

// Redirect the user to GitHub for authentication
app.get("/auth/github", passport.authenticate("github"));

// GitHub will redirect the user back to this route after approval
app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to the home page or handle as needed
    res.redirect("/");
  }
);

// Access this route to display user information after logging in
app.get("/profile", (req, res) => {
  // 'req.user' contains the authenticated user's profile information
  res.json(req.user);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
