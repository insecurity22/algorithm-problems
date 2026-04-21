function solution(arr) {
    const minValue = Math.min(...arr);
    return arr.length > 1 ? arr.filter((v) => v !== minValue) : [-1];
}