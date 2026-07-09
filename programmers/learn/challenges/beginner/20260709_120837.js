function solution(hp) {
    return Math.floor(hp / 5) + Math.floor(hp % 5 / 3) + Math.floor(hp % 5 % 3)
}

// 1. 현재 풀이
// - 공격력이 큰 개미부터 배치해 최소 마리 수를 구한다. (공격력: 장군개미 5, 병정개미 3, 일개미 1)
// - 나머지 연산으로 남은 체력을 계산한다. (체력: 여치 23)
// - % 연산의 결과는 항상 정수이므로 마지막 Math.floor()를 생략할 수 있다.

// 2. 변수 사용
// const generalAnt = Math.floor(hp / 5);
// const soldierAnt = Math.floor((hp - generalAnt * 5) / 3);
// const workerAnt = hp - (generalAnt * 5 + soldierAnt * 3);
// return generalAnt + soldierAnt + workerAnt;

// 3. 누적 계산
// let count = 0;

// count += Math.floor(hp / 5);
// hp %= 5;
// count += Math.floor(hp / 3);
// hp %= 3;
// count += hp;

// return count;