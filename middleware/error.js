const winston = require("winston");

module.exports = function (err, req, res, next) {
  //winston.log("error", err.message, err);
  // we can rewrite above line using helper method as
  winston.error(err.message, err);

  // error
  // warn
  // info
  // verbose
  // debug
  // silly

  res.status(500).send("Something failed.");
};
