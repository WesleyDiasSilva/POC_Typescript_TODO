import { Request, Response } from "express";
import { serviceDeleteTask } from "../services/serviceDeleteTask.js";

export async function controllerDeleteTask(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const result = await serviceDeleteTask(Number(id));
    if (result) {
      return res.sendStatus(200);
    }
    return res.sendStatus(400);
  } catch {
    return res.sendStatus(500);
  }
}
