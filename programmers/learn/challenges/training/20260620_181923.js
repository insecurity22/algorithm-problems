function solution(my_string, queries) {
    let arr = [...my_string];
    
    queries.forEach(([s, e], i) => {
        const reversed = arr.slice(s, e + 1).reverse();
        arr.splice(s, e-s+1, ...reversed);
    });
    
    return arr.join('')
}

// 1. length 활용
// - e - s + 1 대신 뒤집을 구간의 길이(changeStr.length)를 사용할 수도 있다.

// const changeStr = arr.slice(start, end + 1);
// arr.splice(start, changeStr.length, ...changeStr.reverse());

// 2. splice(start, deleteCount, ...items)
// - start 위치부터 deleteCount개를 삭제한 뒤, items를 삽입한다.

// 3. 함수를 사용하지 않는 방법

// function solution(my_string, queries) {
//     const arr = [...my_string];

//     for (const [s, e] of queries) {
//         let left = s;
//         let right = e;

//         while (left < right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }

//     return arr.join('');
// }