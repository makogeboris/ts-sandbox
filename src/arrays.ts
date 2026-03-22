// Arrays
const numbers: number[] = [1, 2, 3];
const names: string[] = ["Alice", "Bob"];

numbers.push(4);
numbers;
// numbers.push("5"); // error

// Alternative syntax
let names2: Array<string> = ["Becca", "Jenny"];
names2;

// ch1
// Solution: Define a type for the user objects
type User5 = {
  name: string;
  age: number;
};

const users: User5[] = [];

users.push({ name: "Alice", age: 25 });
users.push({ name: "Bob", age: 30 });
// users.push("invalid"); // error

// ch2
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const todos: Todo[] = [
  { id: 1, title: "Learn TS", completed: false },
  { id: 2, title: "Build project", completed: true },
];

// ch3
const scores: readonly number[] = [10, 20, 30];
// scores.push(40);
// scores[0] = 99;

type User6 = {
  name: string;
  age: number;
};

const u6: User6[] = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 17 },
];

const adults = u6.filter((user) => user.age >= 18);

console.log(adults);
