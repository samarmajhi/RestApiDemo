import fastify from "fastify";
import { student } from "./common/common.js";
const server = fastify();
import fs from "fs/promises";
import path from "path";
import multipart from "fastify-multipart";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.register(multipart);

server.get("/students/getStudents", async (request, reply) => {
  return { student };
});

server.post("/students/postStudents", async (request, reply) => {
  let newstudent = request.body;
  student.push(newstudent);
  return { message: "data added succssfully", student };
});

server.put("/students/addStudentImage", async (request, reply) => {
  const data = await request.file();
  const filePath = path.join(__dirname, "/image/", data.filename);

  await fs.writeFile(filePath, await data.toBuffer());

  return { message: "Image uploaded successfully", filename: data.filename };
});

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
