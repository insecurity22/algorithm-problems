function solution(array, height) {
    let count = 0;
    for (const a of array) {
        if (a > height) count += 1;
    }

    return count;
}