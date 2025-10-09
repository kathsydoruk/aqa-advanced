import { randomInt } from "crypto";

const age = randomInt(1, 101); 
const isAdult = age >= 18; 

console.log("Age:", age);
console.log("Is adult:", isAdult);