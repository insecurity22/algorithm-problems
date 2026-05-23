function solution(names) { 
    return names.filter((_, nameIndex) => nameIndex % 5 === 0);
}

// 1. !(i % 5)로 간단하게 사용 가능
// ➝ (i % 5) = 0 = false  
// ➝ !(false) = true