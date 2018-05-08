// This file creates the numbers that are for sale and assigns them categories

import factorial from './cheeky-algorithms/factorial';
import fibonacci from './cheeky-algorithms/fibonacci';
import triangle from './cheeky-algorithms/triangle';


const sequences = {
  cubic: n => n ** 3,
  factorial,
  fibonacci,
  square: n => n ** 2,
  triangle,
};

// "this" is abstract here, but is set using "call" on addOrUpdateProduct below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
const addOrUpdateProduct = function addOrUpdateProduct(category, product) {
  if (this[product]) {
    if (!this[product].categories.includes(category)) {
      this[product].categories.push(category);
    }
  } else {
    this[product] = {
      id: product,
      categories: [category],
      price: 4.99,
    };
  }
};


// Object.entries returns an array containing arrays of [key, value]
// Array destructuring is used in the argument list of the arrow function
// to pull out the "key" and "value" from these arrays and assign them to a "category" and
// "fn" variable
export const products = Object.entries(sequences)
  .reduce((acc, [category, fn]) => {
    for (let i = 1, output = 0; output <= 150; i += 1) {
      output = fn(i);
      if (output <= 150) {
        addOrUpdateProduct.call(acc, category, output);
      }
    }
    return acc;
  }, {});

export const categories = Object.keys(sequences);
