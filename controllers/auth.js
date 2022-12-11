// Models
import UserModel from "../models/user.js";

// User Profile Controller
export const UsersAuthController = async (req, res) => {
  res.status(200).send("User Auth Endpoint");
};

// Sign-Up Controller
export const SignUpAuthController = async (req, res) => {
  res.status(200).send("Sign Up Auth Endpoint");
};

// Login Controller
export const LoginAuthController = async (req, res) => {
  res.status(200).send("Login Auth Endpoint");
};
