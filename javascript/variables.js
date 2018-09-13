// Rules and conventions for naming variables

var no spaces = ' ';   // invalid variable declaration  because of spaces 
var 4squares = 4;    // invalid variable declaration  because variable should not start with digits
var big-data = 'bigData';    // invalid 
var i_am_awesome = 'If you say so';// valid but not good practice
var $spaces = 3;     // valid but not good practice
var bigData = 'Huge';     // valid and good practice to use camelcase 
var bigData2 = 'Huge2';    // valid but not good practice to use

// Storing different data values in variables

var id;                   // undefined variable
var userId = 101;       // stores a number value
var userName = "Tom-101"; // stores a string value
var isActive = true;      // stores a boolean vaue
var val = null;           // stores a null value
var user = { id: 101, name: "jason" };                //stores an object
var users = ['jason', 'tom', 'jerry', 'jane'];          // stores an array of user names
var task = function () { console.log("function works!"); };// function expression

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

var n = NaN;
if (isNaN(n))
    console.log(n);//NaN

// Type Boolean 

var isValue = true;
if (isValue)
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

// Undefined and null values

var val = undefined;
console.log(typeof val);    //undefined

console.log(undefined == null)//true

console.log(undefined === null);//false