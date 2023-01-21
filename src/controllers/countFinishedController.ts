import { Request, Response } from "express";
import { serviceCountTasks } from "../services/serviceCountTasks.js";

export async function countFinishedTasksController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const status: string = req.query.status;
    console.log(status);
    const param = status.toLoweCase == 'true'
    console.log(Boolean(status))
    const result = await serviceCountTasks(Boolean(status));
    if (result == -1) {
      return res.status(400).send("not found!");
    }
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
}
