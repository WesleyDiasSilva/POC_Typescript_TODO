import { prisma } from "../database/connection.js";

export async function countTasks(status: boolean): Promise<number> {
  try {
    const count = await prisma.tasks.count({ where: { finished: status } });
    return count;
  } catch {
    return -1;
  }
}
