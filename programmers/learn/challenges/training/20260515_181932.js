function solution(code) {
    let ret = '';
    let mode = 0;
    
    [...code].map((c, cIndex) => {
        switch(mode) {
            case 0:
                if(c === '1') mode = 1;
                else if(c !== '1' && cIndex % 2 === 0) ret += c;
                break;
            case 1:
                if(c === '1') mode = 0;
                else if(c !== '1' && cIndex % 2 !== 0) ret += c;
                break;
        }
    })
    
    return ret || 'EMPTY';
}

// 1. 다른 방법, 0 = false, 1 = true
// function solution(code) {
//     let ret = '';
//     let mode = 0;

//     [...code].forEach((c, i) => {
//         if (c === '1') {
//             mode = 1 - mode;
//         } else if (i % 2 === mode) {
//             ret += c;
//         }
//     });

//     return ret || 'EMPTY';
// }