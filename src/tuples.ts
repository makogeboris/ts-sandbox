// A tuple is like a fixed-length, ordered array with specific types at each position.
// Use tuples when:
//Order is meaningful
//Structure is fixed
//You want stricter type safety than arrays

// Normal array
const arr: string[] = ["a", "b", "c"];

// Tuple
const user: [string, number] = ["Jenna", 23];
// Exact structure, Position matters:

// ex1
type Coordinates = [number, number];

const point1: Coordinates = [98, 44];
const point2: Coordinates = [34.5, -87.8];

// Invalid
// const p3: Coordinates = [10];           // too short
// const p4: Coordinates = [10, 20, 30];  // too long
// const p5: Coordinates = ["10", 20];    // wrong type

// ex2
type APIResponse = [number, string];

const res: APIResponse = [200, "OK"];
const success: APIResponse = [200, "Success"];
const notFound: APIResponse = [404, "Not Found"];

// ex3
type UserTuple = [number, string, boolean];

const usertup: UserTuple = [1, "Tobey", true];

// ex4
type ProductTup = [number, string, number];

const prodTup1: ProductTup = [23, "Laptop", 777];
const prodTup2: ProductTup = [24, "iPhone", 234];
// const prodTup3: ProductTup = [25, "Laptop", '567'];

// Destructuring tuples
const userDes: [number, string] = [1, "Allie"];
const [id, name1] = userDes;

// ex5
const ProductTupDes: ProductTup = [45, "Ford Raptor", 799];

const [id1, name2, price] = ProductTupDes;

// Named tuples
type UserNamed = [id: number, name: string, isAdmin: boolean];

// ex6
type ProductNamed = [id: number, name: string, price: number];

// Optional tuple elements
type UserOptional = [number, string, boolean?];

const uOp1: UserOptional = [1, "Pasabist"];
const uOp2: UserOptional = [2, "Destiny", true];

// ex7
type PersonOptional = [string, number, string?];

const personOp1: PersonOptional = ["Morgan", 56, "morgan@email.com"];
const personOp2: PersonOptional = ["Trent", 45];

// Rest in tuples
type Numbers = [number, ...number[]]; // Meaning: First item = number Rest = any number of numbers

const nums1: Numbers = [1];
const nums2: Numbers = [1, 2, 3, 4];

// ex8
type RestTup = [string, ...number[]];

const resTu1: RestTup = ["start", 1, 2, 3];
const resTu2: RestTup = ["start"];
// const resTu3: RestTup = [1, 2, 3]; // Error first must be string

// Tuples + Functions
function getUser(): [number, string] {
  return [1, "Alice"];
}

const [userId, userName] = getUser();

// ex9
function createProduct(name: string, price: number): [number, string, number] {
  const id = Math.floor(Math.random() * 1000);

  return [id, name, price];
}

const productNew = createProduct("Laptop", 999);
console.log(productNew);

const [idNew, nameNew, priceNew] = productNew;

// ex10
function safeDivide(a: number, b: number): [boolean, number | string] {
  if (b === 0) {
    return [false, "Cannot divide by zero"];
  }

  return [true, a / b];
}

const result1 = safeDivide(10, 2);
const result2 = safeDivide(10, 0);
console.log(result1, result2);

// Destructuring
const [successD, valueD] = safeDivide(10, 2);

if (success) {
  console.log("Result:", valueD);
} else {
  console.log("Error:", valueD);
}
