function solution(arr) {
    return arr.map((num) => {
        const isEven = num % 2 === 0;
        const isGte50 = num >= 50;

        if(isEven && isGte50) return num / 2;
        else if(!isEven && !isGte50) return num * 2;
        return num;
    })
}

// [약어로 표현]
// gt = greater than → 초과 (>)
// gte = greater than or equal → 이상 (≥)
// lt = less than → 미만 (<)
// lte = less than or equal → 이하 (≤)