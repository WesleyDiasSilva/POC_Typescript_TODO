import { countTasks } from "../repositories/countTasks.js";

export async function serviceCountTasks(status: boolean): Promise<number>{
  try{
    const count = await countTasks(status);
    return count;
  }catch{
    return -1;
  }
}