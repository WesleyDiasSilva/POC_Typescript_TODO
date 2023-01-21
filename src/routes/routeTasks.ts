import { Router } from "express";
import { controllerDeleteTask } from "../controllers/controllerDeleteTask.js";
import { countFinishedTasksController } from "../controllers/countFinishedController.js";
import { getTasksController } from "../controllers/getTasksController.js";
import { controllerNewTask } from "../controllers/newTask.js";
import { controllerUpdateTask } from "../controllers/updateTask.js";
import { middlewareNewTask } from "../middleware/middlewareNewTask.js";

const route = Router();

route.post("/tasks", middlewareNewTask, controllerNewTask);
route.get("/tasks", getTasksController);
route.delete("/tasks/:id", controllerDeleteTask);
route.put("/tasks/:id", middlewareNewTask, controllerUpdateTask);
route.get("/count-tasks", countFinishedTasksController);

export default route;
