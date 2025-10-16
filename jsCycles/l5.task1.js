import chalk from 'chalk';

const students = [
  { name: "Іван",  averageGrade: 59 },   // Незадовільно
  { name: "Олена", averageGrade: 60 },   // Задовільно
  { name: "Тарас", averageGrade: 71 },   // Добре
  { name: "Марія", averageGrade: 81 },   // Дуже добре
  { name: "Петро", averageGrade: 91 },   // Відмінно
  { name: "Надія", averageGrade: NaN },  // Помилка
];

function getLevel(averageGrade) {
  if (Number.isNaN(averageGrade) || averageGrade < 0 || averageGrade > 100) {
    return chalk.gray("Помилка: оцінка має бути в діапазоні 0..100");
  } else if (averageGrade < 60) {
    return chalk.bgRedBright.black("Незадовільно");
  } else if (averageGrade <= 70) {
    return chalk.bgYellowBright.black("Задовільно");
  } else if (averageGrade <= 80) {
    return chalk.bgCyanBright.black("Добре");
  } else if (averageGrade <= 90) {
    return chalk.bgGreenBright.black("Дуже добре");
  } else {
    return chalk.bgGreen.white("Відмінно");
  }
}

students.forEach(({ name, averageGrade }) => {
  console.log(`${chalk.bold(name)}: ${averageGrade} → ${getLevel(averageGrade)}`);
});