// A class is a blueprint for creating objects with both data AND behavior.

class UserCl {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
  }
}

const userCl1 = new UserCl("Pieter", 45);

console.log(userCl1.name);
console.log(userCl1.greet());

// Shorthand Constructor

class UserShort {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
  }
}

// ch1
class ProductCl {
  constructor(
    public title: string,
    public price: number,
  ) {}

  getPriceWithTax(tax: number): number {
    const taxAmount = this.price * tax;
    return taxAmount + this.price;
  }
}

const prodCl1 = new ProductCl("Laptop", 1000);

console.log(prodCl1.getPriceWithTax(0.2));
console.log(prodCl1.title);

// Access Modifiers
// `public`    accessible everywhere
// `private`   only inside class
// `protected` inside class + subclasses

class BankAccount {
  constructor(
    public owner: string,
    private balance: number,
  ) {}

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount("Alice", 1000);
acc.deposit(500);

console.log(acc.getBalance());
// console.log(acc.balance); // ERROR (private)

// ch2
class AccountCl {
  constructor(
    public owner: string,
    private balance: number,
  ) {}

  deposit(amount: number) {
    if (amount <= 0) {
      console.log("Invalid deposit amount");
      return;
    }

    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }

    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const accCl1 = new AccountCl("Bob", 500);
accCl1.deposit(200);
accCl1.withdraw(100);

console.log(accCl1.getBalance());

// Readonly Properties

class Car {
  constructor(
    public readonly brand: string,
    public speed: number,
  ) {}
}

const car = new Car("Ford", 120);
car.speed = 150;
// car.brand = 'Honda' // ERROR

// ch3
class OrderCl {
  constructor(
    public readonly id: string,
    public amount: number,
  ) {}

  updateAmount(newAmount: number): void {
    if (newAmount < 0) {
      console.log("Invalid amount");
      return;
    }

    this.amount = newAmount;
  }
}

const order = new OrderCl("ORDER123", 300);
order.updateAmount(500);

console.log(order.amount);
// order.id = 'NEW' // ERROR

// GETTER
// A getter lets you control how a value is read.
class Rectangle {
  //   constructor(
  //     public width: number,
  //     public height: number,
  //   ) {}

  constructor(
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive");
    }
  }

  get area(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(12, 5);

console.log(rect.area); // (not rect.area())

// SETTER
// A setter lets you control how a value is updated.
class UserSet {
  private _password: string = "";

  set password(value: string) {
    if (value.length < 6) {
      console.log("Password too short");
      return;
    }

    this._password = value;
  }
}

const userSet1 = new UserSet();

userSet1.password = "123"; // rejected
userSet1.password = "secure123"; // accepted

class UserGS {
  private _password: string = "";

  set password(value: string) {
    if (value.length < 6) {
      console.log("Password too short");
      return;
    }

    this._password = value;
  }

  get password(): string {
    return this._password ? "******" : "";
  }

  checkPassword(input: string): boolean {
    return input === this._password;
  }
}

const userGS = new UserGS();

userGS.password = "secure123";

console.log(userGS.password);
console.log(userGS.checkPassword("secure123"));

// STATIC
// A static property or method belongs to the class itself, not to instances.
// use static when:
// Logic is independent of object state
// You don’t need this (instance)
// It’s more like a tool/helper

class MathUtils {
  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtils.add(55, 45));

const m = new MathUtils();
// m.add(2, 3); // ERROR

// Inheritance (Reusing & Extending behavior)
// Inheritance lets one class reuse and extend another.

class Animal {
  constructor(public name: string) {}

  makeSound(): string {
    return "Some sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

const dog = new Dog("Rex");

console.log(dog.name); // (inherited)
console.log(dog.makeSound()); // (overridden)

// Using `super`
// super refers to the parent class (the class you extended).

// Uses of super
// 1. Calling the Parent Constructor
class Dog2 extends Animal {
  constructor(
    name: string,
    public breed: string,
  ) {
    super(name); // calls Animal constructor
  }
}

const dog2 = new Dog2("Rex", "Labrador");

console.log(dog2.name);
console.log(dog2.breed);

// If a child class has a constructor, it MUST call super() before using this.

// WRONG
// class Dog extends Animal {
//   constructor(name: string) {
//     this.name = name; // ❌ ERROR
//     super(name);
//   }
// }

// CORRECT
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name); // ✅ FIRST
//     this.name = name;
//   }
// }

// 2. super.method() — Calling Parent Method
// Sometimes you don’t want to completely replace behavior.
// You want to: reuse + extend

class Dog3 extends Animal {
  makeSound(): string {
    return super.makeSound() + " + Bark";
  }
}

const dog3 = new Dog3("Roxy");
console.log(dog3.makeSound());

class A {
  greet() {
    return "Hello";
  }
}

class B extends A {
  greet() {
    return super.greet() + " World";
  }
}

const b1 = new B();
console.log(b1.greet());

// Abstract Classes
// An abstract class is a class that:
// Cannot be instantiated
// Is meant to be extended
// Can define rules (contracts) for child
// Key Idea: “Every subclass MUST implement this method”

abstract class AnimalAbs {
  constructor(public name: string) {}

  abstract makeSound(): string; // no implementation

  move(): string {
    return `${this.name} is moving`;
  }
}

// const animalA = new Animal("Test"); // ERROR

// Child MUST implement abstract method
class Dog4 extends AnimalAbs {
  makeSound(): string {
    return "Bark";
  }
}

const dogAbs = new Dog4("Rex");

console.log(dogAbs.makeSound());
console.log(dogAbs.move());

// ch8
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rect extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const c1 = new Circle(10);
const r = new Rect(5, 4);

console.log(c1.getArea()); //
console.log(r.getArea()); //

// Polymorphism = one interface, multiple behaviors
// You can treat different objects the same way, but they behave differently internally.

abstract class AnimalPoly {
  constructor(public name: string) {}

  abstract makeSound(): string;
}

class Dog5 extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

const animals: Animal[] = [new Dog("Rex"), new Cat("Milo")];

animals.forEach((animal) => {
  console.log(animal.makeSound());
});

abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCard extends Payment {
  pay(amount: number) {
    console.log("Paid with card:", amount);
  }
}

class PayPal extends Payment {
  pay(amount: number) {
    console.log("Paid with PayPal:", amount);
  }
}

const payments: Payment[] = [new CreditCard(), new PayPal()];

payments.forEach((p) => p.pay(100));
