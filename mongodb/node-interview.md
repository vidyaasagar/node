### What are the reasons for the popularity of nodejs ?
* It uses the javascript as main language to build web applications.
* Light Weight
* It is easy to maintain and modify.
* It uses non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.

### What is Event Driven programming language ?
* Instead of waiting for response before moving on, javascript will keep executing while listening for other events.

### What is main advantages of nodejs ?
* Allow the developers to use javascript for the backend.
* The Node Package Manager.
* Speed and Efficiency - V8 engine compiles js directly into native machine code and improves the speed.
* Concurrent Request Handling - Handles the multiple concurrent connections by operating on a single 'thread',performing I/O in an 'asynchronous' 'non-blocking' manner.
* Nodejs or IOT

### What are the type of applications that can be build on nodejs ?
* Websocket Server
* Fast file upload client
* Ad server
* Any Real-Time Data Apps
* desktop applications 
* command line tools
* Mobile and IoT

### Why is nodejs is based on single threaded architecture ?
* Nodejs is a javascript runtime engine that is built with V8 chrome engine which is an event driven non blocking I/O model that makes it light weight and efficient.
* The design choice behind choosing the single threaded architecture to optimize the throughput and scalability of web applications.

### What are different types of api's available in nodejs ?
* Synchronous API's - blocking functions they wait for the response to come back.
* Asynchronous API's - non blocking functions that keep on processing in the background.

### Can we run Node.js on windows environment ?
### What is event loop in nodejs ?
* Functionality in javascript runtime that checks the queue when the stack is empty.
* If the stack is empty, the front of the queue is placed on the stack.

### What are the disadvantages of nodejs ?
* Any CPU intensive computation will block Node.js responsiveness, so a threaded platform is a better approach. 
* SERVER-SIDE WEB APPLICATION WITH A RELATIONAL DATABASE BEHIND
* Unstable API

### How can we handle blocking I/O operations in nodejs ?
* By Using asynchronous callbacks or events

### What is the difference between asynchronous and non blocking ?
* asynchronous calls usually involve a callback or an event, to signal that the response is available
*  non-blocking the call returns with whatever is available and the caller might have to try again to get the rest of the data.

### What is difference between nodejs and ajax ?
* ajax is a client side technology, often used for updating the contents of the page without refreshing it
* Node.js is Server Side JavaScript, used for developing server software.

### What is the difference between nodejs and angularjs ?
* Angularjs is a client side javascript framework is building single page web applications.
* Node.js is Server Side JavaScript, used for developing server software.

### How will you import external libraries in nodejs ?
* var http = require(‘http’);

### what happens if we call require() method to load same module multiple times in Node.js ?
* Modules are cached after the first time they are loaded. This means (among other things) that every call to require('foo') will get exactly the same object returned.
* Multiple calls to require('foo') may not cause the module code to be executed multiple times. This is an important feature. With it, "partially done" objects can be returned, thus allowing transitive dependencies to be loaded even when they would cause cycles.

### What is REPL in nodejs ?
### What are popular REPL commands in nodejs ?
### What is NPM in nodejs ?
### Why nodejs application is scalable ?
### What is the purpose of module.exports in nodejs ?
### What is tracing in nodejs ?
### How will you debug an application in nodejs ?
### What is the child process in nodejs ?
### What is cluster in nodejs ?
### What is closure in javascript ?
### What is Buffer in nodejs ?
### How will you convert a buffer to JSON in nodejs ?
### Why do you use _filename in node.js ?
### What is the use of timers is nodejs ?
### What are the important API's in timers module in nodejs ?
### What is EventEmitter in nodejs ?
### What is the use of net.Socket in nodejs ?
### What are the important events of net.Socket in nodejs ?
### Can we build a REST service in nodejs ?
### What is the use of DNS module in nodejs ?
### What are the important command line options in nodejs ?
### How does nodejs works ?
### How can we avoid callback hell in nodejs ?
### How do you resolve unhandled exceptions in a nodejs program ?
### What is the callback function in nodejs ?
### What are the most popular modules in nodejs ?
### What is the difference between readFile and createReadStream in nodejs ?
### What is the use of QueryString in nodejs ?
### How will you get the amount of free memory on the server in which nodejs application is running ?
### What is a Global object in nodejs ?
### What are the security mechanisms available in nodejs ?
### What is the use of Zlib in nodejs ?
### How will you convert a Buffer content into readable String in nodejs ?
### How do you write unit test cases in nodejs ?
### What are the standard Javascript errors ?
* EvalError - This error is thrown when call to eval() fails.






