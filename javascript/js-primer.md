# Introduction

What is programming ?
* Programming is about making computers do what you want.

What is computer program ?
A computer program is basically a series of instructions that tell your computer how to
perform a task.

JavaScript is a high level scripting language that enables you to create dynamically updating content, control multimedia and animate images on a web page(s).

* JavaScript is officially known as ECMAScript(language specification)
* JavaScript is interpreted and compiled at runtime by the JavaScript engines found in the web browsers.
* JavaScript has no concept of threads, its model of concurrency is completely based around events.
* JavaScript can be run google V8 JavaScript engine.
* Currently browser's supports ECMAScript 5.
* JavaScript can also used as server side language(Node.JS Environment).
* JavaScript enables the mixture of functional programming and Object Oriented Programming.

# Data Types

Data types are different kinds of information that can be stored in a variable, such as numbers, letter or even groups of other variables. In JavaScript, any variable can hold data of any type. That's why JavaScript is known as dynamically typed language.

Following are the data types:

* Number
* String
* Boolean
* null
* Object
* Undefined
* symbol(ES6)

### Implicit coercion
```javascript
typeof 0              // number
typeof true           // boolean
typeof 'Hello'        // string
typeof Math           // object
typeof null           // object  !!
typeof Symbol('Hi')   // symbol (New ES6)
Boolean(null)         // false
Boolean('hello')      // true 
Boolean('0')          // true 
Boolean(' ')          // true 
Boolean([])           // true 
Boolean(function(){}) // true
```
Truthy values: string,number," ",Empty arrays, objects and functions
Falsy values: "", 0, null, undefined, NaN, false.

### String & Number coercion

```javascript
1 + "2" = "12"
"" + 1 + 0 = "10"
"" - 1 + 0 = -1
"-9\n" + 5 = "-9\n5"
"-9\n" - 5 = -14
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
null + 1 = 1
undefined + 1 = NaN
```

# Variables
* JavaScript variables are used to store and manage data.
* JavaScript variables are case sensitive.
* String variables are treated typically as primitive variables. Primitive variables pass their value when they are copied leaving the original value unchanged.

### Rules and conventions for naming variables
* Variables may only contain letters, numbers, the dollar sign symbol, or the underscore. Any other character cannot be used in the name of a variable.
* Variables must also not begin with a number.
* Variables must not use words that have been reserved as JavaScript keywords.

# Primitve Types, Arrays, Objects and Functions Syntax of JavaScript

### charactertics of primitive values

* primitve values are compared by 'value'.
```js
> 3 === 3
true
> 'abc' === 'abc'
true
```
* primitve values are always immutable.
```js
> var str = 'abc';

> str.length = 1; // try to change property `length`
> str.length      // ⇒ no effect
3

> str.foo = 3; // try to create property `foo`
> str.foo      // ⇒ no effect, unknown property
undefined
```
### Charactertics of Object values

* compared by reference
```js
> {} === {}  // two different empty objects
false

> var obj1 = {};
> var obj2 = obj1;
> obj1 === obj2
true
```
* mutable by default
```js
> var obj = {};
> obj.foo = 123; // add property `foo`
> obj.foo
123
```

```javascript
//declaring and assigning a value to the variable data

var data = "Big Data";

//rules and conventions for naming variables in javascript

var no spaces = ' ';   // invalid variable declaration  because of spaces 
var 4squares = 4;    // invalid variable declaration  because variable should not start with digits
var big-data = 'bigData';    // invalid 
var i_am_awesome = 'If you say so';// valid but not good practice
var $spaces = 3;     // valid but not good practice
var bigData = 'Huge';     // valid and good practice to use camelcase 
var bigData2 = 'Huge2';    // valid but not good practice to use

//Syntax for Primitive types, Arrays, Objects, function and booleans

var id;                   // undefined variable
var userId   = 101;       // stores a number value
var userName = "Tom-101"; // stores a string value
var isActive = true;      // stores a boolean vaue
var val = null;           // stores a null value
var user     = {id: 101, name:"jason"  };                //stores an object
var users    = ['jason','tom','jerry','jane'];          // stores an array of user names
var task = function(){console.log("function works!");};// function expression

console.log(id);// undefined

console.log(userId);        // 101
console.log(typeof userId);//number

console.log(userName);        // Tom-101
console.log(typeof userName);//  string

console.log(isActive);       //true
console.log(typeof isActive);//boolean

console.log(user);        // {id: 101, name: "jason"}
console.log(typeof user);//  object

console.log(users);        // (4) ["jason", "tom", "jerry", "jane"]
console.log(typeof users);//  object

console.log(val);          // null
console.log(typeof val);  //object 

console.log(task());     //function works
console.log(typeof task);// function

console.log(typeof NaN); //number

var n=NaN;
if(isNaN(n))
console.log(n);//NaN

//Boolean

var isValue = true;
if(isValue)
console.log("it's true!");

console.log(Boolean("hello"));//true
console.log(Boolean(""));     //false
console.log(Boolean(" "));    //true
console.log(Boolean(6));      //true
console.log(Boolean(0));      //false
console.log(Boolean(undefined));//false
console.log(Boolean(null));    //false

var value = 100;
console.log(typeof !!value); //boolean
console.log(!!value);        //true

//Undefined and null 
var val = undefined;
console.log(typeof val);    //undefined

console.log(undefined == null)//true

console.log(undefined === null);//false

// instanceOf
function song() {};
var rock = new Song();
rock instanceOf Song; // true

```
 
 # Functions

