import { Request, Response } from "express";
import { serviceGetTasks } from "../services/serviceGetTasks.js";

export async function getTasksController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const result = await serviceGetTasks();
    if (result[0].id != -1) {
      return res.status(200).send(result);
    }
    return res.sendStatus(400);
  } catch {
    return res.sendStatus(500);
  }
}
