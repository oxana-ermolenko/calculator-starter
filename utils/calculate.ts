export enum Operation {
  Add = 'add',
  Subtract = 'subtract',
  Multiply = 'multiply',
  Divide = 'divide',
}


export const add = (first: number, second: number): number => {
  return first + second;
};

export const subtract = (first: number, second: number): number  => {
  return first - second;
};

export const multiply = (first: number, second: number): number  => {
  return first * second;
};

export const divide = (first: number, second: number): number  => {
  return first / second;
};

