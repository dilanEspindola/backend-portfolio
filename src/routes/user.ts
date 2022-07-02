import { Router } from "express";
import * as userController from "../controllers/UserController";
const router = Router();

router.get("/", userController.userGet);
router.post("/", userController.userPost);

export default router;
