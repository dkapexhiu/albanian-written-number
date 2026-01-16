const albWordToNum = require('./lib/index.js');
console.log(albWordToNum(0));     // "zero"
console.log(albWordToNum(21));    // "njëzet e një"
console.log(albWordToNum(123));   // "njëqind e njëzet e tre"
console.log(albWordToNum(1000));  // "një mijë"
