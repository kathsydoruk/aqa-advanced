const delayText = (text, timeOut) => {
  setTimeout(() => {
    console.log(text);
  }, timeOut);
};

delayText("Randome text in 2000ms", 2000);
