const person = {
  firstName: "Сергей",
  lastName: "Стерненко",
  age: "30",
};

person.email = "sergeyS@gmail.com";
delete person.age;

console.log(person);
