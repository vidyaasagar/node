### Advantages of angular
* Angular presents you not only the tools but also design patterns to build your project in a maintainable way.
* building high-performance, scalable, single-page applications.
* It’s JavaScript, but better. Angular is built with TypeScript, which in turn relies on JS ES6. You don’t need to learn a totally new language, but you still receive features like static typing, interfaces, classes, namespaces, decorators etc.
* You have directives to give HTML elements dynamic behavior.
* You can power up the forms using FormControl and introduce various validation rules.
* You may easily send asynchronous HTTP requests of various types.
* Testing is at the heart. Angular is meant to be thoroughly tested and it supports both unit and end-to-end testing with tools like Jasmine and Protractor.

Note:Debugging Tool - Augury, Testing Tool - Jasmine(unit testing), protractor(end to end testing)

### What is Angular ?
* Angular is a framework for building dynamic web applications.
* Angular is a platform that is capable of targeting browsers, hybrid-mobile frameworks, desktop applications, and server-side rendered views.
* Angular CLI 6.0 comes with major new capabilities, such as ng update and ng add commands; ng update makes it much easier to update your version of Angular, npm dependencies, RxJS, and Angular Material, including some deterministic code rewriting capabilities to apply name changes to APIs or functions.

### What is the difference between angular and angularjs ?
* Speed - Angular 2 is faster.
* Components - Instead of controllers and scope, we use components which feel simpler.
* Simpler Directives - Creating custom directives is much simpler.
* Intutive Data Binding - when we need to link data to an HTML element or listen for a button clicking on the page, we have an intutive syntax.
*  Angular's obviously fast change detection provides a way to synchronize the views of our application with the current state of the data model.
* Services are now just a class.
* backward compatibility
* Ahead-of-Time compilation for building lightning fast applications

This way, although AngularJS was the optimal technology for application development in 2010, it struggled to stay competitive and flawless, given the constantly moving web. This was the birth of the idea for a new framework, inspired by AngularJS, but with more powerful APIs and better performance! Because of the conceptual similarities with AngularJS, Google called this new framework Angular.
Having a core with a minimalistic, immutable API and building on top of it with different modules in order to provide the best development experience possible.
Note: systemjs is a javascript library that allows us to import other libraries.
Note: Given the learned lesson from AngularJS about the constantly evolving browser APIs

### AngularJs controller
The best practices for building AngularJS applications state that the controllers should not manipulate the DOM at all; instead, all DOM access and manipulations should be isolated in directives. If we have some repetitive logic between controllers, most likely we want to encapsulate it into a service and inject this service with the dependency injection mechanism of Angular in all the controllers that need that functionality.

### AngularJs Scope
* The data binding in angularjs is achieved using the scope Object.
* context where the model is stored so that the controllers, directives and expressions can access it.
The latest Angular took this even further by removing the scope object. All the expressions are evaluated in the context of the given UI component. Removing the entire scope API introduces higher simplicity; we don't need to explicitly inject it anymore, instead, we add properties to the UI components to which we can later bind. This API feels much simpler and more natural.

### AngularJs dependency Injection
* Dependency injection is a design pattern where we define the dependecies as part of application configuration.
* DI provides a number of benefits, such as easier testability, better code organization and modularization, and simplicity. 
Angular uses the syntax of ECMAScript 2016 decorators for annotating the code for using DI. Decorators are quite similar to the decorators in Python or annotations in Java. They allow us to decorate the behavior of a given object, or add metadata to it, using reflection. Since decorators are not yet standardized and supported by major browsers, their usage requires an intermediate transpilation step.

The new DI is much more flexible and feature-rich. It also fixes some of the pitfalls of AngularJS, such as the different APIs; in the first version of the framework, some objects are injected by position (such as the scope, element, attributes, and controller in the link function of the directives) and others, by name (using parameters names in controllers, directives, services, and filters).

### Angular server side rendering
It allows us to render the requested view of a single-page application on the server and directly provide the HTML for the page to the user.Later, once all the resources are processed, the event listeners and bindings can be added by the script files. This sounds like a good way to boost the performance of our application. 

Another typical use case for the server-side rendering is for building Search Engine Optimization (SEO)-friendly applications. There were a couple of hacks used in the past for making the AngularJS applications indexable by the search engines. One such practice, for instance, is the traversal of the application with a headless browser, which executes the scripts on each page and caches the rendered output into HTML files, making it accessible by the search engines.

Although this workaround for building SEO-friendly applications works, server-side rendering solves both of the aforementioned issues, improving the user experience and allowing us to build SEO-friendly applications much more easily and far more elegantly.

The decoupling of Angular with the DOM allows us to run our Angular applications outside the context of the browser. 

### Applications that scale
In AngularJS, we are allowed to have dependencies between the different watchers, which requires the digest loop to iterate over all of them a couple of times until the results of the expressions results get stable. Angular makes the data flow in one direction; this has a number of benefits:

