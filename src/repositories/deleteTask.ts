import { prisma } from "../database/connection.js";

export async function deleteTask(id: number): Promise<boolean> {
  try {
    await prisma.tasks.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
