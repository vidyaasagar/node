### What is angularjs ?
* Client side javascript mvc framework for developing dynamic single page web applications,

### Why angularjs ?
* Complexity in managing DOM Manipulations and data updates manually.
* Well defined application architectures: MVC,MVVM,MVW
* Single Web Applications that have one entry point HTML page: all content is dynamically added to and removed from that one page.
* Dependency Injection is a design pattern where dependencies are defined in an application as part of the configuration.
* An angularjs application will require fewer lines of code to complete a task than a pure javascript solution using jquery would.
* Scalable, reusable and maintainable js code.
* Test Driven development.
* modularity: complex business applications can be divided into managable units no matter how large the application gets over the time the code stays clean, controllable and testable.
* Testable: with the separtion of concerns the logic is separated from UI and it makes it easier to test the logic.

### Data binding
* synchronization of data between model and view 

### Scope
* context where the model is stored so that the controllers, directives and expressions can access it.

### Model 
* The data shown to the user in the view and with which the user interacts.

### Compiler
* parses the template and instantiates directives and expressions

### injector 
* dependency injection container

### services
* services give the place to contain the real logic and state of your application.
* Services are the place wher you will want to communicate with server.
* Essential tasks of your application would likely to happen in your services. 

### AngularJs Modules
* Generally modules are the place where we write pieces of our application.
* Makes our code more maintainable, testable, and readable.
* Where we define our dependecies.
* A container for different parts of an application including controllers, services, filters and directives which configures the injector.

####  Angularjs Modules syntax
```html
<!DOCTYPE html>
<html ng-app="store">

  <head>
    <meta charset="utf-8" />
    <title>AngularJS Application</title>
    <script type ="text/javascript" src="angular.min.js"></script>
    <script type ="text/javascript" src="app.js"></script>
  </head>

  <body>
    
  </body>

</html>
```
```javascript
// Angular js module syntax app.js
var app = angular.module('store', [ ]);
```
### Controllers
* Controllers are where we define our app's behaviour by defining functions and values.
* The business logic behind the views
#### Controllers syntax
```html
<!DOCTYPE html>
<html ng-app="app">

  <head>
    <meta charset="utf-8" />
    <title>AngularJS Application</title>
    <script type ="text/javascript" src="angular.min.js"></script>
    <script type ="text/javascript" src="app.js"></script>
  </head>

 <body ng-controller="StoryController as vm">
    <h3>{{vm.story.name}}</h3>
    <h3 ng-bind="vm.story.name"></h3>
 </body>

</html>
```
```javascript
(function () {
  angular
    .module('app', [])
    .controller('StoryController', StoryController);

  function StoryController() {
    var vm = this;
    vm.story = { id: 100, name: 'The Force Awakens' };
  }
})();
```
### Directives
* Extend the HTML with custom attributes and elements.
* A marker on HTML tag that tells angular to run or reference some javascript code.
* HTML annotations that trigger javascript behaviours
* angular directives in four ways like Element, Attribute, Class and comment

#### Built-in Directives

* ng-hide
* ng-show
* ng-repeat
* ng-bind
* ng-app
* ng-src
* ng-submit
* ng-selected
* ng-click
* ng-change

### Expressions
* Allow you to insert dynamic values into your HTML.

### Filters
* A filter formats the value of an expression for display to the user.

#### Built-In filters

* uppercase
* lowercase
* limitTo
* date 
* orderBy
* number
* currency
* json 
* filter




