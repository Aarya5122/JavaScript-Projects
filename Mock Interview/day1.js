//1) Prototype and Prototype chaining TODO: 
/***************
 * It is an object with collection of predefined properties / methods. 
 * Which is attached to every new object created.
 * NOTE: Every object will have a prototype property.
 * As prototype is a object even it has a prototype property. Which points other prototype object.
 * The above phenomenon or concept is termed as prototype chaining.
 * The prototype chaining ends when prototype property of an object points to null.
 * Object.create(prototype), Object.assign(obj, prototype)
 * Object.setPrototypeOf(), Object.getPrototypeOf()
 * //FIXME: Prototype Inheritance vs Class Inheritance.
 ***************/


// 2) Slice Method TODO:
/***************
 * Returns the selected portion of array, as a new array.
 * I has two arguments - start and end.
 * If start is passed entire array from that index is selected.
 ***************/
// Example:
// const sliceArray = [1,2,3,4,5,6,7,8,9]
// console.log("Sliced Array: ",sliceArray.slice(4,7))
// console.log("Original array after slicing: ",sliceArray)


// 3) Splice Method TODO:
/************** 
 * It is used to delete the selected portion of array and Add new elements if required.
 * It has mainly 3 parts in parameters. Start Index, Number of Elements to delete, Elements to add into array.
 * It returns array of deleted elements. 
 * If elements are added into array it mutates the original array.
 ***************/
// Example:
// const spliceArray = [1,2,3,4,5,6,7,8,9]
// console.log(spliceArray.splice(3,0,100,200,300))
// console.log("Spliced Array: ",spliceArray);
// console.log(spliceArray.splice(5,2,10,20))
// console.log("Spliced Array: ",spliceArray);


// 3) === and == TODO:
/***************
 * === - strict equality comparison: Type of variable is also considered
 * == - loose equality comparison (type coercion)
 * //FIXME:
 ***************/

// 4) First class functions TODO:
/***************
 * When we treat functions as variables.
 * Storing a function as value to a variable.
 * Passing a function as argunment to another function (callbacks).
 * Returning a function from a function.
 ***************/

// 5) First order function TODO:
/***************
 * When a function doesn't accept another function as parameter.
 * When function doesn't return a function.
 ***************/


// 6) Higher order function TODO:
/***************
 * When a function accepts another function as parameter.
 * When function return a function.
 ***************/


// 7) Let Keyword TODO:
/***************
 * Scope: Block
 * Hoisted: Yes, But in script scope. Temporal deadzone (ReferenceError)
 * Redeclared: No
 * ReInitialize: Yes
 * Introduced: ES6 or ECMA-2015
 ***************/


// 8) Redeclare variables in switch block without error TODO:
// const variable = 100;
// const value = "";
// switch(value){
//     case "one":
//         {const variable = 200;}
//     case "two":
//         {const variable = 300;}
//     default:
//         {const variable = 400}
// }


// 9) Temporal dead zone TODO:
/***************
 * Timespan
 * Once the variable is hoisted (memory is allocated) and Before the variable is initialized (assigned a value)
 ***************/


// 10) IIFE - Immediately invoked function execution TODO:
/***************
 * Function that runs as soon as it is defined.
 ***************/
// (function (){
//    console.log("Database connection establisher is called")
//    console.log("Database connected successfully!");
// })()


// 11) Hoisting TODO:
/***************
 * Declarations of variables, functions and classes are moved to top of the scope before execution.
 * Variables are allocated memory and assigned a value undefined.
 * Functions and Classes are assigned with it's own defination. 
 ***************/


// 12) Closures TODO:
/***************
 * Function bound together with it's surrounding state.or Lexical Scope (Parent Scope - declaration scope).
 * A Closure is created as soon as a funciton is created.
 * Ability of function to remember the parent scope even after the parent execution context is poped of the stack.
 * Examples: FIXME:
 ***************/


// 13) Scope TODO:
/***************
 * Space or area which determines the accessibility/ availability of a variable
 * Global
 * Block
 * Function
 * Module FIXME:
 ***************/


// 14) Cookie TODO:
/***************
 * A peice of data sent by server to user browser.
 * Browser may store cookie data and send it back to same server.
 * They are saved in key-value pairs.
 * It can be used to remember the statefull information for stateless protocol.
 * User Personalization - Preference, Theme etc.
 * Tracking User- Record and analyze behaviour.
 * Session Management - login, game scores etc.
 * //FIXME: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
 ***************/

// 15) Session Storage TODO:
/***************
 * Each origin maintains seperate storage area.
 * Data is available only for the duration of page session.
 * Data stored here is never transferred to server.
 * Storage Limit <= 5MB
 * LOCALSTORAGE: cache, local storage, Max storage limit
 ***************/


// 15) Promise TODO:
/***************
 * Represents eventual completion or failure of a asynchronous operation and it's resulting value.
 * Handles Async Operation
 * Lets Async method to return value like Sync method.
 * Async methods immediately returns a promise (Proxy value) instead of a final value. Hence final value is returned in future at same point.
 * States: Pending (Initial, processing), Fulfilled (Operation successfull), Rejected, Settled (Operation executed)
 * TODO: PROMISE CHAINING:
 * Executing sequence of async operations. Where subsequent operation starts when prev operation succeeds.
 * Overcomes Callback hell or Pyramid of Doom
 ***************/


// 16) Callback TODO:
/***************
 * When we pass a function as a parameter to another function. The passed function is known as Callback.
 * To execute task only after completion of specific task.
 * Handle async operation - XMLHTTPRequest - onreadystatechange
 * TODO: CALLBACK HELL - Multiple nested callbacks, Hard to debug and read.
 ***************/


// 17) Typeof operator TODO:
/***************
 * It returns the type of operand. (variable / a value / a expression)
 ***************/


// 18) Undefined TODO:
/***************
 * Variable is not assigned with a value
 * Primitive Type also a Global property and It's also primitive value
 * Indicates the absence of variable itself
 * Not an assignment value
 * Converts to NaN while performing primitive operations
 ***************/

// 19) Null TODO:
/***************
 * Absence (Intentional) of object value for a variable
 * Primitive Value
 * Typeof Null is object - bug
 * Assignment value
 * Converts to 0 while performing primitive operations 
 ***************/


// 19) NaN TODO:
/***************
 * Represents that value is not a legal number.
 * It's a Global Property and Primitive Value
 * Typeof NaN is number
 * isNaN() is used to check if value is NaN or not.
 * NaN != NaN //true
 * Math Operation, Number Conversion and Indeterminate form (1**Infinity) is where we frequently encounter NaN
 * Number.isNaN only if it's NaN; isNaN returns true if its going to be NaN after coercion. 
 * Array methods which finds index cant find NaN value. Where as value finding one can. (includes)
***************/


// 20) Undeclared TODO:
/***************
 * If variable is not declared in program.
 * Reference Error
 ***************/


// 21) Window v/s Document TODO:
/***************
 * Root level element in any Webpage                * Direct child of window object
 * Object of browser                                * Property of window
 * Part of BOM, Represents Browser frame            * Part of BOM (window object), which represents DOM
 * alert, confirm, prompt etc                       * getElementById, body, createElement etc
 ***************/


// 22) Global Variables TODO:
/***************
 * Variavles having global scope.
 * Variables that can be access anywhere throughout the function.
 * Var keyword is used to declare Global Variables.
 * Variable name conflict.
 * Difficult to debug code that relies on global variables.
 ***************/