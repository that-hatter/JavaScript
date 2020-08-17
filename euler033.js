const util = require('./util.js');

function main () {
	let arr = [], p = {nm: 1, dn: 1};
	for (let dn = 11; dn <= 99; dn++) {
		for (let nm = dn - 1; nm >= 11; nm--) {
			const reduced = digitCancel(nm, dn);
			if (reduced && (reduced.nm / reduced.dn == nm / dn)) {
				arr.push([nm, dn]);
			}
		}
	}
	for (let f of arr) [p.nm, p.dn] = [p.nm * f[0], p.dn * f[1]];
	return p.dn / util.gcd(p.nm, p.dn);
}

function digitCancel (nm, dn) {
	const nmStr = String(nm), dnStr = String(dn);
	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < 2; j++) {
			if (nmStr[i] == dnStr[j] && nmStr[i] != '0') {
				const nm_ = Number(nmStr[1 - i]);
				const dn_ = Number(dnStr[1 - j]);
				return nm_ == dn_ ? false : {nm: nm_, dn: dn_};
			}
		}
	}
	return false;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 100