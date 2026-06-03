function solution(arr, k) {
    const kArr = [...new Set(arr)].slice(0, k);
    while(kArr.length < k) {
        kArr.push(-1);
    }
    return kArr;
}

// 1. 결론
// - 두 방식 모두 시간복잡도는 O(k)이며, 이 문제의 입력 범위에서는 체감할 만한 성능 차이가 거의 없다.
// - 다만 코드 리뷰를 한다면 while문을 사용한 방식을 선호할 것 같다.
// - 부족한 개수를 기존 배열에 직접 추가하므로 임시 배열을 생성하지 않고, 동작 흐름이 명확해 가독성과 디버깅 측면에서 더 유리하다고 생각하기 때문이다.

// 2. while문을 사용하지 않는 방법

// function solution(arr, k) {
//     const set = new Set(arr);
//     // 부족한 개수만큼 -1로 채운 배열을 생성한 뒤, 기존 배열에 추가
//     return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
// }

// 3. 비교

// 1) while
// - 부족한 개수만큼 기존 배열에 직접 push하므로 추가 배열 생성이 없다.
// - 동작 흐름이 직관적이며 메모리 사용량도 조금 더 적다.

// 2) fill + 전개 연산자
// - 코드가 짧고, "부족한 개수만큼 채운 뒤 반환한다"는 의도가 잘 드러난다.
// - 다만 Array(...).fill(-1)로 임시 배열을 생성한 뒤, 전개 연산자를 통해 최종 배열을 새로 생성한다.

// 3) 성능 비교
// - k가 매우 큰 경우에는 while + push 방식이 메모리와 성능 면에서 조금 더 유리할 수 있는데,
// - 이는 Array(k - set.size).fill(-1)와 같은 임시 배열을 생성하지 않기 때문이다.
