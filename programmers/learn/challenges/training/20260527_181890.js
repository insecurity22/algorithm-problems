function solution(str_list) {
    for(let i = 0; i < str_list.length; i++) {
        if(str_list[i] === 'l') return str_list.slice(0, i);
        if(str_list[i] === 'r') return str_list.slice(i + 1);
    }
    return [];
}

// 1. map은 return로 새 배열 생성
// 2. return 하면 함수가 즉시 끝나기 때문에 굳이 else가 필요 없다.