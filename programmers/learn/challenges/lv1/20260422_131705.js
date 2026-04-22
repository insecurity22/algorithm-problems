function solution(s) {
    const sArr = s.split(' ');

    let result = '';
    for(let i = 0; i < sArr.length; i++) {
        const word = sArr[i];

        for(let j = 0; j < word.length; j++) {
            result += j % 2 === 0 
            ? word[j].toUpperCase() 
            : word[j].toLowerCase();
        }
        
        result += " ";
    }
    
    return result.slice(0, -1);
}

// 1. 단어마다 idx를 0으로 초기화하면 더 이해하기 쉽다. 굳이 복잡하게 만들지 않아도 된다.
// function solution(s) {
//     let answer = '';
//     let idx = 0;
//     for(let i = 0; i < s.length; i++) {
//         const str = s[i];
//         if(str === ' ') {
//             answer += " ";
//             idx = 0;
//         } else {
//             answer += idx % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
//             idx++;
//         }
//     }
//     return answer;
// }