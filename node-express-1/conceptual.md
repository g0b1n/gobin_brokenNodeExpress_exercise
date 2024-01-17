### Conceptual Exercise

Answer the following questions below:

-   What are some ways of managing asynchronous code in JavaScript?
    Callbacks
    Promises
    Async/Await

-   What is a Promise?
    A object representing eventual completion of a asynchronous operation. It can return true or failure.

-   What are the differences between an async function and a regular function?
    They have couple of differences:
    Syntax: Async function is written with 'async' prefix to the function declaration
    Return value: Async function always returns a Promise
    Await keyword: Inside async function you can use the 'await' keyword to pause the function in a non-blocking
    way until the Promise is resolved.

-   What is the difference between Node.js and Express.js?
    Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine. Used for building scaleable network applications.
    Its not a framework. It provides a platform to execute JavaScript on the server side.
    Express.js is a framework that sits on top of Node.js, making it easier to create web application and services.
    Express provides a layer of fundamental web application features, without obscuring Node features.

-   What is the error-first callback pattern?
    Its a convention is Node that where a callback provided to async function takes an error object as their first arguments.

-   What is middleware?
    Middleware is a function that has the access to the req object, res object and the next middleware function in the application's
    req, res cycle.

-   What does the `next` function do?
    'next' function is a part of the middleware function parameters, when invoked it passes control to the next middleware function
    in the stack. If not called within middleware function, the req, res cycle will halt and potentially leading to crash the application.

-   What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
    const elie = await $.getJSON("https://api.github.com/users/elie");
    const joel = await $.getJSON("https://api.github.com/users/joelburton");
    const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

    return [elie, matt, joel];
}
```

Issues with the code:

1. Each requests waits for the previous one to complete before starting.
   This is the inefficient way to make this requests where this requests
   do not depend on each other. We can easily make them run parallel.
2. There is no error handling, no try and catch block. If anything went
   wrong the whole app will crash.
3. Hardcoded URLs. Limits the functions flexibility and reuseability.
