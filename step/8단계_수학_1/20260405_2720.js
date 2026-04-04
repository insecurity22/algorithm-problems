/**
 * 3
 * 124
 * 25
 * 194
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n').map(Number);

const T = input[0];

for(let i = 1; i <= T; i++) {
    let cent = input[i];

    // 쿼터($0.25)의 개수, ex) 25 * 4 = 100
    const quarter = Math.floor(cent / 25);
    cent %= 25;

    // 다임($0.10)의 개수, ex) 10 * 2 = 20
    const dime = Math.floor(cent / 10);
    cent %= 10;

    // 니켈($0.05)의 개수
    const nickel = Math.floor(cent / 5);
    cent %= 5;

    // 페니($0.01)의 개수
    const penny = Math.floor(cent / 1);

    console.log(quarter, dime, nickel, penny);
}
