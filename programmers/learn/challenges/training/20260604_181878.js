function solution(myString, pat) {
    return new RegExp(pat.toUpperCase()).test(myString.toUpperCase()) ? 1 : 0 ;
}

// 1. 아래와 같이 includes()를 사용하는 방법이 더 직관적으로 보인다.
// - 대소문자를 통일한 뒤 포함 여부만 확인하면 되므로 정규식을 사용할 필요가 없다.
// - includes() 함수 사용으로 문자열 포함 여부를 확인한다는 의도가 코드에 명확하게 드러난다.
// - 참고로 includes()는 문자열과 배열 모두에서 사용할 수 있다.

// return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;