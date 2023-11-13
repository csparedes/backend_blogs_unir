const http = require("node:http");
const app = require("./src/app");
require("dotenv").config();
require("./src/config/db.config");

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT);
server.on("listening", () => {
  console.log(`Listening to ${PORT}`);
});
server.on("error", () => {
  console.log(error);
});
