let p1 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve('Value 1');
    // reject(new Error("Error"))
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("Value 2");
  }, 4000);
});

let p3 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("Value 3");
  }, 6000);
});

console.log(p1,p2,p3)

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })
   
// METHODS OF PROMISE

// let promise_all=Promise.all([p1,p2,p3])
// let promise_all=Promise.allSettled([p1,p2,p3]) // If any one promise failed use this all settled and they settled the promise without error and run the code ( Sending notifications to multiple channels (email, SMS, Slack))
// let promise_all=Promise.race([p1,p2,p3])  
// let promise_all=Promise.any([p1,p2,p3])  
// let promise_all=Promise.resolve(6)  
// let promise_all=Promise.resolve(new Error("Hey"))  
// promise_all.then((value)=>{
//     console.log(value)
// })

// chinku.then((value)=>{
//     console.log(value)
// })
  
//  Promise.all best example instagram  
 /* We want to fetch user data, posts, and comments from a (dummy) API. All three fetch calls can be made at the same time (they are independent). We want to wait until all three are complete, then process the data together.  */