* More explicit data flow
* No dependencies between bindings, so no time to live (TTL) of the digest
* Better performance of the framework
* The digest loop is run only once
* We can create apps that are friendly to immutable or observable models that allow us to make further optimizations

We may take another perspective on the scalability problem when we need to maintain a large code base written in JavaScript. Although JavaScript's duck typing makes the language quite flexible, it also makes its analysis and support by IDEs and text editors harder. Refactoring of large projects gets very hard and error prone because in most cases, the static analysis and type inference are impossible. The lack of compiler makes typos all too easy, which are hard to notice until we run our test suite or run the application.

The Angular core team decided to use TypeScript because of the better tooling possible with it and the compile-time type checking, which help us to be more productive and less error prone. As the following figure shows, TypeScript is a superset of ECMAScript; it introduces explicit type annotations and a compiler:

The usage of TypeScript allows much better IDE and support of the text editors with static code analysis and type checking. All this increases our productivity dramatically by reducing the mistakes we make and simplifying the refactoring process. Another important benefit of TypeScript is the performance improvement we implicitly get by the static typing, which allows runtime optimizations by the JavaScript virtual machine.

### Angular change detection 
*  It performs dirty checking, which evaluates the registered expressions in the context of specific UI components. Since the concept of scope has been removed from Angular, the execution context of the expressions are the instances of the controllers of the components associated with them.
 Angular performs change detection in code that the framework directly generates from the templates of the components; the code is generated by the Angular compiler. The Angular compiler is a module of the framework which can process an Angular application, after that perform different optimizations on top of it, and in the end generate code that will perform much better than the source code that we have written.

 There are two built in code generation strategies

 * Just-in-time compilation
 At runtime, Angular generates code that performs change detection on the entire application. The generated code is optimized for the JavaScript virtual machine, which provides a great performance boost.

 * Ahead-of-time compilation
 This is similar to JIT, with the difference that the code is being generated as part of the application's build process. It can be used for speeding the rendering up by not performing the compilation in the browser and also in environments that disallow eval(), such as ones with strict Content-Security-Policy (CSP) and Chrome extensions.

 ```javascript
 function MainCtrl($scope) { 
  $scope.label = 'Hello world!'; 
}
```
```html
<body ng-app ng-controller="MainCtrl"> 
  <input ng-model="label"> 
  {{label}} 
</body> 
```

The more experienced Angular developer has a better understanding of what is actually going on behind the scenes. In the preceding example, inside the ng-model and ng-bind directives (in our case, the interpolation directive, {{}}), Angular adds watchers with a different behavior associated with the same expression: label. These watchers are quite similar to the observers in the classical MVC pattern. On some specific events (in our case, change of the content of the text input), AngularJS will loop over all such watchers, evaluate the expressions associated with them in the context of a given scope, and store their results. This loop is known as the digest loop.

On each iteration, AngularJS will compare the current result of the evaluation with the previous result and will invoke the associated callback in case the values differ. For instance, the callback added by the interpolation directive will set the content of the element to be the new result of the expression's evaluation. This is an example of the dependency between the callbacks of the watchers of two directives. The callback of the watcher added by ng-model modifies the result of the expression associated with the watcher added by the interpolation directive.

This approach has its own drawbacks. We said that the digest loop will be invoked on some specific events, but what if these events happen outside the framework; for example, what if we use setTimeout, and inside the callback, passed as the first argument, we change properties attached to the scope that we're watching? AngularJS will be unaware of the change and won't invoke the digest loop, so we need to do that explicitly using $scope.$apply. But, what if the framework knew about all the asynchronous events happening in the browser, such as user events, the XMLHttpRequest events, and the WebSocket-related events? In such a case, Angular would be able to intercept the event's handling and could invoke the digest loop without forcing us to do so!

### Enchancing the JS's change detection 
We said that inside the digest loop, Angular evaluates registered expressions and compares the evaluated values with the values associated with the same expressions in the previous iteration of the loop.

The most optimal algorithm used for the comparison may differ depending on the type of the value returned from the evaluation of the expression. For instance, if we get a mutable list of items, we need to loop over the entire collection and compare the items in the collections one by one in order to verify if there is a change or not. However, if we have an immutable list, we can perform a check with a constant complexity, only by comparing references. This is the case because the instances of immutable data structures cannot change: instead of mutating the instance, we'll get a new reference with the modification applied.

In AngularJS, we can add watchers using a few methods. Two of them are $watch(exp, fn, deep) and $watchCollection(exp, fn). These methods give us some level of control over the way the change detection will perform the equality check. For example, adding a watcher using $watch and passing a false value as a third argument will make AngularJS perform a reference check (that is, compare the current value with the previous one using ===). However, if we pass a truthy (any true value), the check will be deep (that is, using angular.equals). This way, depending on the expected type of the returned by the expression value, we can add listeners in the most appropriate way in order to allow the framework to perform equality checks with the most optimal algorithm available. This API has two limitations:

