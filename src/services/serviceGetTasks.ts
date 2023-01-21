import { Tasks } from "@prisma/client";
import { getTasks } from "../repositories/getTasks.js";

export async function serviceGetTasks(): Promise<Tasks[]> {
  try {
    const tasks = await getTasks();
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
