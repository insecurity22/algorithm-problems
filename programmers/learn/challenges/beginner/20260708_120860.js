function solution(dots) {
    const x = dots.map(([x]) => x);
    const y = dots.map(([_, y]) => y);
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

// dots = [
//   [1, 1], [1, 4], [5, 1], [5, 4]
// ]

// y
// ↑
// │      ● (1, 4) ───────── ● (5, 4)
// │      │                  │
// │      │                  │
// │      │                  │
// │      ● (1, 1) ───────── ● (5, 1)
// └────────────────────────────────→ x


// 1. map + Math.max/min
// - x좌표와 y좌표를 각각 분리해 최댓값과 최솟값의 차이를 구하는 방식으로, 가장 직관적이고 가독성이 좋다.

// 2. for...of

// function solution(dots) {
//     const x = [];
//     const y = [];
//
//     for (const [px, py] of dots) {
//         x.push(px);
//         y.push(py);
//     }
//
//     return (Math.max(...x) - Math.min(...x)) *
//            (Math.max(...y) - Math.min(...y));
// }

// 3. reduce

// function solution(dots) {
//     const { minX, maxX, minY, maxY } = dots.reduce(
//         (acc, [x, y]) => ({
//             minX: Math.min(acc.minX, x),
//             maxX: Math.max(acc.maxX, x),
//             minY: Math.min(acc.minY, y),
//             maxY: Math.max(acc.maxY, y),
//         }),
//         {
//             minX: Infinity,
//             maxX: -Infinity,
//             minY: Infinity,
//             maxY: -Infinity,
//         }
//     );
//
//     return (maxX - minX) * (maxY - minY);
// }