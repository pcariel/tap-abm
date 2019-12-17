const expressWinston = require('express-winston');
const { transports, format, createLogger } = require('winston');

const logger = createLogger({
  level: process.env.LOGGER_LEVEL || 'debug',
  format: format.json(),
  defaultMeta: { service: 'tap-abm-service' },
  transports: [
    new transports.Console(),
  ],
});


function loggingExpress() {
  return expressWinston.logger({
    transports: [new transports.Console()],
  });
}


module.exports = {
  loggingExpress,
  logger,
};
