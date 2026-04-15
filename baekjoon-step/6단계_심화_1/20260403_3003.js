/**
 * 2 1 2 1 2 1
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split(' ');

// 킹, 퀸, 룩, 비숍, 나이트, 폰 개수
const pieces = [1, 1, 2, 2, 2, 8];

const findPiece = pieces.map((piece, pieceIndex) => piece - input[pieceIndex]);
console.log(findPiece.join(' '));