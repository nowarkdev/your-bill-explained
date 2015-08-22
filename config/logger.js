import winston from 'winston';
import fs from 'fs';

fs.mkdir('./logs', function(e){
    if(!e || (e && e.code === 'EEXIST')){
        //do something with contents
    } else {
        //debug
        console.log(e);
    }
});

let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ level: 'verbose' }),
    new (winston.transports.DailyRotateFile)({ filename: './logs/app.log', handleExceptions: true, exitOnError: false, level: 'verbose' })
  ]
});

logger.verbose('Logger created');

export default logger;
