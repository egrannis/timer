let argvArr = process.argv.slice(2).sort(); // e.g. [10, 3, 5, 15, 9 ]
const numArr = argvArr.map(arg => Number(arg));

for (let i = 0; i < numArr.length; i++) {
  const time = numArr[i];
  if (typeof time === 'number' && time > 0) {
    setTimeout(() => process.stdout.write('\x07'), time * 1000);
  }
}

// Test inputs in node
// node timer1.js 10 3 5 7
// node timer1.js -5 3 5 7
// node timer1.js emma
// node timer1.js//addspace
