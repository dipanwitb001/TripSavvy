const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
       
    }

}

export {asyncHandler}


 /* Promise.resolve(requestHandler(req, res, next)): The requestHandler is called with req, res, and next as arguments. This call is wrapped in Promise.resolve(), which ensures that even if requestHandler does not return a promise, it is treated as one. This is useful for handling both synchronous and asynchronous functions.
        
        .catch((err) => next(err)): This attaches a .catch handler to the promise. If requestHandler throws an error or rejects the promise, the error is   caught here and passed to the next function.
        next(err): Passing the error to next invokes the error-handling middleware in Express, which is designed to handle errors in a centralized manner.
        */




// Error Handling Simplification: In Express applications, handling asynchronous errors properly can be challenging. Without asyncHandler, you would need to use try-catch blocks in every async route handler or middleware to catch and pass errors to the next middleware. asyncHandler automates this process by catching all errors and forwarding them to Express's error handling mechanism.