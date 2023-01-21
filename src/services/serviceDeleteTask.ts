import { deleteTask } from "../repositories/deleteTask.js";

export async function serviceDeleteTask(id: number): Promise<boolean> {
  try {
    const result = await deleteTask(id);
    if (result) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
