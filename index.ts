// Primitive Types
let username: string = "Roddy";
let age: number = 77;
let isStudent: boolean = false;

username = "Andy";
age = 55;
isStudent = true;

// username = 100;
// age = "55";
// isStudent = "yes";

// TypeScript Infer Types
let planet = "Pluto";
let score = 99;
let isOnline = true;

// planet = 24;
planet = "Jupiter";
planet;

// Functions + Types
function greet(name: string): string {
  return "Hello " + name;
}

// function greet(name: string): string {
//   return 100;
// }

console.log(greet("Ronny"));
// console.log(greet(123));

function calcTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log(calcTotal(350, 6));
// console.log(calcTotal("10", 2));

// Arrays
let numbers: number[] = [1, 2, 3];
numbers;
numbers.push(57);
numbers;
// numbers.push("hello");

let names: Array<string> = ["Becca", "Jenny"];
names;

let id: number | string;

id = 10;
id;
id = "abc123";
id;
// id = true;

// Union Types
function formatId(id: string | number): string {
  if (typeof id === "number") {
    return "ID: " + id * 2;
  }

  return "ID: " + id.toUpperCase();
}

console.log(formatId("fdghf789"));

// Objects
let product: { name: string; price: number; inStock: boolean } = {
  name: "Laptop",
  price: 1000,
  inStock: true,
};

// product.price = "cheap";
product.price = 700;
product;

// Inline types becomes messy fast, hard to read, resuse and maintain
// let product: { id: number; name: string; price: number; inStock: boolean };

// Type Alias
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  isForKids?: boolean; // optional properties, may or may not exist
};

let product2: Product = {
  id: 1,
  name: "PS5",
  price: 3546,
  inStock: true,
};

product2;

function getProductLabel(product: Product): string {
  return `${product.name} - $${product.price}`;
}

console.log(getProductLabel(product2));

// product.price = "1000";

type User = {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
};

let user: User = {
  id: 42,
  username: "xeno88",
  email: "xeno88@email.com",
  isAdmin: true,
};

function getUserInfo(user: User): string {
  const role = user.isAdmin ? "admin" : "user";
  return `${user.username} ${role}`;
}

console.log(getUserInfo(user));
