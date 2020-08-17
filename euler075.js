const util = require("./util.js");

function main() {
  const lim = 15e5;
  let sums = [];
  for (let i = 0; i <= 15e5; i++) sums[i] = 0;
  const maxM = Math.floor(Math.sqrt(lim / 2));
  for (let m = 2; m <= maxM; m++) {
    for (let n = 1; n < m; n++) {
      if ((m + n) & 1 && util.gcd(m, n) == 1) {
        const p = 2 * (m * (m + n));
        for (let i = p; i <= lim; i += p) sums[i]++;
      }
    }
  }
  return sums.filter(c => c == 1).length;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 161667
