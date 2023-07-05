export enum Operation {
  Add = 'add',
  Subtract = 'subtract',
  Multiply = 'multiply',
  Divide = 'divide',
}

/**
 * Adds two numbers and returns the result.
 * @param {number} first - The first number.
 * @param {number} second - The second number.
 * @returns {number} The sum of the two numbers.
 */

export const add = (first: number, second: number): number => {
  return first + second;
};

/**
 * Subtracting two numbers and returns the result.
 * @param {number} first - The first number.
 * @param {number} second - The second number.
 * @returns {number} The result of subtracting two numbers.
 */

export const subtract = (first: number, second: number): number  => {
  return first - second;
};

/**
 * Multiplying two numbers and returns the result.
 * @param {number} first - The first number.
 * @param {number} second - The second number.
 * @returns {number} The result of multiplying two numbers.
 */

export const multiply = (first: number, second: number): number  => {
  return first * second;
};

/**
 * Divide two numbers and returns the result.
 * @param {number} first - The first number.
 * @param {number} second - The second number.
 * @returns {number} The result of dividing two numbers.
 */

export const divide = (first: number, second: number): number  => {
  return first / second;
};

