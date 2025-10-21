const handleNum = (number, handleEvenCallback, handleOddCallback) => {
    if (number % 2 === 0) { 
        if (typeof handleEvenCallback === "function") handleEvenCallback(number);
    } else if (typeof handleOddCallback === "function") {
        handleOddCallback(number);
    }
}

const handleEven = (number) => {
  console.log(`${number}: number is even`);
}

const handleOdd = (number) => {
  console.log(`${number}: number is odd`);
}

handleNum(45, handleEven, handleOdd);
handleNum(22, handleEven, handleOdd);
