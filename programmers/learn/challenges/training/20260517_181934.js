function solution(ineq, eq, n, m) {
    const op = ineq + eq;
    if(op === ">=") return Number(n >= m);
    if(op === "<=") return Number(n <= m);
    if(op === ">!") return Number(n > m);
    if(op === "<!") return Number(n < m);
}

// ↔ 훨씬 더 깔끔해보인다.
// const operations = {
//     '>=': (n, m) => n >= m,
//     '<=': (n, m) => n <= m,
//     '>!': (n, m) => n > m,
//     '<!': (n, m) => n < m,
// };
// function solution(ineq, eq, n, m) {
//     const op = operations[ineq + eq];
//     return Number(op(n, m));
// }