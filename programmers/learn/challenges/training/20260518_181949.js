const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close',function(){
    console.log(
        input.reduce((acc, curr) => {
            if((/[a-z]/).test(curr)) return acc + curr.toUpperCase();
            if((/[A-Z]/).test(curr)) return acc + curr.toLowerCase();
            return acc + curr;
        }, '')
   );
});

// 1. reduce로 간단하게 사용 가능
// console.log(input.map((v) => /[A-Z]/.test(v) ? v.toLowerCase() : v.toUpperCase()).join(''));