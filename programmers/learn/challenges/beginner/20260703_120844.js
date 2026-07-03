function solution(numbers, direction) {
    if(direction === 'left') {
        numbers.push(numbers.shift());
    }
    else if(direction === 'right') {
        numbers.unshift(numbers.pop());
    }
    return numbers;
}

// 1. 변수 선언할 경우 메모리 공간을 차지하기 때문에 변수 선언을 안하는 지금이 좋아보인다.
