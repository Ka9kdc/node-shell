process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  let arr = cmd.split(" ");
  cmd = arr[0];
  let fileName = arr[1];
  if (cmd === "pwd") pwd();
  else if (cmd === "ls") ls();
  else if (cmd === "cat") cat(fileName);
  else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt >");
  }
});

const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
