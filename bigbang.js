const fs = require('fs');
let numArr = [];
for (let i = 1; i <= 100; i++) {
    numArr[i - 1] = i;
}

numArr = numArr.map((i) => {
    return (i % 3 == 0 && i % 5 == 0) ? "BIGBANG" : (i % 3 == 0) ? "BIG" : (i % 5 == 0) ? "BANG" : i;
});

const jsonString = JSON.stringify(numArr);
fs.writeFileSync('output.json', jsonString);

console.log(numArr);

