const expressWinston = require('express-winston');
const { transports, format } = require('winston');

function loggingExpress() {
  return expressWinston.logger({
    transports: [new transports.Console()],
  });
}


module.exports = {
  loggingExpress,
}