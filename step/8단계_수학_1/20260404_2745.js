/**
 * ZZZZZ 36
 */

const fileSystem = require("fs");

const [input, baseStr] = fileSystem.readFileSync(0).toString().trim().split(" ");
const base = Number(baseStr);

let result = 0;
for (let i = 0; i < input.length; i++) {
    const char = input[input.length - i - 1];
    let digit;
    
    // 문자 → 숫자 변환
    if (char >= "0" && char <= "9") {
        digit = Number(char);
    } else {
        digit = char.charCodeAt(0) - "A".charCodeAt(0) + 10;
    }

    // 자리값 반영 (digit × base^i)
    result += digit * base ** i;
}
console.log(result);

// 간단한 방법
// console.log(parseInt(input, base));

// ========================================
// 2진수: 0, 1
// 8진수: 0~7
// ========================================
// 10진수: 0~9까지 10개의 숫자를 사용하며,
// 왼쪽으로 갈수록 자리값이 10의 거듭제곱으로 커진다.
// (예: 123 = 1×10^2 + 2×10^1 + 3×10^0)
// ========================================
// 16진수: 0~9, A~F (A=10 ~ F=15)
// ========================================
// 36진수: 0~9, A~Z (A=10 ~ Z=35)
// (예: ZZZZZ = 35×36^4 + 35×36^3 + 35×36^2 + 35×36^1 + 35×36^0 = 60,466,175)