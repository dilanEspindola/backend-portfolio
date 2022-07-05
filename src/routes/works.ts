import { Router } from "express";
import * as worksController from "../controllers/WorksController";
const route = Router();

route.get("/", worksController.getWork);
route.get("/:id", worksController.getWorkById);
route.post("/", worksController.postWork);
route.put("/:id", worksController.updateWork);
route.delete("/:id", worksController.deleteWork);

export default route;
