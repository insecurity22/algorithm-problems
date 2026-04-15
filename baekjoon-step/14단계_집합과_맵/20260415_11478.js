/**
 * ababc
 */

const fileSystem = require('fs');
const S = fileSystem.readFileSync(0).toString().trim();

const stringSet = new Set();
for(let i = 0; i < S.length; i++) {
    let str = '';
    for(let j = i; j < S.length; j++) {
        str += S[j];
        stringSet.add(str);
    }
}
console.log(stringSet.size);

/**
 * a
 * ab
 * aba
 * abab
 * ababc
 * b
 * ba
 * bab
 * babc
 * a
 * ab
 * abc
 * b
 * bc
 * c
 */