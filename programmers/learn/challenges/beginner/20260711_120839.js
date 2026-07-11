function solution(rsp) {
    const win = {
        "2": "0",
        "0": "5",
        "5": "2",
    };
    
    return [...rsp].map((v) => win[v]).join('')
}

// 1. 객체 접근
// - 객체는 점 표기법(.)과 대괄호 표기법([])으로 접근할 수 있다. 

// const person = { name: "Kim", age: 27 };
// person.name === person["name"];

// 2. 숫자 키와 문자열 키
// - 객체의 키는 모두 문자열로 저장되므로 2: 0이라고 작성해도 내부적으로는 "2": 0으로 변환된다.

// 2: 0 === "2": 0