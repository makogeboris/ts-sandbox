// Unions + Narrowing

let value: string | number;

// Narrowing = telling TypeScript what the type is at a specific moment
// typeof narrowing
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("narrow");
printValue(590);

function formatInput(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  throw new Error("Unexpected type");
}

console.log(formatInput(75));
console.log(formatInput("narrow"));
// console.log(formatInput([]))

function formatId(id: string | number): string {
  if (typeof id === "number") {
    return "ID: " + id * 2;
  }

  return "ID: " + id.toUpperCase();
}

console.log(formatId("flg789"));

// Narrowing Objects (in operator)
// The in operator can be less safe if properties could exist on both types:
type User1 = {
  name: string;
  role: "admin" | "user"; // ← role exists ONLY in User
};

type Guest = {
  name: string;
  visitReason: string; // ← visitReason exists ONLY in Guest
};

type Person1 = User1 | Guest;

function greet(person: Person1) {
  if ("role" in person) {
    // TypeScript knows: if 'role' exists, it MUST be User
    // Because Guest doesn't have a 'role' property
    console.log(`Welcome admin ${person.name}`);
    // person is now of type User in this block
  } else {
    // TypeScript knows: if 'role' doesn't exist, it MUST be Guest
    // Because User ALWAYS has a 'role' property
    console.log(`Welcome guest: ${person.visitReason}`);
    // person is now of type Guest in this block
  }
}

const u1: Person1 = { name: "Alice", role: "admin" };
const g1: Person1 = { name: "Charlie", visitReason: "tourism" };

greet(u1);
greet(g1);

// Discriminated Unions
type Admin = {
  role: "admin"; // ← discriminant property
  name: string;
  permissions: string[];
};

type RegularUser = {
  role: "user"; // ← discriminant property
  name: string;
  lastLogin: Date;
};

type Account = Admin | RegularUser;

function describeAccount(account: Account): string {
  if (account.role === "admin") {
    return `Admin ${account.name} has ${account.permissions.length} permissions`;
  } else {
    return `User ${account.name} last logged in on ${account.lastLogin.toDateString()}`;
  }
}

const acc1: Account = {
  name: "Rex",
  role: "admin",
  permissions: ["delete accounts", "assign roles", "create users"],
};
const acc2: Account = { name: "Jake", role: "user", lastLogin: new Date() };

console.log(describeAccount(acc1));
console.log(describeAccount(acc2));

type ApiResponse =
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; error: string };

function handleResponse(res: ApiResponse): string {
  if (res.status === "loading") {
    return "Loading...";
  }

  if (res.status === "success") {
    return `Received ${res.data.length} items`;
  }

  return `Error: ${res.error}`;
}

const res1: ApiResponse = {
  status: "loading",
};
const res2: ApiResponse = {
  status: "success",
  data: ["apple", "banana", "mango"],
};
const res3: ApiResponse = {
  status: "error",
  error: "Failed to fetch data",
};

console.log(handleResponse(res1));
console.log(handleResponse(res2));
console.log(handleResponse(res3));

// Custom Type Guards
function isString(value: unknown): value is string {
  // value is string = If this function returns true, then value is a string
  return typeof value === "string";
}

function print(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}

print("jackpot");

function isAdmin(account: Account): account is Admin {
  return account.role === "admin";
}

function describe(account: Account): string {
  if (isAdmin(account)) {
    return `Admin ${account.name}`;
  } else {
    return `User ${account.name}`;
  }
}

const admin1: Account = {
  name: "Alice",
  role: "admin",
  permissions: ["manage_users", "delete_posts", "view_reports"],
};
const user4: Account = {
  name: "Bob",
  role: "user",
  lastLogin: new Date("2026-03-20"),
};

console.log(isAdmin(admin1));
console.log(isAdmin(user4));

console.log(describe(admin1));
console.log(describe(user4));
