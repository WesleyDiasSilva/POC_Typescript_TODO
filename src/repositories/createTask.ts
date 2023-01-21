import { prisma } from "../database/connection.js";
import { task } from "../services/serviceCreateTask.js";

export async function createTask(task: task): Promise<boolean> {
  try {
    await prisma.tasks.create({
      data: { name: task.name, priority: task.priority },
    });
    return true;
  } catch {
    return false;
  }
}
