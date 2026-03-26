// An interface is a way to define the shape of an object.
interface ProductInt {
  id: number;
  name: string;
  price: number;
}

const pInt1: ProductInt = {
  id: 1,
  name: "Laptop",
  price: 1200,
};

// const pInt2: ProductInt = {
//   id: 2,
//   name: "Phone",
// price missing
// };

// Optional properties
interface UserInt {
  id: number;
  name: string;
  age?: number;
}

const uInt1: UserInt = { id: 1, name: "Alice" };
const uInt2: UserInt = { id: 2, name: "Bob", age: 30 };

interface Config {
  readonly apiKey: string;
}

const config: Config = {
  apiKey: "238",
};

// config.apiKey = "456"; // Error

interface UserIntM {
  id: number;
  name: string;
  greet(): string;
}

const userIntM1: UserIntM = {
  id: 1,
  name: "Alice",
  greet() {
    return `Hello, ${this.name}`;
  },
};

// Extending interfaces
interface UserEx {
  id: number;
  name: string;
}

interface AdminEx extends UserEx {
  role: "admin";
}

const admin: AdminEx = {
  id: 1,
  name: "Alice",
  role: "admin",
};

// ch1
interface AccountInt {
  id: number;
  email: string;
  isActive: boolean;
}

const accInt1: AccountInt = {
  id: 11,
  email: "dex@email.com",
  isActive: true,
};

const accInt2: AccountInt = {
  id: 12,
  email: "xen@email.com",
  isActive: false,
};

const accounts: AccountInt[] = [accInt1, accInt2];
console.log(accounts);

// ch2
interface OrderInt {
  id: number;
  total: number;
  discount?: number;
  getFinalPrice(): number;
}

const ord1: OrderInt = {
  id: 5,
  total: 457,
  discount: 50,
  getFinalPrice() {
    if (this.discount !== undefined) {
      return this.total - this.discount;
    }
    return this.total;
  },
};

const ord2: OrderInt = {
  id: 6,
  total: 986,
  getFinalPrice() {
    return this.total;
  },
};

const allOrders: OrderInt[] = [ord1, ord2];
console.log(allOrders);

// Interface Merging
// Interface merging means: If you declare the same interface multiple times, TypeScript automatically combines them into one.
// Interface merging = "adding more fields later"
interface UserMerg {
  name: string;
}
interface UserMerg {
  age: number;
}
// ts merges into
interface UserMerg {
  name: string;
  age: number;
}

const userMer1: UserMerg = {
  name: "Alice",
  age: 25,
};

// Properties must be compatible
interface UserMerg {
  name: string;
}
// interface UserMerg {
//   name: number; // ❌ conflict
// }

// Main use case: Extending types from different places (like libraries or modules)
interface Request {
  user?: string;
}

// Somewhere else in app
interface Request {
  token?: string;
}

// Extending Interfaces
// Extending means: Creating a new interface based on another one

interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

// Employee automatically includes:
const emp: Employee = {
  name: "Alice",
  salary: 5000,
};
console.log(emp);

interface A {
  a: number;
}

interface B {
  b: string;
}

interface C extends A, B {
  c: boolean;
}

const obj: C = {
  a: 1,
  b: "hello",
  c: true,
};
console.log(obj);

// In real projects: Use extending (extends) most of the time
// Avoid merging unless: You're working with libraries, You need global augmentation

// Use interface when:
// You are modeling objects
// You expect extension
// You want clean structure

// Use type when:
// You need unions
// You need advanced types
// You’re doing transformations

// Interface + Functions + Generics

interface Add {
  (a: number, b: number): number;
}

const add1: Add = (x, y) => x + y;
console.log(add1(45, 67));

interface Formatter {
  (value: string): string;
}

const format: Formatter = (val) => val.toUpperCase();
console.log(format("avana"));

interface Inventory {
  [key: string]: number;
}

const items: Inventory = {
  apple: 10,
  banana: 5,
  orange: 8,
};
console.log(items);

interface UserScores {
  name: string;
  scores: {
    [subject: string]: number;
  };
}

const score1: UserScores = {
  name: "Alice",
  scores: {
    math: 90,
    english: 85,
  },
};
console.log(score1);

interface Settings {
  readonly appName: string;
  theme?: string;
  features: {
    [feature: string]: boolean;
  };
}

const settings: Settings = {
  appName: "MyApp",
  features: {
    darkMode: true,
    notifications: false,
  },
};
console.log(settings);

interface ApiCache {
  readonly [endpoint: string]: string;
}

const cache: ApiCache = {
  "/users": "user data",
  "/posts": "posts data",
};
console.log(cache);
