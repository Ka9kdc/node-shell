process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  let arr = cmd.split(" ");
  cmd = arr[0];
  let fileName = arr[1];
  if (cmd === "pwd") pwd(done);
  else if (cmd === "ls") ls(done);
  else if (cmd === "cat") cat(fileName, done);
  else if (cmd === "curl") curl(fileName, done);
  else if (cmd === 'echo') echo(fileName, done)
  else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt >");
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt >");
}


const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require('./curl');
const request = require("request");
const echo = require('./echo')

