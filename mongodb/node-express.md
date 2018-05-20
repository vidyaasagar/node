### Express fundamentals

#### Features of express
* Middleware for letting a request flow through multiple headers
* Routing for handling a request at a specific spot
* Convenience methods and properties
* Views for dynamically rendering HTML

### Why express
* The API exposed by the http module is pretty minimal and doesn’t do a lot of heavy lifting for you.
* That’s where Express comes in: it’s a helpful third-party module (that is, not bundled with Node). 
* Express is an abstraction layer on top of Node’s built-in HTTP server. 

### express middleware
In contrast to vanilla Node, where your requests flow through only one function, Express has a middleware stack, which is effectively an array of functions.

### Routing
Routing is a lot like middleware, but the functions are called only when you visit a specific URL with a specific HTTP method. For example, you could only run a request handler when the browser visits yourwebsite.com/about.

### Extensions to request and response objects 
Express extends the request and response objects with extra methods and properties for developer convenience.

### Views 
Views allow you to dynamically render HTML. This both allows you to change the HTML on the fly and to write the HTML in other languages.