import { Request, Response } from "express";
import { serviceCountTasks } from "../services/serviceCountTasks.js";

export async function countFinishedTasksController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const {status} = req.query;
    const param = status === 'true' ? true: false;
    const count = await serviceCountTasks(param)
    const response = {
      number_of_tasks_finished: count
    }
    return res.status(200).send(response)
  } catch (err) {
    return res.send("SAD")
  }
}
