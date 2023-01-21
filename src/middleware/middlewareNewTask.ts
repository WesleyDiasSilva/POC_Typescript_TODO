import { NextFunction, Request, Response } from "express";
import { newTaskModel } from "../model/newTask.js";

export function middlewareNewTask(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { error } = newTaskModel.validate(req.body);
  if (error) {
    res.status(400).send(error);
    return;
  }
  next();
  return;
}
