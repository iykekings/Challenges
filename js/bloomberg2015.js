var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let input = '';
let count = 0;
rl.on('line', function (str) {
  if (count < 4) {
    input += str + '\n';
    count++;
  } else {
    rl.close();
  }
});

rl.on('close', function () {
  console.log(input);
  process.exit(0);
});
