import fastify from "fastify";
import { student } from "./common/common.js";
const server = fastify();
server.get("/students/getStudents", async (request, reply) => {
  return { student };
});

server.post("/students/postStudents", async (request, reply) => {
  let newstudent = request.body;
  student.push(newstudent);
  return { message: "data added succssfully", student };
});

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
