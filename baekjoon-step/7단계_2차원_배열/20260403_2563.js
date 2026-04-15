/**
 * 3
 * 3 7
 * 15 7
 * 5 2
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 정사각형 모양의 흰색 도화지 100x100, 색종이의 수
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));
const paperCount = Number(input[0]);

for(let i = 1; i <= paperCount; i++) {
    // 색종이를 붙일 위치
    const [x, y] = input[i].split(' ').map(Number);
    
    // 정사각형 모양의 검은색 색종이 10x10
    for(let dx = 0; dx < 10; dx++) {
        for(let dy = 0; dy < 10; dy++) {
            paper[x + dx][y + dy] = 1;
        }
    }
}

// 넓이 계산
let area = 0;
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (paper[i][j] === 1) area++;
    }
}
console.log(area);