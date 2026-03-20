// Basic types and functions
function greet(name: string): string {
  return "Hello " + name;
}
console.log(greet("Ronny"));
// console.log(greet(123));

// function greet(name: string): string {
//   return 100;
// }

function calcTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log(calcTotal(350, 6));
// console.log(calcTotal("10", 2));

// Arror functions
// const add = (a: number, b: number): number => a + b;
// console.log(add(42, 77));

// Optional parameters
const greet2 = function (name: string, age?: number): string {
  return age ? `${name} is ${age} years old` : name;
};
console.log(greet2("Lenny", 67));

// Default parameters
function greet3(name: string = "Guest"): string {
  return "Hello " + name;
}
console.log(greet3());
console.log(greet3("Frank"));
// console.log(greet3(45));

// Returning objects
function getUser(): { name: string; age: number } {
  return { name: "Rose", age: 25 };
}
console.log(getUser());

// Typed Calculator
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(77, 33));

function subtract(a: number, b: number): number {
  return a - b;
}
console.log(subtract(76, 38));

const multiply = (a: number, b: number): number => a * b;
console.log(multiply(67, 84));

const divide = function (a: number, b: number): number | null {
  if (b === 0) return null;
  return a / b;
};

console.log(divide(10, 2));
console.log(divide(10, 0));

// Name formatter
function capitalizeWords(value: string): string {
  return value
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function formatName(
  firstName: string = "john",
  lastName: string = "doe",
  middleName?: string,
): string {
  const first = capitalizeWords(firstName);
  const last = capitalizeWords(lastName);

  if (middleName) {
    const middle = capitalizeWords(middleName);
    return `${first} ${middle} ${last}`;
  }

  return `${first} ${last}`;
}

console.log(formatName("dontay", "banks"));
console.log(formatName("Rebecca", "queen", "rose"));
console.log(formatName());

// Array analyzer
function analyzeNumbers(numbers: number[]): {
  avg: number;
  min: number;
  max: number;
} | null {
  if (numbers.length === 0) return null;

  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  // const min = Math.min(...numbers);
  // const max = Math.max(...numbers);

  for (const num of numbers) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  const avg = sum / numbers.length;
  // const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

  return {
    avg,
    min,
    max,
  };
}

console.log(analyzeNumbers([3, 5, 9, 18]));
console.log(analyzeNumbers([]));

// Even or odd mapper
const getEvenOdd = (numbers: number[]): string[] => {
  let newArr: string[] = [];

  for (const num of numbers) {
    if (num % 2 === 0) {
      newArr.push("even");
    } else {
      newArr.push("odd");
    }
  }

  //  return numbers.map((num) => (num % 2 === 0 ? "even" : "odd"));

  return newArr;
};

// const getEvenOdd = (numbers: number[]): string[] => {
//   return numbers.map((num) => (num % 2 === 0 ? "even" : "odd"));
// };

console.log(getEvenOdd([1, 2, 3]));

const parseNumber = (value: string): number | null => {
  const parsed = Number(value);
  return isNaN(parsed) ? null : parsed;
};

console.log(parseNumber("123"));
console.log(parseNumber("12.5"));
console.log(parseNumber("abc"));
