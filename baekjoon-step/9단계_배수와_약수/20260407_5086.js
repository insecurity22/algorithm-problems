/**
 * 8 16
 * 32 4
 * 17 5
 * 0 0
 */

const fileSystem = require("fs");
const input = fileSystem.readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const [firstNumber, secondNumber] = input[i].split(" ").map(Number);
  if (firstNumber === 0 && secondNumber === 0) {
    break;
  }

  if (secondNumber % firstNumber === 0) {
    // 1. 첫 번째 숫자가 두 번째 숫자의 약수라면
    console.log("factor");
  } else if (firstNumber % secondNumber === 0) {
    // 2. 첫 번째 숫자가 두 번째 숫자의 배수라면
    console.log("multiple");
  } else {
    // 3. 둘 다 아니라면
    console.log("neither");
  }
}
