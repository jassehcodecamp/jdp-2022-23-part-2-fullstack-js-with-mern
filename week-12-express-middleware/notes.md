## Express Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.

In a middleware function, you can:

- have and execute any code you want
- make changes to the request and response objects as you wish
- end the request by returning a response using the response (res) object
- or pass the request to the next middleware in the pipeline with the **next()** function.

It is important to note that if you don't end the request-response cycle in the current middleware, then you must call the **next()** function. If you don't the request will be hanging in there forever.

## Express Middleware Functions

There are 5 different types of middleware functions you can have in Express:

1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware