// https://www.codewars.com/kata/542106e2dda52658bf00001a/train/javascript

const { exec } = require("child_process");

function execute(command, callback) {
  exec(command, function (error, data) {
    if (error) {
      callback(error);
    } else {
      callback(null, data);
    }
  });
}
