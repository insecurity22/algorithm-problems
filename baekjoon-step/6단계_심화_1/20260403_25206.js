const fileSystem = require("fs");
const input = fileSystem.readFileSync(0).toString().trim().split("\n");

const gradeMap = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
};

let totalScore = 0;
let totalCredit = 0;
for (let i = 0; i < input.length; i++) {
  const [_, creditStr, grade] = input[i].split(" ");
  const credit = Number(creditStr);

  if (grade === "P") continue;

  totalCredit += credit;
  totalScore += credit * gradeMap[grade];
}
console.log(totalScore / totalCredit);
