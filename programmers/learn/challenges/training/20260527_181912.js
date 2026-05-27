function solution(intStrs, k, s, l) {
    return intStrs.map((str) => Number(str.slice(s, s + l))).filter((v) => v > k);
}

// +v.slice(s, s + l)도 가능