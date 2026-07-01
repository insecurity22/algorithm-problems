function solution(array, n) {
    const distances = array.sort((a, b) => a - b).map((num) => Math.abs(num - n));
    return array[distances.indexOf(Math.min(...distances))];
}

// 1. 현재 풀이
// - 배열을 오름차순으로 정렬한 뒤, 각 원소와 n의 거리를 구해 가장 가까운 값을 찾는다.
// - 동작 과정을 단계별로 이해하기 쉽지만, "거리 배열을 별도로 생성"한다는 단점이 있다.

// 2. 거리 기준 정렬
// - n과의 거리를 기준으로 정렬하고, 거리가 같다면 더 작은 수가 앞에 오도록 정렬한다.
// - 추가 배열을 생성하지 않아 메모리 사용량이 적고 코드도 더 간결하다.
// - 다만 정렬 조건식에 익숙하지 않다면 이해하기 어려울 수 있다.

// array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
// return array[0]; // 정렬 후 가장 가까운 값이 배열의 첫 번째 위치에 오므로 array[0]을 반환한다.