## Declaring Functions
```javascript
function worker(){
	console.log('Function worker works!');
};
worker();// Function worker works!

```
## Arguments
```javascript
//function syntax for single argument

function worker(name){
	console.log('worker' + name + 'works!');
};
worker('robin');// worker robin works!

//function syntax for multiple arguments

function calcTotalPrice(quantity, price){
	console.log('Total price: '+ (quantity * price));
};

calcTotalPrice(5, 800);//Total price: 4000


function calcTotalPrice(quantity, price, currency) {
console.log(currency);
};

calcTotalPrice(5, 800);//undefined

```

## passing multiple named arguments

```javascript
var word = "hello";
var list = ["dog", "cat", "bird"];

greeter(word, list); // arguments
// "hello dog"
// "hello cat"
// "hello bird"

function greeter(str, arr) { // parameters
  var counter;
  for (counter = 0; counter < arr.length; counter++) {
    console.log(str + " " + arr[counter]);
  }
}
```
## Functions can call functions

```javascript
console.log(titleCase("hello world."));
// "Hello World."

function titleCase(str) {
  var strArray = str.split(" ");
  var counter;
  for (counter = 0; counter < strArray.length; counter++) {
    strArray[counter] = capitalize(strArray[counter]);
  }
  return strArray.join(" ");
}

function capitalize(str) {
  var result = [];
  result[0] = str.charAt(0).toUpperCase();
  result[1] = str.substring(1); 
  return (result.join(""));
}
```
## Special variable arguments
```js
> function f() { return arguments }
> var args = f('a', 'b', 'c');
> args.length
3
> args[0]  // read element at index 0
'a'
```
## Returning Values
```javascript
function calcTotalPrice(quantity, price) {
	return quantity * price;
};
var totalPrice= calcTotalPrice(5, 800);

console.log(totalPrice);//Total price: 4000
```

```javascript
function calcTotalPrice(quantity, price) {
	return quantity * price;
};
var totalPrice= calcTotalPrice(2, 800);

console.log(totalPrice);//1600
totalPrice= calcTotalPrice(3, 800);
console.log(totalPrice);//2400

function getVal(){
//nothing returned
};

var val = getVal();
console.log(val); // undefined

```

## Function Expressions
```javascript
var task = function(){
	console.log("function works!");
};// function expression

task();//function works
```

# Conditionals

