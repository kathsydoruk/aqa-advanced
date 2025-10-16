//function declaration
function rectangleAreaDecl(width,height){
    return width * height
}

console.log(rectangleAreaDecl(2,5))

//function expression
const rectangleAreaExp  = function (width,height){
    return width * height;
}

console.log(rectangleAreaExp(4,5))

//arrow function
const rectangleAreaArrow = (width,height) => width * height

console.log(rectangleAreaArrow(6,5))
