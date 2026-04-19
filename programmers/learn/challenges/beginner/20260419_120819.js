const ICE_AMERICANO = 5500;

function solution(money) {
    const count = Math.trunc(money / ICE_AMERICANO);
    const remain = money % ICE_AMERICANO;
    
    // 최대로 마실 수 있는 아메리카노의 잔 수, 남는 돈
    return [count, remain];
}

// 남은 금액은 money - (ICE_AMERICANO * count)로 구할 수 있지만,
// 나머지 연산자(%)를 사용하면 더 간단하게 계산 가능하다.
// → money % ICE_AMERICANO