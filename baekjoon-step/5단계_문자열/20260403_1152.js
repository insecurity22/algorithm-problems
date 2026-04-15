/**
 * The  Curious Case of Benjamin Button
 */

const fileSystem = require("fs");
const input = fileSystem.readFileSync(0).toString().trim();
console.log(input.split(/\s+/).filter(Boolean).length);

// \s → 단순 스페이스 뿐만 아니라 줄바꿈, 탭, 기타 공백까지 포함
