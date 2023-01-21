import { prisma } from "../database/connection.js";
import { task } from "../services/serviceCreateTask.js";

export async function updateTask(task: task, id: number): Promise<boolean> {
  try {
    await prisma.tasks.update({
      data: {
        name: task.name,
        priority: task.priority,
        finished: task.finished ? task.finished : false,
      },
      where: { id },
    });
    return true;
  } catch {
    return false;
  }
}
