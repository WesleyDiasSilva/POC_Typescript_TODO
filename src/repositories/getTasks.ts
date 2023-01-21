import { Tasks } from "@prisma/client";
import { prisma } from "../database/connection.js";

export async function getTasks(): Promise<Tasks[]> {
  try {
    const tasks = await prisma.tasks.findMany();
    return tasks;
  } catch {
    return [
      {
        id: -1,
        name: "",
        priority: "",
        finished: false,
        createdAt: new Date(),
      },
    ];
  }
}
