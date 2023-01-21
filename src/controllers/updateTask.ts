import { Request, Response } from "express";
import { serviceUpdateTask } from "../services/serviceUpdateTask.js";

export async function controllerUpdateTask(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const result = await serviceUpdateTask(req.body, Number(id));
    if (result) {
      return res.sendStatus(200);
    }
    return res.sendStatus(409);
  } catch {
    return res.sendStatus(500);
  }
}
