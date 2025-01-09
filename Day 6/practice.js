
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to simulate failure

    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!"); // Task successful
        } else {
            reject("Promise rejected!"); // Task failed
        }
    }, 4000);
});

// Handling the Promise
console.log("Promise started...");


myPromise
    .then((message) => {
        console.log(message); // Runs when resolved
    })
    .catch((error) => {
        console.error(error); // Runs when rejected
    });

async function promisehandle(){
    let message=await myPromise;
    console.log(message)
}
promisehandle()