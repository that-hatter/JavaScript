const util = require("./util.js");

function main() {
  let count = 0;
  for (let d = 3; d <= 12000; d++) {
    const start = Math.ceil(d / 3);
    const end = Math.floor(d / 2);
    for (let n = start; n <= end; n++) {
      if (util.gcd(n, d) == 1) count++;
    }
  }
  return count;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 7295372
