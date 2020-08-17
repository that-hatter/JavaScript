let fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
const rounds = (require("./resources/p054_poker.txt")).split("\n");

function main () {
    let wins = 0, [T, J, Q, K, A] = [10, 11, 12, 13, 14];
    rounds.forEach(round => {
        const cards1 = round.substring(0, 14).split(" ");
        const cards2 = round.substring(15, 29).split(" ");
        const suits1 = new Set(cards1.map(c => c[1]));
        const suits2 = new Set(cards2.map(c => c[1]));
        const hand1 = [cards1.map(c => eval(c[0])).sort((a, b) => a - b)];
        const hand2 = [cards2.map(c => eval(c[0])).sort((a, b) => a - b)];
        hand1.push(suits1.size == 1);
        hand2.push(suits2.size == 1);
        const p1 = getBest(hand1), p2 = getBest(hand2);
        if (p1 == p2) wins += tiebreak(hand1, hand2);
        else if (p1 > p2) wins ++;
    });
    return wins;
}

function getBest (hand) {
    const set = new Set(hand[0]);
    const [a, b, c, d, e] = hand[0];
    const f = hand[1];
    if (set.size == 5) {
        if (e - a == 4 || (e == 14 && d == 5 && d - a == 3)) { // check if straight
            if (f) return a == 10 ? 10 : 9; // royal or straight flush
            return 5;
        }
        return f ? 6 : 1; // flush or high card
    }
    if (set.size == 2) return (a != b || e != d) ? 8 : 7; // 4-of-a-kind or full house
    if (f) return 6; // flush
    if (set.size == 3) return (a == c || c == e || b == d) ? 4 : 3; // 3-of-a-kind or 2 pairs
    return 2;
}

function tiebreak (h1, h2) {
    const hand1 = h1[0].map(c => countMatch(c, h1[0]));
    const hand2 = h2[0].map(c => countMatch(c, h2[0]));
    hand1.sort((a, b) => a[1] - b[1]);
    hand2.sort((a, b) => a[1] - b[1]);
    for (let i = 4; i >= 0; i --) {
        if (hand1[i][0] > hand2[i][0]) return 1;
        if (hand2[i][0] > hand1[i][0]) return 0;
    }
}

function countMatch(card, hand) {
    let count = 0;
    hand.forEach(c => { 
        if (c == card) count++
    });
    return [card, count];
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 376