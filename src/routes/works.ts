import { Router } from "express";
import * as worksController from "../controllers/WorksController";
const route = Router();

route.get("/", worksController.getWork);
route.post("/", worksController.postWork);

export default route;
