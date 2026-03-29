const gregorianYear = 543;

const fileSystem = require('fs');
const buddhistYear = parseInt(fileSystem.readFileSync(0).toString().trim());

console.log(buddhistYear - gregorianYear);