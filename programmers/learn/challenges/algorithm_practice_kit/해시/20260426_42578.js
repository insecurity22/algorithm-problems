function solution(clothes) { // [[의상의 이름, 의상의 종류], ...]
    const typeCountMap = new Map();
    for(const [, type] of clothes) {
        typeCountMap.set(type, (typeCountMap.get(type) || 0) + 1);
    }
    
    let combinations = 1; 
    for(const count of typeCountMap.values()) {
        const selectableOptions = count + 1;
        combinations *= selectableOptions;
    }
    
    return combinations - 1;
}
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));

// 1. 안 입는 옷을 포함하기 위해 count + 1을 한다.
// headgear(2개): yellow_hat, green_turban + X = 선택지 3개
// eyewear(1개): blue_sunglasses + X = 선택지 2개

// 2. 총 경우의 수 6개
// (yellow_hat, blue_sunglasses)
// (yellow_hat, 안 씀)
// (green_turban, blue_sunglasses)
// (green_turban, 안 씀)
// (안 씀, blue_sunglasses)
// (안 씀, 안 씀)

// 3. 모두 안쓰는 경우는 제거