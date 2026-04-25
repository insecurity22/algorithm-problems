function solution(phone_book) {
    const map = new Map();
    
    for(let phone of phone_book) {
        map.set(phone, true);
    }
    
    for(let phone of phone_book) {
        let prefix = ""; 
        for(let i = 0; i < phone.length - 1; i++) {
            prefix += phone[i];
            const isInclude = map.has(prefix);
            if (isInclude) {
                return false;
            }
        }
    }
    
    return true;
}
console.log(["119", "97674223", "1195524421"]);

// 이중 반복문으로 처리했을 경우, 전화번호 개수가 많으면 모든 쌍을 비교한다.
// - 예를 들어 100,000개라면 100000 * 100000으로 엄청 커진다.
// - 또한 매번 정규식을 생성하면 비교할 때마다 정규식 객체를 새로 만들게 되며 비용이 크다.
// - 따라서 효율성 탈락.
// function solution(phone_book) {
//     for(let i = 0; i < phone_book.length; i++) {
//         for(let j = 0; j < phone_book.length; j++) {
//             if(i == j) continue;
            
//             if(new RegExp(`^${phone_book[i]}`).test(phone_book[j])) {
//                 return false;
//             }
//         }
//     }
    
//     return true;
// }