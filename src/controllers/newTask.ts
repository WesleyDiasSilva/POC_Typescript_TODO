import { Request, Response } from "express";
import { serviceCreateTask } from "../services/serviceCreateTask.js";

export async function controllerNewTask(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const result = await serviceCreateTask(req.body);
    console.log(result)
    if (result) return res.status(201).send("OK");
    return res.status(400);
  } catch {
    return res.sendStatus(500);
  }
}
