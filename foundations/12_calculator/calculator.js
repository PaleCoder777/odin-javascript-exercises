// take two numbers and return their sum
const add = function(num1, num2) {
	return (num1 + num2);
};

// take two numbers and return the result after subtracting the second from the first
const subtract = function(num1, num2) {
	return (num1 - num2);
};

// take an array of numbers and add all the numbers together
const sum = function(array) {
	return array.reduce((sum, number) => (sum + number), 0);
};

// take an array of numbers and multiply all the numbers together
const multiply = function(array) {
	return array.reduce((product, number) => (product * number));
};

// take two numbers (base and exponent) and return the result of raising the base to that exponent
const power = function(base, exponent) {
	return (base ** exponent);
};

// given a single number, find its [factorial](https://en.wikipedia.org/wiki/Factorial)
const factorial = function(num) {
  let factorial = 1;

  for (let i = num; i > 0; i--){    
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
