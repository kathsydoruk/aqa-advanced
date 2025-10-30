const car1 = {
  brand: "Porsche",
  model: "911 Turbo",
  year: 1963,
};

const car2 = {
  brand: "Volkswagen",
  model: "Touareg",
  owner: "Vasya",
};

const car3 = { ...car1, ...car2 };

console.log(car3);
