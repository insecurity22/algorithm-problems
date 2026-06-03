function solution(arr, queries) {
    return queries.reduce((acc, [i, j]) => {
        [acc[i], acc[j]] = [acc[j], acc[i]];
        return acc;
    }, arr)
}

// 1. reduce의 초기값으로 arr를 전달했기 때문에 첫 번째 acc는 acc = arr와 같은 상태가 된다.
// - 따라서 acc와 arr는 서로 같은 배열 객체를 참조한다.

// 2. 배열은 값 자체가 아니라 배열 객체의 참조값(주소)이 변수에 저장된다.
// - 즉, 실제로는 배열이 두 개 생성되는 것이 아니라 하나의 배열을 acc와 arr가 함께 참조하는 구조이다.

// - 따라서 reduce 내부에서 arr를 직접 수정하면 acc에도 변경 사항이 그대로 반영된다.
// - 그래서 아래 코드처럼 arr로 swap을 수행한 뒤 return acc를 해도 정상 동작한다.

// [arr[i], arr[j]] = [arr[j], arr[i]];
// return acc;