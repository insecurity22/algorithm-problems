/**
 * 11
 * 1 4 1 2 4 2 4 2 3 4 4
 * 2
 */

const fileSystem = require('fs');
const inputArr = fileSystem.readFileSync(0).toString().trim().split('\n');

// 정수 개수
const N = Number(inputArr[0]);

// 정수 목록
const intArr = inputArr[1].split(' ').map(Number);

// 찾으려고 하는 정수 v
const v = Number(inputArr[2]);
const vCount = intArr.filter((value) => value === v).length;
console.log(vCount);

/**
 * for문을 사용하여 조건에 맞는 값이 있을 때마다 count를 증가시키는 방법도 있다.
 * for (let i = 0; i < N; i++) {
 *  if (arr[i] === v) count++;
 * }
 */