# Review Questions

## What is Node.js?
  A - Node is a runtime environment used to run JS outside of the browser. 

## What is Express?
  A - Express is a framework used to spin up web servers on top of Node.js

## Mention two parts of Express that you learned about this week.
  A - Middleware and Routing

## What is Middleware?
  A - a function that intercepts the request or response, then it either does operations on them or call the following Middleware

## What is a Resource?
  A - Everything is a resource. Each resource will have a unique URI and can have multiple representations. 

## What can the API return to help clients know if a request was successful?
  A - it returns a status code of 200

## How can we partition our application into sub-applications?
  A- we can partition it by using Routes

## What is express.json() and why do we need it?
  A - express.json is a middleware that allows us to parse the body object when doing a request. Without it, the body would come back as undefined. 
