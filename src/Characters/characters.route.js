import express from "express";
const routerChar = express.Router();
import * as charController from "./characters.controller.js";

routerChar.post("/create", charController.createCharController);
routerChar.get("/allchar", charController.FindAllCharController);
routerChar.get("/findchar/:id", charController.findByIdCharController);
routerChar.put("/updchar/:id", charController.updateCharController);
routerChar.delete("/delchar/:id", charController.deleteCharController);

export { routerChar };
