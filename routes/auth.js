import express from "express";

// Routes Controllers
import {
  UsersAuthController,
  SignUpAuthController,
  LoginAuthController,
} from "../controllers/auth.js";

const router = express.Router();

// User Profile Controller
router.get("/profile", UsersAuthController);

// Sign-Up Controller
router.post("/signup", SignUpAuthController);

// Login Controller
router.post("/login", LoginAuthController);

export default router;
