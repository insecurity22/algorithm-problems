function solution(t, p) {
    const pLength = p.length; 
    
    let count = 0;
    for(let i = 0; i < t.length - pLength + 1; i++) {
        let str = t.slice(i, i + pLength);
        if(str <= p) count++
    }
    return count;
}