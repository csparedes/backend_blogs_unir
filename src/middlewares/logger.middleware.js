const fs = require('node:fs/promises');
const dayjs = require('dayjs');
const { join } = require('node:path');

const logger = async (req, res, next) => {
  const line = `[${dayjs().format("DD/MM/YYYY HH:mm:ss")}] Method: ${
    req.method
  }. URL: ${req.url}\n`;

  await fs.appendFile(join(__dirname,'../logs/main.log'), line);

  next();
};


module.exports = { logger }