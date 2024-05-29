import { Router } from "express";
const router = Router();
import * as Auth from "../controllers/auth.controller.js";
import { verifySignup } from "../middlewares/index.js";

router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  Auth.singUp
);
router.post("/signin", Auth.singIn);

export default router;
