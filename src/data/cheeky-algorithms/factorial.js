const factorial = (n) => {
  if (n < 0) {
    throw new Error('No negatives');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

export default factorial;
