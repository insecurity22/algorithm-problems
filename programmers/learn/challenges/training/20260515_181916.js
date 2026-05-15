function solution(a, b, c, d) {
    const numberMap = new Map();
    [a, b, c, d].forEach((dice) => numberMap.set(dice, (numberMap.get(dice) || 0) + 1));
    
    const entries = [...numberMap.entries()];
    switch(numberMap.size) {
        case 1: {
            // 네 주사위 모두 p로 같다면 1111 x p 점을 얻는다.
            return 1111 * a; 
        }
        case 2: {
            const [[k1, v1], [k2, v2]] = entries;
            
            // 세 주사위 숫자가 p로 같고, 나온 숫자가 q(p != q)라면 (10xp+q)**2점을 얻는다.
            if(v1 === 3) return (10*k1+k2) ** 2;
            if(v2 === 3) return (10*k2+k1) ** 2;
            
            // 두 주사위 숫자가 p로 같고, 나온 숫자가 p, q(p != q)라면, (p+q)x|p-q|점을 얻는다.
            if(v1 === 2 || v2 === 2) return (k2+k1) * Math.abs(k2-k1);
        }
        case 3: {
            // 두 주사위 숫자가 p로 같고, 나온 숫자가 p와 다른 q, r(q != r)라면 q * r점을 얻는다.
            const [[k1, v1], [k2, v2], [k3, v3]] = entries;
            if(v1 === 2) return k2 * k3;
            if(v2 === 2) return k1 * k3;
            if(v3 === 2) return k1 * k2;
        }
        case 4: {
            // 네 주사위 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻는다.
            return Math.min(a, b, c, d);
        }
    }
}