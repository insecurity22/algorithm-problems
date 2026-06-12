const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    // 1.
    // for(const char of str) {
    //     console.log(char);
    // }
    
    // 2.
    console.log([...str].join("\n"))
});