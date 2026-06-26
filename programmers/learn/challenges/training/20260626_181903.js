function solution(q, r, code) {
    return [...code].map((c, i) => i % q === r ? c : null).join('')
}

// 1. filter 사용
// - 필요한 문자만 남겨 코드의 의도가 더 명확하고 가독성이 좋다.
// return [...code].filter((_, i) => i % q === r).join('');