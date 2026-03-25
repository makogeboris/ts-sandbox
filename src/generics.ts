// Generics let us say: “I don’t know the type yet — but I want to preserve it.”
// T = “some type (decided later)”
function identity<T>(value: T): T {
  return value;
}

const a = identity(5);
const b = identity("hello");
const c = identity(true);

console.log(a);
console.log(b);
console.log(c);
// TypeScript infers T automatically.

// Generics are like type variables
function wrap<T>(value: T): { data: T } {
  return { data: value };
}

// If you pass a string → T = string
// If you pass a number → T = number

// Multiple generics
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const result = pair("age", 25);
console.log(result); // type: [string, number]

// ch1
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const nums = [1, 2, 3];
const strings = ["a", "b", "c"];

console.log(firstElement(nums));
console.log(firstElement(strings));

// ch2
function wrapInArray<T>(val: T): T[] {
  return [val];
}

console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray(true));

// ch3
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("hello"));
console.log(getLength([1, 2, 3]));

// keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user0 = {
  name: "Rogers",
  age: 25,
};

const name0 = getProperty(user0, "name");
const age0 = getProperty(user0, "age");
const value0 = getProperty({ id: 1, active: true }, "active");
// getProperty(user, "email"); // error

// Mapped Types
type User0 = {
  name: string;
  age: number;
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type OptionalUser = Optional<User0>;

const useri: OptionalUser = {};
const userj: OptionalUser = { name: "Boris" };
const userk: OptionalUser = { age: 25 };
const userl: OptionalUser = { name: "Boris", age: 25 };

const usera: Optional<User0> = {};
usera.name = "Boris";
console.log(usera);

console.log(useri, userj, userk, userl);

type Readonly0<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyUser = Readonly0<User0>;

const userx: ReadonlyUser = {
  name: "Boris",
  age: 25,
};

// Error: Cannot assign to 'name' because it is a read-only property.
// userx.name = "John";
// userx.age = 30;

// Utility types

// Partial<T> = “I may update some fields, not all”
type UserPartial = {
  id: number;
  name: string;
  age: number;
};

// type UpdateUser = Partial<UserPartial>;

// Manual version
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

const updated1: UpdateUser = {
  name: "Cupid",
};

const update2: UpdateUser = {
  // age: 21,
};

const update3: UpdateUser = {};

// Required = Makes all properties required
// Required<T> = “No shortcuts — everything must be present”
type UserRequired = {
  id: number;
  name?: string;
};

type FullUser = Required<UserRequired>;

// manual version
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};
// -? removes optional

const userReq1: FullUser = {
  id: 1,
  name: "Alice",
};

// Error
// const userReq2: FullUser = {
//   id: 2,
// };

// Readonly<T> - Makes all properties immutable
// Readonly<T> = “This data is locked”
type UserReadonly = {
  id: number;
  name: string;
};

type ReadOnlyUser = Readonly<UserReadonly>;

// Manual version
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

const userReadOnly: ReadOnlyUser = {
  id: 1,
  name: "Alice",
};

// userReadOnly.name = "Bob"; // Error

// Pick<T, K> keep ONLY some properties
// Pick → select fields for UI / API response
type UserSpecific = {
  id: number;
  name: string;
  age: number;
};

type NameOnly = Pick<UserSpecific, "name">;

const nameonly: NameOnly = {
  name: "Andy",
};
console.log(nameonly);

// Manual version
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Result = MyPick<UserSpecific, "id" | "name">;

// Omit<T, K>
// Omit → remove sensitive data (price, password, etc.)
// Omit = REMOVE these keys

type PublicUser = Omit<UserSpecific, "id">;

// Manual version
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const publicUser: PublicUser = {
  name: "Jenna",
  age: 22,
};

// const wrong: PublicUser = {
//   price: 500, // removed
// };

// tsk 1
type ProductUtil = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

type UpdateProduct = Partial<ProductUtil>;

const prod1: UpdateProduct = {
  id: 11,
  inStock: true,
};
prod1.name = "axe";

// tsk 2
type LockedProduct = Readonly<ProductUtil>;

const prod2: LockedProduct = {
  id: 12,
  name: "arrow",
  price: 678,
  inStock: false,
};

// tsk 3
type SafeProduct = Required<Readonly<ProductUtil>>;

const prod3: SafeProduct = {
  id: 13,
  name: "bow",
  price: 987,
  inStock: true,
};

// prod3.inStock = false; // error

// tsk 4

type UserInfo = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  createdAt: Date;
};

type PubUser = Omit<UserInfo, "password">;

type AdminUser = Pick<UserInfo, "id" | "name" | "role">;

type CreateUser = Omit<UserInfo, "id" | "createdAt">;

type UpdateUser = Partial<CreateUser>;

type UserRolesMap = Record<string, UserInfo["role"]>;
