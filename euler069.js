const util = require('./util.js');

function main () {
    for (let p = 3, n = 2; ; p += 2) {
        if (!util.isPrime(p)) continue;
        if (n * p >= 1e6) return n;
        n *= p;
    }
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 