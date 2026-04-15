/**
 * WA
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim();

let total = 0;
for(let char of input) {
    const code = char.charCodeAt(0); // ex) 65

    if(code <= 67) total += 3;
    else if(code <= 70) total += 4;
    else if(code <= 73) total += 5;
    else if(code <= 76) total += 6;
    else if(code <= 79) total += 7;

    // P(80), Q(81), R(82), S(83)
    else if(code <= 83) total += 8;
    // T(84), U(85), V(86)
    else if(code <= 86) total += 9;
    // W(87), X(88), Y(89), Z(90)
    else if(code <= 90) total += 10;
}
console.log(total);