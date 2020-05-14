const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
  // handling uncaught exceptions only works with sync code
  // process.on("uncaughtException", (ex) => {
  //   winston.error(ex.message, ex);
  //   process.exit(1);
  // });
  // the above lines of code can be simplified as
  winston.exceptions.handle(
    new winston.transports.File({ filename: "uncaughtException.log" })
  );

  // handling rejected promises
  process.on("unhandledRejection", (ex) => {
    // winston.error(ex.message, ex);
    // process.exit(1);
    throw ex;
    // we are throwing exception becuase winston mentioned above will catcth it
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/vidly",
      level: "error",
      options: {
        useUnifiedTopology: true,
      },
    })
  );
};
