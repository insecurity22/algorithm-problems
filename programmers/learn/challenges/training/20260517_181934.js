function solution(ineq, eq, n, m) {
    const op = ineq + eq;
    if(op === ">=") return Number(n >= m);
    if(op === "<=") return Number(n <= m);
    if(op === ">!") return Number(n > m);
    if(op === "<!") return Number(n < m);
}