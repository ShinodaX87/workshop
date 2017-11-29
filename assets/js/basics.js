// Javascript Core
// ES 5/6

/*
  multiline comments
  Lorem ipsum dolor sit ...
 */

/**
 * JavaDoc compatible comments
 */

/* global console, window, document */
/**
 * a simple javascript program
 *
 * @package javascript basics
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/27
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

// variables and types

// primitive value types
// call by value!
let a = 42;       // integer => 64bit
console.log(typeof(a));
let b = 3.14152;  // float => 64bit
console.log(typeof(b));

let c = false;     // boolean => 1bit
console.log(typeof(c));

let d = "hello world";
let e = 'hello world';
console.log(typeof(e)); // string => utf-16 character

a = 'a new value';
console.log(typeof(a));

// ES5
let f=5;       // function scope


// ES6-8
// "let is the new var"
let g = 'new'; // control scope
const A_CONSTANT = "unchangeable";

// A_CONSTANT = "yes, it's changeable!"

// other languages
// int log () {
//   int a = 42;
//   return anIntValue;
// }

log();

// Javascript functions
function log () {
  // function scoped values
  let a = 42;
  let b;

// control scoped value i
  for (let i=0; i<10;i++) {
    b = 108;
    console.log(i);
  }

  // console.log(i);

  if (a === 42) {
    a = 43;
    return 'is nice';
  } else {
    return 'isn\'t nice';
  }

  return false;
}

// function call
log();



console.log(typeof(log));
// data types and function (complex value types)
// call by reference!
// arrays
let array = [1, 2, 3];
console.log(typeof(array));

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

for (let i=0; i<array.length; i+=1) {
  console.log(array[i]);
}

// objects
// JavasScript Object Notation - JSON
var object = {
  hans : 1,
  peter : 2, key3 : 3,
  "key 4" : "value" };
console.log(typeof(object));

for (let key in object) {
  console.log(key);
  console.log(object[key]);
}

console.log(object.key1);
console.log(object["key 4"]);

// common JSON
var object = { "key1" : 1, "key2" : 2, "key3" : 3, "key 4" : "value" };




// Javascript types
// boolean
// number
// string
// array (object)
// object
// function
// typeof()

let flag = true;
// value comparison
if (flag == true && typeof(flag) == 'boolean') {}

// type AND value comparison
if (flag === true) {}


1 == true == '1';

// historic

let text = new String();
let num  = new Number();
let bool  = new Boolean();

console.log(typeof(text));


// function objects
// function fn () {}
let fn = function (arg) {
  arg = 'something';
  console.log(arg);
};

let h = 'hello world';

fn(h);
console.log(fn);



fn = function (obj) {
  obj = null;
  console.log(obj);
};

let globalObject = { hans : "Peter"};
fn(globalObject);









//
