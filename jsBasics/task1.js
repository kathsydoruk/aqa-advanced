import chalk from 'chalk'

const myString = "Hello, QA!";
const myNumber = 42;                  
const myBoolean = true;
const myNull = null;                 
let myUndefined;

console.log(chalk.blue("String:"), myString, "| typeof =", typeof myString);
console.log(chalk.green("Number:"), myNumber, "| typeof =", typeof myNumber);
console.log(chalk.hex('#38e8ebff')("Boolean:"), myBoolean, "| typeof =", typeof myBoolean);
console.log(chalk.hex('#e5eb38ff')("Null:"), myNull, "| typeof =", typeof myNull);              
console.log(chalk.red("Undefined:"), myUndefined, "| typeof =", typeof myUndefined);
