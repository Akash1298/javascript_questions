# Async Await

Async and Await make promises easier to write.

- async makes a function return a Promise.
- await makes a function wait for a Promise.

## What’s the difference between Promise and Async/Await ?

- Async/Await is much cleaner and readable to write as compared to Promises. Async/Await looks like Synchronous.
- Promises has support for automatic error handling using .then() and .catch(). In Async/Await error handling is done using try and catch block.

```javascript
Promise;

const req = require("axios");
const getData = async () => {
  req
    .get("https://www.someapi/something")
    .then((resp) => {
      console.log("Resp : ", resp.data); //Handling resolved case
    })
    .catch((error) => {
      console.log("Error : ", error); //Handling rejection case
    });
};

getData();
```

```javascript
Async / Await;

const req = require("axios");
const getData = async () => {
  try {
    const resp = await req.get("https://www.someapi/something");
    console.log("Resp : ", resp.data);
  } catch (error) {
    console.log("Error : ", error);
  }
};

getData();
```
