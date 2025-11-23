// solutions.js
// Run with: node solutions.js
// This file contains answers for problems 1–12 with outputs and short comments.

// 1. Template Literals + Expressions
console.log("----- 1. Template Literals + Expressions -----");

// 1.a Print: "5 + 7 = 12" using template literal (calculate inside ${}).
console.log(`1.a -> ${`5 + 7 = ${5 + 7}`}`); // prints: 5 + 7 = 12

// 1.b Multi-line string (3 lines)
const multiline = `Line 1
Line 2
Line 3`;
console.log("1.b -> Multi-line string output:");
console.log(multiline);

// 1.c Given firstName and lastName, print full name
const firstName = "John";
const lastName = "Doe";
console.log(`1.c -> Full name: ${firstName} ${lastName}`);

console.log("\n");

// 2. Arrow Functions & this
console.log("----- 2. Arrow Functions & this -----");

// 2.a Convert to arrow function
const square = n => n * n; // one-liner arrow
console.log(`2.a -> square(5) = ${square(5)}`);

// 2.b Why below logs undefined:
const obj = {
  value: 50,
  test: () => console.log("2.b ->", this.value) // arrow uses outer 'this' (not obj)
};
console.log("2.b -> Reason: arrow functions do not have their own 'this'.");
// Demonstrate - this in Node at top-level is {} or undefined depending on strictness;
// calling obj.test() will not log obj.value, it will attempt to access outer 'this'.
obj.test(); // likely undefined

// 2.c Rewrite using normal function so printing works
const obj2 = {
  value: 50,
  test() { // shorthand method (normal function) — this binds to obj2
    console.log("2.c ->", this.value);
  }
};
obj2.test(); // prints 50

console.log("\n");

// 3. Rest, Spread & Copying Objects
console.log("----- 3. Rest, Spread & Copying Objects -----");

// 3.a Use spread to make a shallow copy
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log("3.a -> productCopy:", productCopy);

// 3.b Merge two objects using spread
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log("3.b -> merged:", merged);

// 3.c Function maxValue(...nums) returns largest
function maxValue(...nums) {
  if (nums.length === 0) return -Infinity;
  return nums.reduce((max, n) => (n > max ? n : max), nums[0]);
}
console.log("3.c -> maxValue(3, 7, 2, 9) =", maxValue(3, 7, 2, 9));

console.log("\n");

// 4. Destructuring & Optional Chaining
console.log("----- 4. Destructuring & Optional Chaining -----");

// 4.a Destructure to extract a and b
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log("4.a -> a:", a1, ", b:", b1);

// 4.b Destructure object to extract brand
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log("4.b -> brand:", brand);

// 4.c Safely access with optional chaining
const info = {};
// Accessing info.user?.name will yield undefined rather than throwing
console.log("4.c -> info.user?.name =", info.user?.name);

console.log("\n");

// 5. Scoping (let/var/const)
console.log("----- 5. Scoping (let/var/const) -----");

// 5.a What prints for var
for (var i = 0; i < 3; i++) {}
console.log("5.a -> var i after loop:", i); // prints 3

// 5.b What prints for let
try {
  for (let j = 0; j < 3; j++) {}
  console.log("5.b -> let j after loop:", j); // will throw ReferenceError
} catch (err) {
  console.log("5.b -> let j after loop: ReferenceError (j is not defined outside loop)");
}

// 5.c Why use const for values that should not be reassigned?
console.log("5.c -> const prevents reassignment to the variable binding. It's used to signal and enforce that the identifier should not be reassigned. (Object contents can still be mutated unless frozen.)");

console.log("\n");

// 6. Ternary Operator – Practice
console.log("----- 6. Ternary Operator – Practice -----");

// 6.a Convert to ternary
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(`6.a -> kmph=${kmph}, speed=${speed}`);

// 6.b Ternary Adult/Minor
let age = 20;
console.log("6.b ->", age >= 18 ? "Adult" : "Minor");