It does not allow you to choose the most appropriate equality check algorithm at runtime
It does not allow you to extend the change detection to third parties for their specific data structures
The Angular core team assigned this responsibility to differs, allowing them to extend the change detection mechanism and optimize it, based on the data we use in our applications. Angular defines two base classes, which we can extend in order to define custom algorithms:

KeyValueDiffer: This allows us to perform advanced diffing over key value-based data structures
IterableDiffer: This allows us to perform advanced diffing over list-like data structures
Angular allows us to take full control over the change detection mechanism by extending it with custom algorithms or configuring it appropriately, which wasn't possible in AngularJS. 

### What is angular component ?
* A component is a view defined in a template, its associated code is defined with a class & metadata defined with a decorator.
* A component is a typescript class, decorated with some attributes and metadata.The class encapsulates all the data and functionality of the component, while decorator specifies  how it translates into the HTML.
* A decorator adds more behavior to our class from outside the class.
* A decorator turns the plain old javascript class into a component.
* Directives and components delegate the business logic to Services. This enforces better separation of concerns, maintainability, and code reusability. 
* Directives receive references to instances of specific services declared as dependencies using the DI mechanism of the framework and delegate the execution of the business-related logic to them. 
* Both directives and components may use the DI mechanism not only to inject services but also to inject the DOM elements and/or other components or directives.

```typescript
@Component({ 
  selector: 'hello-world', 
  template: '<h1>Hello, {{target}}!</h1>' 
}) 
class HelloWorld { 
  target: string; 
  constructor() { 
    this.target = 'world'; 
  } 
} 
```
### Built-In Attribute directives
NgClass
* The NgClass directive allows us to apply or remove multiple CSS classes simultaneously from an element in our HTML.

```html
<div class="stock-container">
  <div class="name">{{stock.name + ' (' + stock.code + ')'}}</div>
  <div class="price"
       [ngClass]="stockClasses">$ {{stock.price}}</div>
  <button (click)="toggleFavorite($event)"
          [disabled]="stock.favorite">Add to Favorite</button>
</div>
```
### What are Angular Modules ?
In AngularJS, we have the concept of modules. Modules there are responsible for grouping pieces of related functionality together and registering it internally during the bootstrap process. Unfortunately, they didn't provide features such as encapsulation and lazy loading.
* Modules are how we organize our application in angular.Every angular application must have a "root module", which we'll need to launch it.
* The main purpose of the new modules is to give a context for the Angular compiler and achieve a good level of encapsulation.
NgModules have the following responsibilities:

* Providing the context of the Angular template compiler
* Providing a level of encapsulation where we can have components or directives, which are used only within the boundaries of a given module
```typescript
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent} from './tab.component';
import {TabItemComponent} from './tab-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabComponent, TabItemComponent],
  exports: [TabComponent]
})
class TabModule { }
```

### The evolution of the web – time for a new framework
* ES2015(es6) introduced many changes in JavaScript, such as adding built-in language support for modules, block scope variable definition, and a lot of syntactical sugar, such as classes and destructuring.
*  Web components allow us to define custom HTML elements and attach behavior to them.
* Now, with HTML5, we have different APIs that allow audio and video processing, communication with external services through a two-directional communication channel, transferring and processing big chunks of raw data, and more. All these heavy computations in the main thread may create a poor user experience. They may introduce freezing of the user interface when time-consuming computations are being performed. This led to the development of web workers, which allow the execution of the scripts in the background that communicate with the main thread through message passing. This way, multithreaded programming was brought to the browser.

### The evolution of ECMAScript
* Angular is written with a superset of ES2016, called TypeScript.
* The type annotations allow us to take additional performance boost because they open the door for a process called ahead-of-time (AOT) compilation, which as part of the build process, generates efficient code for change detection, rendering, and dependency injection. 

### Bootstrapping angular application

```typescript
import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```
With the @NgModule decorator in the preceding example, we declare AppModule and we also import BrowserModule. Note that this time, we provide a value to the bootstrap property, where we explicitly declare that we want AppComponent to be used for bootstrapping our application.

On the last line of the file, we invoke the bootstrapModule method of the object returned by the invocation of platformBrowserDynamic with the AppModule argument.

In recap, the modules in Angular have an important role: they not only group the building blocks of our application logically but also provide a way we can achieve encapsulation. Last, but not least, NgModules are heavily used in the bootstrap process of the application.

### Angular pipes
The responsibility for formatting data in AngularJS was assigned to filters. Another example for a data formatting requirement is when we use collections of items. 

