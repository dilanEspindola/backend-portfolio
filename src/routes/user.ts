import { Router } from "express";
import * as userRoutes from "../controllers/UserController";
const router = Router();

router.get("/", userRoutes.userGet);
router.post("/", userRoutes.userPost);

export default router;
