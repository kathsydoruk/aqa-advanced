const recursiveCounter = (num) => {
  const nextNum = num-1;

  console.log(num);
  if (nextNum > 0) {
    recursiveCounter(nextNum);
  }
}

recursiveCounter(5);
