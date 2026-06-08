function solution(myString, pat) {
    return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}

// 1. lastIndexOf() 함수 없이 구현하는 방법
// function solution(myString, pat) {
//     let idx = 0;
//     for(let i = 0; i <= myString.length - pat.length; i++) {
//         if(myString.slice(i, i + pat.length) === pat) {
//             idx = i;
//         }
//     }
//     return myString.slice(0, idx + pat.length);
// }