// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

// const args = process.argv.slice(2);

let argvArray = (process.argv.slice(2)); // e.g. [10, 3, 5, 15, 9 ]
argvArray.sort();

for (let i = 0; i < argvArray.length; i++) {
  let time = argvArray[i];
  setTimeout(() => process.stdout.write('\x07'), time*1000);
};