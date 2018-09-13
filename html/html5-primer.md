### HTML5
* HTML5 is a markup language that is used for structuring and presenting the content on the world wide web.
* New Elements + New Javascript API's = HTML5

### HTML5 platform
* https://platform.html5.org/

### Standards Bodies
* W3C
* WHATWG
* ECMASCRIPT

### New Elements
* article - The <article> tag specifies independent, self-contained content.
Eg:
```html
<article>
  <h1>Google Chrome</h1>
  <p>Google Chrome is a free, open-source web browser developed by Google, released in 2008.</p>
</article>
```
* aside - The <aside> tag defines some content aside from the content it is placed in.The aside content should be related to the surrounding content.
Eg:
```html
<p>My family and I visited The Epcot center this summer.</p>

<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```
* section - The <section> tag defines sections in a document, such as chapters, headers, footers, or any other sections of the document.
Eg:
```html
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>
```
* header
* footer
* audio 
* video
* bdi
* canvas
* datalist
* details
* embed
* figcaption
* figure
* footer
* main
* math
* mark
* summary
* time

### Interaction, Events & Messaging
* Battery status
* Clipboard API and Events
* Cross Document Messaging
* Device & Screen Orientation
* Full screen
* Geolocation
* Media capture
* Notifications
* Touch Events
* Vibration

### Storage and files
* Blob URLs
* File API
* File Reader
* IndexedDB
* local storage

### Real Time Communication
* Push API
* server sent events
* web sockets

### Web components
* Custom Elements
* shadow DOM - a way to encapsalute element trees in the DOM.What this means is that you can apply CSS and javascript to the elements contained in the shadow DOM and it wont leak out to affect the rest of the page.
* Templates

### Performance Optimization & Analysis
* High Resolution Time - gives you the opportunity to measure time with sub-milisecond accuracy.This is great for measuring operations and calculations.
* Navigation timing - to measure the page load time and also you can find how the user navigated to your page and are able to respond to custom events related to page load lifecycle
* Page visiability - will allow you to respond to changes in the page's visibility based on the tab state.
* User timing -  a simple interface that is available to create timing boundaries inside your code giving you an easy way to measure at a high  resolution how your application performs.
* Web Workers - 

### Security and Privacy
* content security policy - allows you to create a whitelist for sources of a page including scripts and styles 
* Referrer Policy - gives you tighter control over the amount of data that's transmitted  throught HTTP Referer
* Web cryptography - gives you a way to encrypt and decrypt data entirely on the client.

### Misc features
* scripts:
    * async - allows a script to run in an asynchronous manner so that wont block the execution of the page.
    * defer - allows a script to run after the page the loads
* contentEdiitable - allows any element to be switched into an edit mode so that virtually any part of your page can be an editor
* Drag & Drop - makes it easy to implement drag and drop behaviors with a native browser API.
* History - allows you to control of the browsers location by giving  you a chance to make  changes to it without requiring a trip back to the server.
* promises - you can easily write asynchronous code in clean and clear manner.
* service workers - replaced the previous application cache API which could create a offline web application by maintaining a list of all the files needed to run while offline 

### DOM Selection
* Selection API:
  * getElementsByClassName('img-responsive') - returns elements that have the class name
  * querySelector('.img-responsive') - returns the first match that it finds in the document.
  * querySelectorAll('.img-responsive'), querySelectorAll('#example-container li:first-child') 
  * querySelectorAll - returns an array of nodelist elements
* iterating NodeList:forLoop
```javascript
var items = document.querySelectorAll('#example-container li');

for (var i = 0, len = items.length; i < len; i++) {
	console.log(items[i].innerText);
}
```
* iterating NodeList:forLoop
```javascript
var forEach = Array.prototype.forEach;
var items = document.querySelectorAll('#example-container li');

forEach.call(items, function(item){
console.log(item.innerText);
});
```
* Live result from getElementsByClassName
```javascript
var list = document.querySelector('#example-container ul');
var items = document.getElementsByClassName('feature');

console.log(items.length);

var newItem = document.createElement('LI');
newItem.className = 'feature';
newItem.innerText = 'new live feature';
list.appendChild(newItem);

console.log(items.length);
```

* static result from querySelectorAll
```javascript
var list = document.querySelector('#example-container ul');
var items = document.querySelectorAll('#example-container li');

console.log(items.length);

var newItem = document.createElement('LI');
newItem.className = 'feature';
newItem.innerText = 'new static feature';
list.appendChild(newItem);

console.log(items.length);
```
