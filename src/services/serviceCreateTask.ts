import { createTask } from "../repositories/createTask.js";

export type task = {
  name: string;
  priority: string;
  finished?: boolean
};

export async function serviceCreateTask(task: task): Promise<Boolean> {
  try {
    const status = await createTask(task);
    if (status) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
