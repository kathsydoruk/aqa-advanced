const divide = (numerator, denominator) => {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
    throw new TypeError("Both arguments must be numeric!");
  }
  if (denominator === 0) {
    throw new RangeError("Denominator must not be 0!");
  }
  return numerator / denominator;
};

const cases = [
  [10, 2],
  [7, 0],
  ["two", 3],
  [20, NaN],
];

for (const [numerator, denominator] of cases) {
  try {
    const result = divide(numerator, denominator);
    console.log(`${numerator} / ${denominator} = ${result}`);
  } catch (error) {
    console.error(`Error for ${numerator}/${denominator}:`, error.message);
  } finally {
    console.log("Робота завершена");
  }
}
