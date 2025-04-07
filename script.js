console.log("Hello World");
var name = "Jyothiswar";
let age = 20;
console.log(name);
console.log(age);
console.log(name + " age is " + age);
console.log(name + " is of datatype : " + typeof (name));
console.log(age + " is of datatype : " + typeof (age));


//VARIABLES AND DATA TYPES

// let age = 30;
age = 40;           //We can change the values in VARIABLE concept
console.log(age);

//------------------------------------------------------------------------------------------ //

let namee = "JYOTHISWAR";
let agee = "20";                         // They are accessible only within the block
console.log("Name is " + namee, "age is " + agee);

// ----------------------------------------------------------------------------------------- //

const pi = 3.14159;         //constant values which we cannot change

// ----------------------------------------------------------------------------------------- //

// Function Declaration...

function greet(name, age) {
  console.log(`Hello, ${name}! Your age is ${age}`);
}
greet('Jyothiswar', 20);

//Function Parameters...

function add(a, b, c) {
  return a + b + c;
}
let result = add(2, 3, 5);
console.log("The sum of the numbers is " + result);

// Function Expression...

let multiply = function (a, b) {
  return a * b;
}
let result1 = multiply(5, 4);
console.log("The multiplication of the given numbers is " + result1);

// Arrow Functions...

const square = (x) => x * x
let value = square(5);
console.log("The square value is " + value);

// Return statement Function...

function sayHello() {
  return 'Hello..!!';
}
let greeting = sayHello();
console.log(greeting);

// Function Scope...

function outerFunction() {
  let message = 'I am inside the Function';
  console.log(message);
}
message = 'Hello world!'; //If we doesn't decalare the message in the outer then it will generate Error
outerFunction();
console.log(message);

// Closure Functions...

function outer() {
  let message = 'Hello I am Jyothiswar';

  function inner() {
    console.log(message);
  }

  return inner;
}

let closure = outer();
closure();

// Function Callbacks...

function fetchData(callback) {
  // Simulate an asynchronous operation
  setTimeout(function () {
    let data = 'This is the data';
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData); // Output: This is the data (after a 2-second delay)

//Named and Anonymous Functions:

// Named function
function namedFunction() {
  console.log('I am named');
}

// Anonymous function assigned to a variable
const anonymousFunction = function () {
  console.log('I am anonymous');
};

namedFunction(); // Output: I am named
anonymousFunction(); // Output: I am anonymous

// Function Hoisting

hoistedFunction(); // Output: I am hoisted

function hoistedFunction() {
  console.log('I am hoisted');
}

//.....STRINGS.....
console.log("This is STRINS concept");   //Strings are immutable
let a = "JYOTHI";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a.length);

let real_name = "HARRY"
let friend = "ROHAN"

console.log(`His name is ${real_name} and His friend nname is ${friend}`);

let b = "Shivam"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 3));
console.log(b.slice(3));

console.log(b.replace("Sh", "66"));
console.log(b.concat(a));
console.log(b.concat(a, "Daddy", "Mom", "Sister"));

//.....ARRAYS.....

let arr = [1, 2, 4, 5, 7]

arr[0] = 66
console.log(arr, typeof arr);
console.log(arr.length);  //Array is Mutable
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);

console.log(arr.toString());
console.log(arr.join(" and "));

/*

a=[1,2,3,4,5,6]

[1, 2, 3, 4, 5, 6] (6)

a.pop()
6

a.push(100)
6  [1,2,3,4,5,100]

a.push(200)
7  [1,2,3,4,5,100,200]

a.push("jyothi")
8   [1,2,3,4,5,100,200,jyothi]

a.shift()
1   [2,3,4,5,100,200,jyothi]

a.unshift("hello")
7   [hello,2,3,4,5,100,200,jyothi]

delete a[6]
true    [hello,2,3,4,5,100,200,empty]

a.length
7   [hello,2,3,4,5,100,200,empty]

a[6]
undefine

*/

//.....CONCATINATE.....

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]

console.log(a1.concat(a2, a3))

//.....SORT.....

let a4 = [5, 4, 6, 2, 9, 1]
console.log(a4.sort())

//.....SPLICE.....

let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
console.log(numbers.splice(1, 2))
console.log(numbers)

let numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1.splice(1, 2, 100, 200, 300))
console.log(numbers1)

//.....SLICE.....

console.log("slice")
const num = [1, 2, 3, 4]
console.log(num.slice(1,))
console.log(num.slice(1, 3))

// .....FOR loop in javascript.....

let array = [10, 20, 30, 40, 50]

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element)
}

//.....FOR EACH loop in JAVASCRIPT.....

let array1 = [10, 20, 30, 40, 50]

array1.forEach((value, index, array1) => {
  console.log(value, index, array1)
});

//.....FOR IN loop in JAVASCRIPT.....

let obj = {
  a: 1,
  b: 2,
  c: 3
}
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element)
  }
}

//.....FOR OF loop in JAVASCRIPT.....

let array2 = [10, 20, 30, 40, 50, 60]
for (const element of array2) {
  console.log(element)
}

//.....MAPS in JAVASCRIPT.....

let arr1 = [100, 200, 300, 400, 500]
let newArr = arr1.map((element, index, array) => {
  return element ** 2;
})
console.log(newArr)


/*
let arr1=[100,200,300,400,500]
let newArr=[]

for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  newArr.push(element**2);
}
console.log("The new array is :"+newArr)

*/

//.....FILTER in JAVASCRIPT.....

let newArr1 = [1, 20, 30, 40, 5, 6]
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
}
console.log(newArr1.filter(greaterThanSeven));

//REDUCE METHOD in JAVASCRIPT

let arr3 = [10, 20, 30, 40, 50, 60]
const red = (a, b) => {
  return a * b;     //retrun a+b or  a/b etc...
}

console.log("The final result is :" + arr3.reduce(red))

//.....ARRAY FROM.....
console.log(Array.from("JYOTHISWAR"))




