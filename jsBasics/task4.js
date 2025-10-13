import { randomInt } from "crypto";
import chalk from 'chalk'

let radius;

//4.1 circle area formula
radius = randomInt(1,10);                         
const circleArea = Math.PI * (radius ** 2); 
console.log(chalk.red("Circle area"));    
console.log("Radius:", radius); 
console.log("Circle area:", circleArea.toFixed(2));

//4.2 rectangle area formula
const length = randomInt(1,30);              
const width = randomInt(5,27);              
const rectangleArea = length * width;
console.log(chalk.green("Rectangle area"));    
console.log("Length:", length); 
console.log("Width:", width); 
console.log("Rectangle Area:", rectangleArea.toFixed(2));

//4.3 cylinder volume formula
radius = randomInt(1,15); 
const height = randomInt(1,20);                      
const volume = Math.PI * (radius ** 2) * height;

console.log(chalk.blueBright("Cylinder volume")); 
console.log("Radius:", radius);
console.log("Height:", height);
console.log("Cylinder volume:", volume.toFixed(2));