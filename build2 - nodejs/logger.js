const winston = require('winston');

function createLogger(){
    /*setup logger to log stuff to logs.log file and to the console
        - setup logger's configuration.
    */

    const loggerConfig = {
        "transports": [
            new winston.transports.Console(),
            new winston.transports.File(
                {
                    level: "warn",
                    filename: "logs.log"
                }
            )
        ],
        "format" : winston.format.combine(
            winston.format.timestamp(
                {
                    format: "DD-MMM-YYYY HH:mm:ss"
                }
            ),
            winston.format.printf(
                (log_info) => {
                    return `\n${log_info.level} - ${log_info.timestamp}: ${log_info.message}\n`;
                }
            )
        )
    }

    const logger = winston.createLogger(loggerConfig);

    return logger;
}

module.exports.createLogger = createLogger;