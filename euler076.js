function main() {
  let ways = [1];
  for (let i = 1; i <= 100; i++) ways[i] = 0;
  for (let i = 1; i < 100; i++) {
    for (let j = i; j <= 100; j++) {
      ways[j] += ways[j - i];
    }
  }
  return ways[ways.length - 1];
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 190569291
