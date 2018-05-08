const triangle = (n) => {
  if (n < 0) {
    throw new Error('Stop being silly, and I\'ll write better error messages');
  }
  if (n === 0) {
    return 0;
  }
  return n + triangle(n - 1);
};

export default triangle;