// 6.c Nested ternary Positive/Zero/Negative
function signLabel(n) {
  return n > 0 ? "Positive" : (n === 0 ? "Zero" : "Negative");
}
console.log("6.c -> signLabel(10):", signLabel(10));
console.log("6.c -> signLabel(0):", signLabel(0));
console.log("6.c -> signLabel(-5):", signLabel(-5));

console.log("\n");

// 7. Spread, Rest & Arrays
console.log("----- 7. Spread, Rest & Arrays -----");

// 7.a Add 4,5 to array using spread
const nums = [1, 2, 3];
const numsPlus = [...nums, 4, 5];
console.log("7.a ->", numsPlus);

// 7.b Combine arrays using spread
const arrA = ["x","y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log("7.b ->", combined);

// 7.c Function using rest: returns array of names
function printNames(...names) {
  return names;
}
console.log('7.c -> printNames("A","B","C") =', printNames("A","B","C"));

console.log("\n");

// 8. Object Destructuring & Shorthand
console.log("----- 8. Object Destructuring & Shorthand -----");

// 8.a Destructure user
const user = { id: 101, status: "active" };
const { id: userId, status } = user; // alias id -> userId
console.log("8.a ->", { userId, status });

// 8.b Convert to shorthand
const id = 101;
const role = "admin";
const userShorthand = { id, role }; // shorthand property names
console.log("8.b -> userShorthand:", userShorthand);

// 8.c Create object using shorthand and add method shorthand
const name_ = "Sam";
const age_ = 30;
const person = {
  name_, // shorthand
  age_,
  greet() { // method shorthand
    return `Hi, I'm ${this.name_} and I'm ${this.age_}`;
  }
};
console.log("8.c -> person.greet():", person.greet());

console.log("\n");

// 9. Template Literals (More Practice)
console.log("----- 9. Template Literals (More Practice) -----");

// 9.a Print today's date using new Date().toDateString()
console.log("9.a -> Today is:", new Date().toDateString());

// 9.b Template literal: Hello NAME, your score is SCORE/100
function scoreMessage(name, score) {
  return `Hello ${name}, your score is ${score}/100`;
}
console.log("9.b ->", scoreMessage("Alice", 87));

console.log("\n");

// 10. Arrow Function Shorthands
console.log("----- 10. Arrow Function Shorthands -----");

// 10.a One-line arrow function for addition
const add = (x, y) => x + y;
console.log("10.a -> add(4,5) =", add(4,5));

// 10.b Arrow function isAdult(age)
const isAdult = age => age >= 18;
console.log("10.b -> isAdult(20) =", isAdult(20));

// 10.c Arrow function double
const double = n => n * 2;
console.log("10.c -> double(6) =", double(6));

console.log("\n");

// 11. Spread Operator (Arrays & Objects)
console.log("----- 11. Spread Operator (Arrays & Objects) -----");

// 11.a Clone an array using spread
const original = [1,2,3];
const clone = [...original];
console.log("11.a -> clone:", clone);

// 11.b Add element 100 to beginning using spread
const with100 = [100, ...original];
console.log("11.b ->", with100);

// 11.c Merge two objects and override property
const objA = { a: 1, value: "old" };
const objB = { b: 2, value: "new" };
const mergedOverride = { ...objA, ...objB }; // value from objB overrides
console.log("11.c -> mergedOverride:", mergedOverride);

console.log("\n");

// 12. Optional Chaining (More Practice)
console.log("----- 12. Optional Chaining (More Practice) -----");

// 12.a Access user.address.city safely
const user1 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log("12.a -> user1.address.city:", user1.address?.city);

// 12.b Access user.job.title safely (should print undefined)
const user2 = { name: "Alice" };
console.log("12.b -> user2.job?.title:", user2.job?.title);

// 12.c Example where optional chaining prevents runtime error
const maybe = { deep: null };
// Without optional chaining: maybe.deep.prop -> TypeError
// With optional chaining:
console.log("12.c -> maybe.deep?.prop (safe):", maybe.deep?.prop); // undefined, no runtime error

console.log("\nAll done! End of file outputs.");
