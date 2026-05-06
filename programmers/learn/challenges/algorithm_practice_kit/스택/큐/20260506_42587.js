function solution(priorities, location) { // 프로세스 중요도가 담긴 배열, 몇 번째로 실행되는지 알고싶은 프로세스의 위치
    let answer = 0;
    const queue = priorities.map((prioritie, index) => ({ prioritie, index})); 
    while(queue.length) {
        const currentProcess = queue.shift();
        const isHighPriority = queue.some((item) => item.prioritie > currentProcess.prioritie);
        if(isHighPriority) {
            queue.push(currentProcess);
        } else {
            answer++;
            // 해당 프로세스가 몇 번째로 실행되는지
            if(currentProcess.index === location) return answer;
        }
    }
}