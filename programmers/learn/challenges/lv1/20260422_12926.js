function solution(s, n) {
    return [...s].map((char) => {
        if(char === ' ') return ' ';
        
        const shiftedCode = char.charCodeAt(0) + n;
        if(char >= 'A' && char <= 'Z') {
            return String.fromCharCode(shiftedCode > 90 ? shiftedCode - 26 : shiftedCode);
        }
        
        if(char >= 'a' && char <= 'z') {
            return String.fromCharCode(shiftedCode > 122 ? shiftedCode - 26 : shiftedCode);
        }
    }).join("");
}

// 1. 알파벳 위치(0~25)로 바꿨다가 다시 문자로 복원하는 방식
// 대문자: String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65)
// 소문자: String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97)

// 2. if (char >= 'A' && char <= 'Z')
// 개념적으로 아래와 같다.
// if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))

// 3. 알파벳은 대문자 26개, 소문자 26개
// A: 65
// Z: 90
// a: 97
// z: 122

// 4. 추가적으로
// 초반에는 대문자 조건만 분기했었지만,
// 소문자 조건도 명시적으로 분리하는 편이 예외 처리에 더 안전하다고 생각했다.