import { Router } from "express";
import userRegister, { loginRegister } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(userRegister);
router.route("/login").post(loginRegister);

export default router;
