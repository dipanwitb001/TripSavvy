import {Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import multer from "multer";

const router = Router()
const upload = multer();

router.route("/register").post(upload.none(),registerUser);
router.route("/login").post(upload.none(),loginUser);
// router.route("/register").post(registerUser);


export default router