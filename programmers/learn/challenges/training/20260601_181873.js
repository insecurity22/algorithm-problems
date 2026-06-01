function solution(my_string, alp) {
    return [...my_string].map((str) => str === alp ? str.toUpperCase() : str).join("");
}

// 1. 간단한 방법
// return my_string.replaceAll(alp, alp.toUpperCase())