#### Defining pipes
The syntax for defining pipes is similar to the one used for the definition of modules, directives, and components. In order to create a new pipe, we can use the ES2015 decorator, @Pipe. It allows us to add metadata to a class, declaring it as a pipe. All we need to do is provide a name for the pipe and define the data formatting logic.

```typescript
@Pipe({ name: 'lowercase1' }) 
class LowerCasePipe1 implements PipeTransform { 
  transform(value: string): string { 
    if (!value) return value; 
    if (typeof value !== 'string') { 
      throw new Error('Invalid pipe value', value); 
    } 
    return value.toLowerCase(); 
  } 
} 
```
Using the TypeScript syntax, we implement the PipeTransform interface and define the transform method declared inside it.
Now, let's demonstrate how we can use the lowercase1 pipe inside a component:

```typescript
@Component({ 
  selector: 'app', 
  template: '<h1>{{"SAMPLE" | lowercase1}}</h1>' 
}) 
class App {} 

@NgModule({
  declarations: [App, LowerCasePipe1],
  bootstrap: [App],
  imports: [BrowserModule]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```
By keeping the data formatting logic as a separate component, Angular keeps the strong separation of concerns that can be seen throughout.

### Angular Zone.js
This is exactly the case in Angular. This functionality is implemented with zones using zone.js.

At ng-conf, in 2014, Brian Ford gave a talk about zones. Brian presented zones as meta-monkey patching of browser APIs. The zone.js is a library developed by the Angular team, which implements zones in JavaScript. They represent an execution context, which allows us to intercept asynchronous browser calls. Basically, using zones, we are able to invoke a piece of logic just after the given XMLHttpRequest object completes or when we receive a new WebSocket event. Angular took advantage of zone.js by intercepting asynchronous browser events and invoking the digest loop just at the right time. This totally eliminates the need for explicit calls of the digest loop by the developer using Angular.

### Angular simplified data flow
The cross-watcher dependencies may create a tangled data flow in our application, which is hard to follow. This may lead to unpredictable behavior and bugs, which are hard to find. Although Angular kept the dirty checking as a way to achieve change detection, the framework enforced unidirectional data flow. This happened by disallowing dependencies between the different watchers, which allows the digest loop to be run only once. This strategy increases the performance of our applications dramatically and reduces the complexity of the data flow. Angular also made improvements to memory efficiency and the performance of the digest loop.

### Angular services
Services are the building blocks that Angular provides for the definition of the business logic of our applications. In AngularJS, we had three different ways of defining services:
```javascript
// The Factory method 
module.factory('ServiceName', function (dep1, dep2, ...) { 
  return { 
    // public API 
  }; 
}); 
 
// The Service method 
module.service('ServiceName', function (dep1, dep2, ...) { 
  // public API 
  this.publicProp = val; 
}); 
 
// The Provider method 
module.provider('ServiceName', function () { 
  return { 
    $get: function (dep1, dep2, ...) { 
      return { 
        // public API 
      }; 
    } 
  }; 
}); 
```
just like AngularJS, the new versions of Angular tolerates this separation of concerns as well, so the core team kept the services. In contrast to AngularJS, Angular provides a much simpler interface for their definition by allowing us to use plain ES2015 classes. We cannot escape from the fact that we need to explicitly state the services that should be available for injection and somehow specify instructions for their instantiation. In contrast to AngularJS, now the framework uses the ES2016 decorator's syntax and providers for this purpose, instead of the methods familiar to us from AngularJS. This allows us to define the services in our applications as simple as ES2015 classes, with decorators for configuration of the DI:
```typescript
import {Injectable} from '@angular/core'; 
 
@Injectable() 
class HttpService { 
  constructor() { /* ... */ } 
} 
 
@Injectable() 
class User { 
  constructor(private service: HttpService) {}
 
  save() { 
    return this.service.post('/users') 
      .then(res => { 
        this.id = res.id; 
        return this; 
      }); 
  } 
} 
```
Services are related to the components and the directives described in the previous sections. For developing highly coherent and reusable UI components, we need to move all the business-related logic to inside our services. Also, in order to develop testable components, we need to take advantage of the DI mechanism to resolve all their dependencies.

Another key difference between the services in AngularJS and Angular is the way the frameworks represent them internally. AngularJS uses strings to identify the different services and the associated factories used for their instantiation. On the other hand, now Angular uses keys instead. Usually, keys are the types of the distinct services. Another core difference in the instantiation is the hierarchical structure of injectors, which encapsulate different dependency providers with different visibility.

One more distinction between the services in AngularJS and Angular is the simplified syntax. The DI in Angular has a completely different syntax and has improved behavior by providing a consistent way of injecting dependencies. 

### Angular web animations

* Angular provides with the ability to easily define animations based on your app's logic.
* These animations are based on the Web Animatins API which allow animations to run natively on browsers.
* npm install @angular/animations --save
* trigger,style,transition,translate,keyframes