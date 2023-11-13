const express = require("express");
const { logger } = require("./middlewares/logger.middleware");

const app = express();
app.use(express.json());
app.use(logger);
app.use("/api", require("./routes/api"));
module.exports = app;
