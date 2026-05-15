function solution(n) {
    // 완전 탐색 + 방향 제어
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    
    const dx = [0, 1, 0, -1];
    // dx: (x, y) = 행 이동 = x좌표가 얼마나 변하는지
    // 1. 오른쪽: (2, 3) = (2, 4) => 0
    // 2. 아래: (2, 4) = (3, 4) => 1
    // 3. 왼쪽: (3, 4) = (3, 3) => 0
    // 4. 위: (3, 3) = (2, 3) => -1
    
    const dy = [1, 0, -1, 0]; 
    // dy: (x, y) = 열 이동 = y좌표가 얼마나 변하는지
    // 1. 오른쪽: (2, 3) = (2, 4) => 1
    // 2. 아래: (2, 4) = (3, 4) => 0
    // 3. 왼쪽: (3, 4) = (3, 3) => -1
    // 4. 위: (3, 3) = (2, 3) => 0
    
    let x = 0, y = 0;
    let dir = 0;
    let num = 1;
    
    while (num <= n * n) {
        arr[x][y] = num++;
        
        let nextX = x + dx[dir];
        let nextY = y + dy[dir];
        
        // 방향 전환(배열 범위를 벗어난 경우)
        if (
            // 위쪽으로 너무 간 경우
            nextX < 0 
            // 왼쪽으로 너무 간 경우
            || nextY < 0
            // 아래로 너무 간 경우
            || nextX >= n
            // 오른쪽으로 너무 간 경우
            || nextY >= n
            // 다음 칸에 이미 숫자가 들어있는 경우
            || arr[nextX][nextY] !== 0
        ) {
            dir = (dir + 1) % 4;
            nextX = x + dx[dir];
            nextY = y + dy[dir];
        }

        x = nextX;
        y = nextY;
    }
    
    return arr;
}