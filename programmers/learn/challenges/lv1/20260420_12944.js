function solution(arr) {
  return arr.reduce((acc, num) => acc + num) / arr.length;
}

/**
function solution(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    return average;
}
*/