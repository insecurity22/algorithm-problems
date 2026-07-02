const obj = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
};

function solution(numbers) {
    for (const [word, num] of Object.entries(obj)) {
        numbers = numbers.replaceAll(word, num);
    }
    return +numbers;
}

// 1. for + replaceAll 방식
// - replaceAll()을 단어마다 호출하므로 문자열을 반복해서 탐색해 시간 복잡도는 O(n * 10)이다.

// 2. 정규식 + 콜백 방식

// const num = numbers.replace(
//    // 1) 한 번의 정규식으로 문자열 전체를 순회하며 처리한다.
//    /zero|one|two|three|four|five|six|seven|eight|nine/g, 

//    // 2) replace의 두 번째 인자로 콜백 함수를 전달하며, 문자열에서 정규식에 매칭된 값이 발견될 때마다 콜백이 실행된다.
//    (v) => { 
//        // - one 발견 → 콜백 실행 (match = one)
//        // - zero 발견 → 콜백 실행 (match = zero)
//        // - one 발견 → 콜백 실행 (match = one)
//        return obj[v];
//    }
// );
// return Number(num);

// 3. Object.entries(obj)
// : 객체의 키와 값을 [key, value] 형태의 배열로 반환한다. ex) [["zero", 0], ["one", 1], ["two", 2], ...]