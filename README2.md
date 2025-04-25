# async await

- async function always returns a promise 

# JS topics
- Everything in js happens inside an Execution context 
- Execution context is like big box and it has two components in it
   - Memory component (variable environment)- here all variables and functions are stored in key and value pair 
   - code component (thread of execution) - it is being executed one line at a time 
- js is a synchronous , single threaded language 
- when function is getting invoked a brand new execution context is being created 
- we always have GEC(Global Execution Stack) in call stack 
- window and this is a global object which is created along with the global execution context (for browser) 
- window === this (true)	
- whenever an execution context is created lexical environment is also created
- lexical environment is local memory alnog with lexical environment of its parent
- lexical means in heirarchy 
- c is lexically present inside a
- function a(){
    var b = 10;
    c()
    function c(){

    }
 }
a()
console.log(b)
- Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- Variables (var, let, const):

var is hoisted and initialized as undefined.

let and const are hoisted but not initialized, leading to a "temporal dead zone" (TDZ) if accessed before declaration.

- Functions:

Function declarations are fully hoisted (you can use them before they appear in the code).

Function expressions (especially with const or let) are not hoisted the same way.

- sayHi(); // TypeError: sayHi is not a function
const sayHi = function () {
  console.log("Hi");
};

- console.log(y); // ReferenceError
let y = 10;

- console.log(x); // undefined
var x = 5;

- var x;
console.log(x); // undefined
x = 5;

- greet(); // Hello
function greet() {
  console.log("Hello");
}

-  undefined
- A variable is declared, but has not been assigned a value.
- JavaScript automatically assigns undefined to variables that are declared but not initialized.
- let a;
console.log(a); // undefined


- not defined
- The variable was never declared at all.
- Trying to access it will throw a ReferenceError.
- console.log(b); // ❌ ReferenceError: b is not defined

- scope chain 
- The scope chain is how JavaScript resolves variable names when you try to access them. If a variable isn’t found in the current scope, JavaScript goes up to the next outer scope — and keeps going up until it finds it or hits the global scope.
- It's literally a chain of scopes.

- Temporal Dead Zone (TDZ)
- TDZ is the time between when a variable is hoisted and when it's initialized.
In this "zone", trying to access the variable will throw a ReferenceError.
- This only applies to let and const — not var.
- console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;
- // a is hoisted here (TDZ starts)
let a;
// TDZ is active until here (initialization)
a = 10;
- console.log(b); // ❌ ReferenceError
const b = 20;
- console.log(c); // ✅ undefined (no error)
var c = 30;


- Block scope 
- Block scope means variables declared with let or const are only accessible inside the {} block they’re declared in.
- Applies to:
let
const
❌ Doesn't apply to:
var (it’s function-scoped, not block-scoped)
- {
  let x = 10;
  const y = 20;
  console.log(x); // ✅ 10
  console.log(y); // ✅ 20
}
console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError
- {
  var z = 30;
}
console.log(z); // ✅ 30


- Shadowing
- Shadowing happens when a variable in a local scope has the same name as one in an outer scope. The inner one "shadows" or hides the outer one in that scope.
- let a = "outer";
{
  let a = "inner"; // shadows outer 'a'
  console.log(a); // ✅ "inner"
}
console.log(a); // ✅ "outer"


- What is a Closure?
- a function with its lexical scope known as closure
- A closure is created when a function "remembers" its lexical scope, even after the outer function has finished executing.
- In simple terms:
- A function + its surrounding variables = a closure
- function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer(); // outer() runs and returns inner()
counter(); // 1
counter(); // 2
counter(); // 3


- What is Function Currying?
- Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking one argument at a time.

- Normal function:
function add(a, b) {
  return a + b;
}
add(2, 3); // 5

- Curried version:
function add(a) {
  return function(b) {
    return a + b;
  };
}
add(2)(3); // 5

- With Arrow Functions:
javascript
Copy
Edit
const add = a => b => a + b;
console.log(add(2)(3)); // 5

- function statement 
- function a(){
}

- function expression
- var b = function (){

}

- difference between function expression and function statement is hoisting 

- function declaration = function statement

- function without name is anonymous function 
- function (){

}
- anonymous function is used when we want to use function as a value

- named function expression
var b = function xyz(par1,par2){

} 
xyz(1,2)  // ReferenceError
- par1, par2 is parameter and 1,2 is used as an arguement

- first class function 
- the ability to use function as a value 
var b = function xyz(par1){
 clg(par1)
}
b(function (){}) 