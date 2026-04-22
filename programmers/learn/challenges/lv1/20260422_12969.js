process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const n = Number(input[0]), m = Number(input[1]);
    
    for(let i = 0; i < m; i++) {
        console.log("*".repeat(n))
    }
});

// 1. for문 대신 아래와 같이 간단하게도 가능하다.
// - 개인적으로 이 방법이 더 좋아보인다...
// const star = `${'*'.repeat(n)}\n`;
// console.log(star.repeat(m));)