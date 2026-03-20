// Objects, Interfaces & Type Aliases

// Objects
const product: { name: string; price: number; inStock: boolean } = {
  name: "Laptop",
  price: 1000,
  inStock: true,
};

// product.price = "cheap";
product.price = 700;
product;

// Inline types becomes messy fast, hard to read, resuse and maintain
// const product: { id: number; name: string; price: number; inStock: boolean };

// Type Aliases
type Product = {
  name: string;
  price: number;
  details: {
    weight: number;
    color: string;
  };
  inStock?: boolean; // optional properties, may or may not exist
};

const p1: Product = {
  name: "Phone",
  price: 500,
  details: { weight: 0.2, color: "silver" },
  inStock: true,
};
const p2: Product = {
  name: "Mouse",
  price: 20,
  details: { weight: 0.1, color: "white" },
};

function getProductLabel(product: Product): string {
  return `${product.name} - $${product.price} - Available: ${product.inStock}`;
}

console.log(getProductLabel(p1));

type User = {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  greet: () => string;
};

const user: User = {
  id: 42,
  username: "xeno88",
  email: "xeno88@email.com",
  isAdmin: true,
  greet(): string {
    return `Hello! ${this.username}`;
  },
};

console.log(user);

function getUserInfo(user: User): string {
  const role = user.isAdmin ? "admin" : "user";
  return `${user.username} ${role}`;
}

console.log(getUserInfo(user));

// Readonly properties
type Student = {
  readonly id: number;
  name: string;
  grade: number;
  nickname?: string;
};

const s1: Student = { id: 1, name: "Tom", grade: 15 };
const s2: Student = { id: 2, name: "Jerry", grade: 18, nickname: "J" };
console.log(s1);
console.log(s2);

// student.id = 2; // Error

type Order = {
  id: number;
  product: string;
  quantity: number;
};

const orders: Order[] = [
  { id: 1, product: "PS5", quantity: 2 },
  { id: 2, product: "Laptop", quantity: 3 },
];

type User2 = {
  name: string;
  role: "admin" | "user" | "guest";
};

const user1: User2 = {
  name: "bambi",
  role: "admin",
};

const user2: User2 = {
  name: "spark",
  role: "user",
};

const user3: User2 = {
  name: "jane",
  role: "guest",
};

console.log(user1);

// Blogpost

type BlogPost = {
  id: number;
  title: string;
  content: string;
  author: Author;
  status: "draft" | "published";
  comments: BlogComment[];
};

type Author = {
  name: string;
  email: string;
};

type BlogComment = {
  user: string;
  message: string;
};

const post: BlogPost = {
  id: 1,
  title: "Learning TypeScript",
  content: "It's awesome",
  author: {
    name: "Lenny",
    email: "lenny@email.com",
  },
  status: "published",
  comments: [
    { user: "Alice", message: "Great post!" },
    { user: "Bob", message: "Very helpful!" },
  ],
};

console.log(post);

// Interfaces
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Andy",
  age: 77,
};

console.log(person);
