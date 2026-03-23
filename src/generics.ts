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
