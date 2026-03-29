/**
 * 1)
 * 3 3 6
 * = 1300
 * 
 * 2)
 * 2 2 2
 * = 12000
 * 
 * 3)
 * 6 2 5
 * = 600
 */

const fileSystem = require('fs');
const [dice1, dice2, dice3] = fileSystem.readFileSync(0).toString().split(' ').map(Number);

const isPair12 = dice1 === dice2;
const isPair13 = dice1 === dice3;
const isPair23 = dice2 === dice3;

// 같은 눈이 2개만 나오는 경우의 수
// 1번 주사위 = 2번 주사위
// 1번 주사위 = 3번 주사위
// 2번 주사위 = 3번 주사위
    
let result = 0;
if(isPair12 && isPair23) {
    result = 10000 + (dice1) * 1000;
} else if(isPair12 || isPair13) {
    result = 1000 + dice1 * 100;
} else if(isPair23) {
    result = 1000 + dice2 * 100;
} else {
    result = Math.max(dice1, dice2, dice3) * 100;
}
console.log(result);
