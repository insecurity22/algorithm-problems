function solution(array, commands) {
    let result = [];
    for(const [i, j, k] of commands) {
        result.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    }
    return result;
}

// 1. map과 filter를 사용해 바로 return 할 수도 있다.
// return commands.map(command => {
//     const [sPosition, ePosition, position] = command
//     const newArray = array
//         .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//         .sort((a,b) => a - b)    
//     return newArray[position - 1]
// })