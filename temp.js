const util = require("./util.js");

function main() {
  const primes = [1, 2, 5, 10, 20, 50, 100, 200];
  let ways = [1];
  for (let i = 1; i <= 200; i++) ways[i] = 0;
  coins.forEach(coin => {
    for (let i = coin; i <= 200; i++) {
      ways[i] += ways[i - coin];
    }
  });
  return ways[200];
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 73682