## if and Switch statements
```javascript
var total = 99.99;
var freeShipping= false;
if(total >= 50.00)
freeShipping= true;
console.log(freeShipping);// true
```
```javascript
var total = 99.99;
var freeShipping= false;
if(total >= 100.00)
freeShipping= true;
console.log(freeShipping);//false
```
```javascript
var total = 99.99;
var freeShipping;
var savings;
if(total >= 100.00) {
freeShipping= true;
savings = 29.99;
}
else{
freeShipping= false;
savings = 0;
}
console.log(savings);// 0
```
```javascript
var orderType= 'business';
var shipMethod;
switch (orderType) {
case 'business':
shipMethod= 'FedEx';
break;
case 'personal':
shipMethod= 'UPS Ground';
break;
default:
shipMethod= 'USPS';
}
console.log(shipMethod);// FedEx
```
```javascript
var orderType= 'unknown';
var shipMethod;
switch (orderType) {
case 'business':
case 'personal':
shipMethod= 'UPS Ground';
break;
default:
shipMethod= 'USPS';
}
console.log(shipMethod);//USPS
```
```javascript
var orderTotal= 99.99;
var discount;
switch(true) {
case orderTotal>= 50 && orderTotal< 75:
discount = 10;
break;
case orderTotal>= 75 && orderTotal< 100:
discount = 20;
break;
case orderTotal>= 100:
discount = 30;
break;
default:
discount = 0;
}
console.log(discount);// 20
```
## while and do...while statements
```javascript
var lineItemCount= 3;
var currentItem= 0;
while(currentItem < lineItemCount) {
console.log("item: "+ currentItem);
currentItem++;
}//item:0 item:1 item:2
```
```javascript
var lineItemCount= 3;
var currentItem= 0;
while(currentItem< lineItemCount)
console.log("item: "+ currentItem++);//item:0 item:1 item:2
```
```javascript
var lineItemCount= 3;
var currentItem= 0;
do {
console.log("item: "+ currentItem);
currentItem++;
} while(currentItem< lineItemCount);//item:0 item:1 item:2
```
## for and for...in
```javascript
var lineItemCount= 3;
for(var i = 0; i < lineItemCount; i++)
console.log(i); //0 1 2
```
```javascript
var lineItemCount= 5;
for(var i = 0; i < lineItemCount; i++) {
console.log(i);
if(i == 1)
break;
}// 0 1
```
```javascript
var lineItemCount= 5;
for(var i = 0; i < lineItemCount; i++) {
if(i == 1)
continue;
console.log(i);
}
```
```javascript
var lineItemCount= 5;
outerLoop:
for(var i = 0; i < lineItemCount; i++) {
for(var j = 0; j < 3; j++) {
if(j == 1)
continue outerLoop;
}
console.log(i);
}// (nothing)
```
```javascript
var lineItem= {
	product: 'Widget 1',
	quantity: 4,
	price: 9.50
};
for(var field in lineItem)
console.log(field);// product quantity price
```
```javascript
var lineItem= {
	product: "Widget 1",
	quantity: 4,
	price: 9.50
};
for(var field in lineItem)
console.log(field + " : " + lineItem[field]);//product : Widget 1 quantity : 4 price : 9.50
```
# String Methods and properties

```javascript
var song = "Never Give Up";

console.log(song.length);
//13

console.log(song.toUpperCase());
//NEVER GIVE UP

console.log(song.toLowerCase());
//never give up

console.log(song.charAt(0));
//"N"

console.log(song.indexOf("Up"));
//10

console.log(song);
//Never Give Up

var font = '    Times New Roman     ';
console.log('[' + font.trim() + ']');//[Times New Roman]

var font = '    Times New Roman     ';
font.trim()
console.log('[' + font + ']');//['      Times New Roman     ']
```

# String search methods
* slice - extracts a section of a string and returns it as a new string.
```javascript
var sentence = "A sentence is a string.",
    str = "Fresh ideas, better life",
    str1 = str.slice(1,);
 
console.log(sentence.replace("sentence", "word"));
// "A word is a string."

console.log(sentence.substring(2, 10));
// "sentence"

console.log(sentence.substr(2, 8));
// "sentence"

console.log(sentence.substring(2));
// "sentence is a string."

console.log(sentence.substr(2));
// "sentence is a string."

console.log(sentence);
// "A sentence is a string."
```

`replace` searches for a word in a string and replaces it with another word.

`substring` takes a part of the string starting from the provided index. You can also pass a second argument to mark the ending index. If it is not provided, `substring` takes any characters from the start index till the end of the string.

These methods do not make any changes to the original variable. All they do is make a copy of the contents, and then perform manipulations in that copy, leaving the original untouched.

# Closure

Each function stays connected to the variables of the functions that surround it, even after it leaves the scope in which it was created. For example:
```js
function createIncrementor(start) {
    return function () {  // (1)
        start++;
        return start;
    }
}

> var inc = createIncrementor(5);
> inc()
6
> inc()
7
> inc()
8
```

# Immediately Invoked Function Expression

```js
(function () {  // open IIFE
    var tmp = ...;  // not a global variable
}());  // close IIFE
```

# Objects and Constructors

```js
'use strict';
var jane = {
    name: 'Jane',

    describe: function () {
        return 'Person named '+this.name;
    }
};

//'in' operator checks whether property exits or not
> 'newProperty' in jane
true
> 'foo' in jane
false

//If you read a property that does not exist, you get the value undefined.
> jane.newProperty !== undefined
true
> jane.foo !== undefined
false

//The delete operator removes a property:
> delete jane.newProperty
true
> 'newProperty' in jane
false
```
