// 1) Event Bubbling TODO:
/***************
 * Event Propogates (triggers) from the innermost target element and moves triggering the event on parents of target element.
 * Target ELement  to Outermost DOM Element
 ***************/


// 2) Event Capturing or Trickling TODO:
/***************
 * Event Propogates (triggers) from the Outermost element and moves triggering the event towards the target element.
 * Outermost DOM Element to Target ELement 
 ***************/


// 3) Event Delegation TODO:
/***************
 * Defining a event handler to a container rather than defining it on elements of container.
 * Performance Increases, Less memory, Less Code
 * Some event which doest not bubble up should be handled - blur, focus, resize etc.
 * Careful while stopping the event propogation.
 * target - tagName, id.
 * Behaviour pattern
 * data-uppercase - dataset property of target - property uppercase set to some value not undefined
 ***************/

// 4) DOMContentLoaded vs Load TODO:
/***************
 * DOMContentLoaded is fired when DOM Tree is created / ready.
 * Initial HTML has been loaded and parsed. Without waiting for assets.
 * Load is fired when whole page is loaded. Icluding all the assets like image, css etc.
 ***************/


// 5) Attribute vs Property TODO:
/***************
 * Attribute: Properties defined on HTML markup.
 * Property: Properties on DOM.
 ***************/


// 6) Same Origin Policy TODO:
/***************
 * Prevents JS from making requests across domain boundaries.
 * Origin: URI Scheme + Hostname + Port number 
 ***************/


// 7) Interpretted Language TODO:
/***************
 * Parse: Tokens, Abstract Syntax Tree (Syntax Parser)
 * Compilation / Interpretter: Interpretter -> Compiler -> Optimized Machine Code -> Byte Code 
 * Execution: Garbage Collector <== Memory Heap ==> Call Stack
 * Ignition, Turbo Fan, Orinoco / Oil Pan
 ***************/


// 8) JS vs Java TODO:
/***************
 * Interpreted Language                                 * Compiled Language
 * Used as Full-Stack                                   * Used for backend, Mobile Apps, Desktop Apps
 * Dynamic typed                                        * Statically typed
 * Less secure                                          * More Secure
 * Prototype based objects                              * Class based objects
 * Object based scripting language                      * Object oriented programming language
 ***************/


// 9) Scripting Language vs Programming Language TODO:
/***************
 * FIXME:
 ***************/


// 10) Events TODO:
/***************
 * Actions performed on HTML elements (Nodes).
 ***************/


// 11) History of JS
/***************
 * Created by Brendan Eich
 * 1995
 * Netscape
 * Mocha - Livescript
 ***************/


// 12) Prevent Default TODO:
/***************
 * To prevent all the default actions that a event executes
 * If event is cancelable then only we can prevent or cancel the event default behaviour.
 * Focus, Blur etc are not a cancelable event 
 ***************/


// 13) Stop Propogation TODO:
/***************
 * Stops the event from bubbling up the event chain.
 * Stops the event from trickling down the event chain.
 ***************/


// 14) Browser Object Model TODO:
/***************
 * Collection of objects (browser functionality) provided by browser.
 * Interact with browser.
 * Window object represents browser window.
 * Screen, Document, Fetch, Console, History, Navigator (Geolocation, serviceWorker) etc
 ***************/


// 15) Single Threaded Language TODO:
/***************
 * As the JS engine has only one call stack.
 * We can't write code in a way that interpreter can run parts of code parallely in multiple thread or process.
 ***************/


// 16) ECMA Script TODO:
/***************
 * Scripting langugae.
 * Basis (Foundation / Base) of JS.
 * ECMA International Standards Organization. ECMA-262,402 Specifications
 * 1997 first release
 * ECMA - European Computer Manufacturers Association.
 ***************/


// 17) JSON - JavaScript Object Notation TODO:
/***************
 * Interchanging data between browser and server.
 * JSON is text only. Data can only be text.
 * JSON is used as data format by many programming languages.
 * JSON was built upon JS objects. 
 * STRINGIFY: To send data to server the data should be in string format. Converts to String / JSON object
 * PARSE: Data received from server is in string format. Converts to JS Object
 * Prior this we used XML (parse - XML DOM implementation).
 ***************/


// 18) Progressive Web Apps (PWA) TODO:
/***************
 * Mobile applications delivered through the web.
 * Built using web technologies
 * Accessible through URL and Indexed by Search Engine. As it is deployed to server.
 * Service Worker - Handle Offline Stuff, Bridge gap between caching and network, Mainfest
 ***************/


// 19) Vanilla JS Redirect to new page, Validate Email, Display Date, Compare Date, Default Values TODO:
/***************
 * window.location.href = "url"
 * Regex - in server side - as JS can be disabled in client side.
 * new Date()
 * new Date().getTime()
 * const value = false || 500 ==> value stores is 500
 ***************/


// 20) Polyfill TODO:
/***************
 * JS code which replicates the modern functionality.
 * Mostly implemented to provide functionality in older browsers.
 ***************/