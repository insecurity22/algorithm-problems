function solution(s){
    const stack = [];
    
    for(const char of s) {
        if(char === '(') {
            stack.push(char);
        } 
        else if(char === ')') {
            if(!stack.length) return false; 
            stack.pop();
        }
    }
    
    return stack.length === 0;
}