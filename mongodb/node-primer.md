### Node.JS

* Node is an evented and non-blocking platform for building scalable network applications using javascript on the server side.
* Uses google's V8 JavaScript Engine.
* Uses single threaded and non-blocking I/O model that makes it lightweight and efficient.
* libuv is the native library that provides fast, cross platform, non-blocking I/O.
* libuv is a c++ open source project that gives node access to the operating systems underlying file systems.
* libuv gives access to network system and it also handles some aspect of concurrency as well.
* Node comes with a debugger and a dependency manager

### Node.js core modules

* File system library(fs path)
* TCP clients & servers(net)
* HTTP (http & https)
* crypto
* domain name resolution(dns)
* Assertion library(assert)
* operating system

### Why Node.JS

* Speed,Simplicity,Scalable and Performance.
* Can build scalable network applications by JavaScript on the server side.
* Achieve Lightweight,modular, fast web applications.
* Build,write (Unit,Integration) tests,deploy new features immediately.


### What can we build 

* Websocket Server
* Fast file upload client
* Ad server
* Any Real-Time Data Apps
* desktop applications 
* command line tools
* Mobile and IoT

### Web Application built on 

* PayPal
* Netflix
* LinkedIn
* Yahoo
* Mozilla
* Uber
* GoDaddy


### What is javascript 

* A single threaded non-blocking asynchronous concurrent language.
* It has a call stack  an event loop,a callback queue some other api's and stuff
* the call stack one thread == one call stack == one thing at a time

### Why Javascript

* Single Threaded - code execution is linear code that is running cannot be interrupted by something else going on in the program.
* JavaScript execution in Node.js is single threaded, so concurrency refers to the event loop's capacity to execute JavaScript callback functions after completing other work.
* Concurrency is completely based on events

### What is a Network Application

An application running on one host and provides a communication to another application running on different host.

### What is Web Application

An application program that is stored on a remote server & delivered over the internet through browser interface.

### The Basics of thread

* process - A process is an instance of a computer program that has been executed within a single process.
* single process can have multiple things called threads.

### I/O

* "I/O" refers primarily to interaction with the system's disk and network supported by libuv.
* libuv is a multi-platform support library with a focus on asynchronous I/O.

### Blocking

* Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations. 
* Native modules may also have blocking methods.

Eg: Read File from file system, set equal to "contents"
    print contents
    Do something else

```javascript
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
console.log('Do something else');
```

### Non-Blocking

* All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions. 
*  Some methods also have blocking counterparts, which have names that end with Sync.

Eg: Read file from filesystem
    Whenever you are complete, print the contents
    Do something else

```javascript
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Do something else');
```
### Stack

* An  Ordered  data structure
* Keeps track of function invocations
* Part of the javascript runtime(you dont have access to it directly)

### How your code changes the stack

* When a function is invoked, the details of the invocation are saved to the top of the stack(Pushed to the top)
* Whenever a function returns, the information about the invocation is taken off the top of the stack(popped off of the top)

### Heap

* An area in memory where your data is stored.

### Queue

* An ordered list of functions waiting to be placed on the stack.
* Functions in the queue are processed on a first in, first out basis[FIFO]

### Event Loop

* The functionality in the javascript runtime that checks the queue when the stack is empty.
* If the stack is empty, the front of the queue is the placed in stack.

### Event Loop implementation

* 3 checks
  * Any pending setTimeout, setInterval, setImmediate
  * Any pending OS tasks? (Like server listening to port)
  * Any pending long running operations ? (like fs module)

### Using Modules

* At its core, CommonJS lets you include code from one file in another
* There are three major components to this module system: requiring built-in modules, requiring third-party modules, and making your own modules.

### Requiring built in modules

* Node has a number of built-in modules, ranging from filesystem access in a module called fs to utility functions in a built-in module called util.
* Node’s module system makes use of a global function called require and a global object called module.exports. The two make for a straightforward module system.
* You can use npm to install third-party packages from the npm registry.
* Node.js has evented I/O. This means that when an event happens (such as an incoming web request), a function (or set of functions) is called.
* Node has a built-in module called http. It is useful for building web applications.

```javascript
var url = require('url')
var parsedURL = url.parse("http://www.google.com/profile?name=larry")

console.log(parsedURL.protocol)
console.log(parsedURL.host)
console.log(parsedURL.query)
```

### Reading file from disk
```javascript
var fs = require('fs')
var options = {encoding: 'UTF-8'}
fs.readFile("myfile.txt", options, function(err,data){
    if (err) {
        console.error("Error reading file")
        return
    }
console.log(data.match(/x/gi).length + " letter X's")
})
```
### Creating a web server using HTTP module
```javascript
var http = require('http')
function requestHandler(req, res) {
    console.log("In comes the request to server" + req.url)
    res.end('Hello world')
}
var server = http.createServer(requestHandler)
server.listen(3000)
```

### Parsing the request URL with a request handler function
```javascript
function requestHandler(req, res) {
  if (req.url === "/") {
    res.end("Welcome to the homepage!");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page!");
  } else {
    res.end("Error! File not found.");

  }
}
```
### What is a callback ?
* A callback is a function that is passed to another function as a parameter and then invoked by that other function.

### Advantages of callbacks
* code reuse with callbacks and also they are used to avoid code duplication.

#### Syntax:
```javascript
// callback with function declarations
function callback() {
  console.log("Callback's are awesome");
}
function higherOrder(fn) {
  console.log("about to call callback");
  fn();
  console.log("callback has been invoked.")
  }
higherOrder(callback);

// callback with parameters
function action(v){
  console.log(v);
}
function execute(value, callback) {
  callback(value);
}
execute("Hello", action)
```
#### Alternate Syntax
```javascript
// callback with anonymous functions
function greet(name, formatter) {
  return "Hello", + formatter(name);
}
greet("Jane", function(name) {
  return name.toUpperCase();
});
greet("Tim", function(name) {
  return name + "!!!";
})

//
var callback = function(err, contents) {
  console.log(contents);
}
fs.readFile('/etc/hosts', callback);
fs.readFile('/etc/inetc', callback);
```
### What is callback hell ?
* Nested callbacks 

### What are streams ?
* Streams can be readable(req), writeable(res) or both