function solution(price) {
    if(price >= 500000) return Math.floor(price - (price * 0.2))
    if(price >= 300000) return Math.floor(price - (price * 0.1))
    if(price >= 100000) return Math.floor(price - (price * 0.05))
    return price;
}

// 1. 할인 금액 차감
// - 할인 금액을 계산한 뒤 원래 금액에서 차감한다.

// 2. 할인율 계산
// - (1 - 할인율)을 곱해 최종 금액을 계산한다. (할인율 변경 시 유연하게 적용 가능)

// if (price >= 500000) return Math.floor(price * (1 - 0.2));
// if (price >= 300000) return Math.floor(price * (1 - 0.1));
// if (price >= 100000) return Math.floor(price * (1 - 0.05));
// return price;

// 3. 할인율 직접 적용
// - 최종 할인율을 직접 곱해 가장 간결하게 구현한다.

// if (price >= 500000) return Math.floor(price * 0.8);
// if (price >= 300000) return Math.floor(price * 0.9);
// if (price >= 100000) return Math.floor(price * 0.95);
// return price;