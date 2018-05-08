// This is a fake API. It's not a very good one, but pretend it's real.

import { products, categories } from '@/data/inventory';

// Promises are used to simulate the asynchronous behavior of actual network requests
export const getCategories = () => Promise.resolve(categories);

export const getProducts = (category) => {
  if (!categories.includes(category)) {
    return Promise.reject({
      error: `Category "${category}" does not exist.`,
      code: 404,
    });
  }
  return Promise.resolve(
    Object.values(products)
      .filter(product => product.categories.includes(category)),
  );
};
