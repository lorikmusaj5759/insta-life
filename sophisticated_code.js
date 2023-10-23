/* filename: sophisticated_code.js */

// A sophisticated and elaborate code snippet demonstrating the usage of various concepts and techniques in JavaScript

// Define a class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Get the magnitude of the complex number
  getMagnitude() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  // Get the conjugate of the complex number
  getConjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  // Add two complex numbers
  static add(c1, c2) {
    return new ComplexNumber(c1.real + c2.real, c1.imaginary + c2.imaginary);
  }

  // Multiply two complex numbers
  static multiply(c1, c2) {
    const real = c1.real * c2.real - c1.imaginary * c2.imaginary;
    const imaginary = c1.real * c2.imaginary + c2.real * c1.imaginary;
    return new ComplexNumber(real, imaginary);
  }
}

// Calculate the factorial of a number using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Generate fibonacci sequence up to a given count
function generateFibonacciSequence(count) {
  const sequence = [0, 1];
  for (let i = 2; i < count; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Calculate the sum of an array of numbers
function calculateSum(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

// Generate a random integer between a given range
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Shuffle the elements of an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example usage
const complexNumber1 = new ComplexNumber(3, 4);
const complexNumber2 = new ComplexNumber(2, -1);

console.log('Magnitude of complexNumber1:', complexNumber1.getMagnitude());
console.log('Conjugate of complexNumber2:', complexNumber2.getConjugate());

const complexNumberSum = ComplexNumber.add(complexNumber1, complexNumber2);
console.log('Sum of complexNumber1 and complexNumber2:', complexNumberSum);

const complexNumberProduct = ComplexNumber.multiply(complexNumber1, complexNumber2);
console.log('Product of complexNumber1 and complexNumber2:', complexNumberProduct);

console.log('Factorial of 5:', factorial(5));

console.log('Fibonacci sequence up to count 10:', generateFibonacciSequence(10));

console.log('Sum of numbers [1, 2, 3, 4, 5]:', calculateSum([1, 2, 3, 4, 5]));

console.log('Random integer between 1 and 10:', generateRandomInteger(1, 10));

console.log('Shuffled array:', shuffleArray([1, 2, 3, 4, 5]));