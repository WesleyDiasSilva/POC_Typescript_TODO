import { updateTask } from "../repositories/updateTask.js";
import { task } from "./serviceCreateTask.js";

export async function serviceUpdateTask(task: task, id: number): Promise<boolean> {
  try {
    const status = await updateTask(task, id);
    if (status) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
