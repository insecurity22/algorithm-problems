/**
 * A
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim();
console.log(input.codePointAt(0)); 

// 유니코드: 모든 문자에 번호를 붙인 표준 (컴퓨터는 숫자로 문자 저장)
// codePointAt : 문자 → 숫자(코드값) (문자 전체 기준, 이모지까지 정확)
// charCodeAt : 문자 → 숫자(코드값) (16비트 한 칸 기준)
// fromCharCode : 숫자(코드값) → 문자 
