const averageGrade = 71; // change this value (0..100) to test other cases

let level;

switch (true) {
  
  case averageGrade < 60:
    level = "Незадовільно";
    break;

  case averageGrade <= 70:
    level = "Задовільно";
    break;

  case averageGrade <= 80:
    level = "Добре";
    break;

  case averageGrade <= 90:
    level = "Дуже добре";
    break;

  default:
    level = "Відмінно";
}

console.log(`${averageGrade} → ${level}`);