const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    console.log(line);
}).on('close',function(){
    process.exit();
});

// ↔ 다른 방법
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }).on('line', console.log);
