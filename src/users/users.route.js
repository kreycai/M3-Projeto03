import express from "express";
const routerUsers = express.Router();
import * as userController from "./users.controller.js";

routerUsers.post("/", userController.createUserController);
routerUsers.get("/", userController.findAllUserController);

export { routerUsers };
