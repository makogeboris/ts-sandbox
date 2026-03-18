let username: string = "Roddy";
let age: number = 77;
let isStudent: boolean = false;

username = "Andy";
age = 55;
isStudent = true;

// username = 100;
// age = "55";
// isStudent = "yes";

let planet = "Pluto";
let score = 99;
let isOnline = true;

// planet = 24;
planet = "Jupiter";
planet;

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
// console.log(calcTotal("10", 2); // ❌)

let numbers: number[] = [1, 2, 3];
numbers;
numbers.push(57);
numbers;
// numbers.push("hello");

let names: Array<string> = ["Becca", "Jenny"];
names;
