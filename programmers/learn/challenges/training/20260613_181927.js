function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const prev = num_list[num_list.length - 2];
    num_list.push(last > prev ? last - prev : last * 2);
    return num_list;
}

// 1. 구조 분해 할당을 사용한 방법
// - 마지막 두 원소만 필요하므로 slice(-2)로 추출해 사용할 수 있다.
// const [prev, last] = num_list.slice(-2);
// num_list.push(last > prev ? last - prev : last * 2);
// return num_list;