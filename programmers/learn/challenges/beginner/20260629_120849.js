function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

// 1. 정규식에 g 플래그가 있으면 일치하는 모든 문자를 바꿔주기 때문에 replace()만 사용해도 모든 모음을 제거할 수 있따.

// 2. [a|e|i|o|u]는 | 문자도 포함하는 표현이므로 [aeiou]로 작성하는 것이 맞다.
// - |는 문자 클래스([]) 안에서 사용하는 것이 아니라, cat|dog 또는 (cat|dog)처럼 OR 연산이 필요할 때 사용한다.

// 3. TypeError: String.prototype.replaceAll called with a non-global RegExp argument 오류가 발생하는 이유
// - replaceAll()은 모든 일치 항목을 변경해야 함수이므로, g 플래그가 없는 정규식은 사용할 수 없다.

// - g 플래그가 없으면 정규식은 첫 번째 일치 항목만 찾게 된다.
// - 이는 모든 일치 항목을 변경하는 replaceAll()의 동작 방식과 맞지 않는다.
// - 따라서 replace(/[aeiou]/, '')는 사용할 수 있지만, replaceAll(/[aeiou]/, '')은 오류가 발생한다.