function solution(s){
    s = s.toLowerCase();
    
    let pCount = 0;
    let yCount = 0;
    for(let char of s) {
        if(char === 'p') {
            pCount += 1;
        }
        if(char === 'y') {
            yCount += 1;
        }
    }
    
    return pCount === yCount;
}

// 한 줄로도 간단하게 가능
// return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length