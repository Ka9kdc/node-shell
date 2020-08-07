const fs = require("fs");
const { doesNotMatch } = require("assert");

function cat(fileName, done) {
  fs.readFile(`./${fileName}`, (err, data) => {
    if(err) done('Something went wrong!')
        else {
            done(data)
        }
  });
}

module.exports = cat;
