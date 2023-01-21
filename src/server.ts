import cors from "cors";
import express from "express";
import routeTasks from './routes/routeTasks.js'

const server = express();

server.use(express.json());
server.use(cors());
server.use(routeTasks)

server.listen(5000, () => {
  console.log("server running in port 5000!");
});
