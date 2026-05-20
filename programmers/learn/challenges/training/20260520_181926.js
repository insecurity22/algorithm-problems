function solution(n, control) {
    for(let char of control) {
        if(char === 'w') n += 1;
        else if(char === 's') n -= 1;
        else if(char === 'd') n += 10;
        else if(char === 'a') n -= 10;
    }
    return n;
}

// 1. for ... of는 순차적으로 반복만 수행하므로 구조가 단순하다.

// 2. reduce는 내부적으로 아래 과정이 반복된다.
// - 배열 요소마다 콜백 함수를 실행한다.
// - 반환값을 다음 누적값(acc)으로 전달한다.

// 3. for와 reduce의 차이점
// 1) 콜백 함수 호출
// - reduce는 배열 요소마다 콜백 함수를 반복 호출한다.
// - 즉 내부적으로 아래 함수가 계속 실행된다.
//   (acc, curr) => {
//      return acc + curr;
//   }
// - 반면 for문은 단순 반복만 수행하므로 추가 함수 호출 비용이 없다.

// 2) 반환값 누적
// - reduce는 매 반복마다 return 값을 다음 acc로 전달한다.
// - 반면 for문은 sum += arr[i]처럼 기존 변수를 직접 수정하므로 과정이 더 단순하다.

// 3) 함수 스코프 생성
// - reduce는 콜백 함수가 실행될 때마다 acc, curr 같은 지역 변수를 저장할 함수 스코프가 생성된다.
// - 즉 반복마다 새로운 함수 실행 공간이 필요하다.
// - 반면 for문은 같은 변수 공간을 재사용하므로 추가적인 함수 스코프 생성이 거의 없다.