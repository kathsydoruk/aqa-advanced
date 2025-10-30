const users = [
  { name: "Ірина", email: "iryna@example.com", age: 25, city: "Київ" },
  { name: "Петро", email: "petro@example.com", age: 31, role: "admin" },
  { name: "Марко", age: 19 },
  {
    name: "Оксана",
    email: "oksana@example.com",
    age: 27,
    interests: ["JS", "UI"],
  },
];

for (const user of users) {
  const { name, email = "Unavailable", age, ...rest } = user;
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);

  console.log("Other props:", rest);
}
