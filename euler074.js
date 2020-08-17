const util = require("./util.js");

function main() {
  let facs = [1, 1];
  let count = 0;
  for (let i = 2; i <= 9; i++) facs[i] = i * facs[i - 1];
  for (let i = 1; i <= 1e6; i++) {
    if (countChain(i, facs) == 60) count++;
  }
  return count;
}

function countChain(num, facs) {
  let chain = [num];
  while (1) {
    const sum = chain[chain.length - 1]
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + facs[b], 0);
    if (chain.includes(sum)) return chain.length;
    else chain.push(sum);
  }
}
console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 402
