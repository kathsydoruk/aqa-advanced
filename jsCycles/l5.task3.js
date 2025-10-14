
import chalk from 'chalk';
import { randomInt } from "crypto";

const number = randomInt(1, 10);

console.log(chalk.bgGreen(`Таблиця 1 множення для ${number}:`));
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log(chalk.bgGreen(`\nТаблиця 2 множення для ${number}:`));
let j = 1;
while (j <= 10) {
  console.log(`${number} x ${j} = ${number * j}`);
  j++;
}