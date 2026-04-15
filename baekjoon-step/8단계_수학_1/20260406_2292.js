/**
 * 13
 */

const fileSystem = require('fs');
const N = fileSystem.readFileSync(0).toString().trim();

let layer = 1;
let scopeMax = 1;
while(N > scopeMax) {
    scopeMax += 6 * layer;
    layer++;
}
console.log(layer);

// layer: scopeMin~scopeMax (Pattern)
// 1: 1        (1)
// 2: 2~7      (+6)
// 3: 8~19     (+12)
// 4: 20~37    (+18)