## Theory

# Promises

A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.

- A “producing code” that does something and takes time. When the producing code obtains the result, it should call one of the two callbacks:
  - Success myResolve(result value)
  - Error myReject(error object)
- A “consuming code” that wants the result of the “producing code” once it’s ready. Consuming code must wait until the Promise is fulfilled.

````
    let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
    });

    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
    );
```javascript

````
