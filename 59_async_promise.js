 
async function harry(){



 let DelhiWeathar=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 Deg")
    },3000)
 })
 let BangaloreWeathar=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("21 Deg")
    },6000)
 })
 

// DelhiWeathar.then(alert)
// BangaloreWeathar.then(alert)

console.log("Fetching Delhi Weateher Please Wait")
let delhiW=await DelhiWeathar
console.log("Fetched Delhi Weather: " + delhiW)


console.log("Fetching Bangolore Weather Please Wait")
let bangaoloreW=await BangaloreWeathar
console.log("Fetched Bangolore Weather: " + bangaoloreW)

return[delhiW,bangaoloreW]


/* DelhiWeathar.then(alert);              // ✅ direct function use
DelhiWeathar.then((val) => alert(val)); // ✅ same thing, with arrow function

Both do the same thing!

*/


// Async Await -> When we want to stop the execution then we will use await     
// 


//  Waits for Delhi first (1s), then Bangalore (6s).

    // Total wait time = 7 seconds.



// 👉 These calls are sequential, not parallel.


}
harry()
// const cherry=async()=>{
//     console.log("Hey i am cherry and i am  waiting")

// }

// const main= async()=>{



// console.log("Welcome to weather control room")

// let a=await harry()
// let b=await cherry()
// // a.then((value)=>{
// //     console.log(value)
// }

// // let a=harry()
// // console.log(a)

// //  function harry(){
// //     return 5

// // }
// //  harry().then((x)=>{
// //     console.log(x)
// //  })
// }
// main()

// 🔁 return in JavaScript

// The return statement is used inside a function to:

    // End the function’s execution immediately.

    // Send a value back to the place where the function was called.

