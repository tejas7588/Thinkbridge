// Arrays module

// Sample array
export const numbers = [1, 2, 3, 4, 5, 6];

// Squares using map
export function getSquares(arr) {
  return arr.map((n) => n * n);
}

// Filter evens
export function getEvens(arr) {
  return arr.filter((n) => n % 2 === 0);
}

// Sum using reduce
export function getSum(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}
