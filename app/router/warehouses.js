import { Router } from "express";
import { getAll, getId, insert, update, eliminate } from "../controllers/warehouseController.js";

const warehouseRouter = Router();

warehouseRouter.get("/", getAll);
warehouseRouter.get("/:id", getId);
warehouseRouter.post("/", insert);
warehouseRouter.put("/:id", update)
warehouseRouter.delete("/:id", eliminate)

export default warehouseRouter;