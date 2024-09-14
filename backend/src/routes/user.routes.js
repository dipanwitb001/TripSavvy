import {Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/user.controller.js";
import multer from "multer";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()
const upload = multer();

router.route("/register").post(upload.none(),registerUser);
router.route("/login").post(upload.none(),loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser)

export default router