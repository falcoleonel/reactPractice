const pi = 3.1416;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

function add(e1, e2) {
  return e1 + e2;
}

function multiply(e1, e2) {
  return e1 * e2;
}

function substract(e1, e2) {
  return e1 - e2;
}

function divide(e1, e2) {
  return e1 / e2;
}

export default pi;
export { doublePi, triplePi };
export { add, multiply, substract, divide };
