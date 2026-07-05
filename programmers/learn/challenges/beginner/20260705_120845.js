function solution(box, n) {
    const [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

// 1. reduce
// return box.reduce((acc, v) => acc * Math.floor(v / n), 1);