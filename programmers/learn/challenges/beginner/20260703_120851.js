function solution(my_string) {
    return [...my_string].reduce((acc, cur) => !isNaN(cur) ? acc + Number(cur) : acc, 0);
}

// 1. for...of
// - 문자열을 한 번만 순회하므로 가장 직관적이고, 메모리 사용도 적으며, 시간 복잡도는 O(n)이다.

// let sum = 0;
// for (const ch of my_string) {
//     if(!isNaN(ch)) sum += +ch;
// }
// return sum;

// 2. 현재 풀이 (전개 연산자 + reduce) ✨
// - isNaN() 대신 Number(cur) ? acc + +cur : acc 형태로 더 간결하게 작성할 수 있다.

//   하지만 if(Number('0'))은 거짓이므로 0을 더하지 않고 건너뛴다.
//   이 문제에서 0을 더하든 안 더하든 결과는 같지만, 
//   의도는 "숫자라면 더한다." 인데 숫자인 0까지 조건에서 제외하므로 논리적으로는 올바른 코드가 아니다.

// 3. match(), reduce()
// - match()는 찾은 결과가 없으면 null을 반환하므로 null.reduce(...)와 같아져서 에러가 발생할 수 있다. ✨
// - 정규식은 내부적으로 정규식 엔진을 통해 매칭을 수행하므로, isNaN()을 사용하는 2번 풀이보다 일반적으로 처리 비용이 크다.

// return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a) + parseInt(b));

// 4. split(), filter(), reduce()
// - split()과 filter()에서 중간 배열이 생성되어 메모리 사용량이 증가한다.

// return my_string.split("").filter((v)=> !isNaN(v)).reduce((a,b) => parseInt(a) + parseInt(b));