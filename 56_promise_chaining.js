// let p1=new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolved after two seconds")
//         resolve(56)

//     },2000)
// })
// p1.then((value)=>{
//     console.log(value)
//     let p2=new Promise((resolve,reject)=>{
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{resolve("Promise 2")},2000)

//         // return p2  return p2; inside the new Promise(...) executor function (inside the arrow function) is ignored.
//     })
  
// // No return used in return newPromise

// //     return p2  //Always return the promise from the .then() function, not from inside the new Promise() constructor.       // ❌ NOT returning p2 — next .then runs immediately

// // /*the second .then() does not wait for p2.

// // It runs immediately after the first .then() finishes.

// // p2 becomes useless and doesn't control the chain. */

// }).then((value)=>{
// console.log("we are done")
// return 2

// }).then((value)=>{
//     console.log("again done")
// })
// // console.log(p1)

// // const loadScript=(src)=>{ //src is the parameter
// //  return new Promise((resolve,reject)=>{
 
    
// //     let script=document.createElement("script")
// //     script.src=src // Sets the src attribute of the <script> element.
// //     document.body.appendChild(script)
// //     script.onload=()=>{
// //         resolve("Script has been loaded")
// //     }
// //     script.onerror=()=>{
// //         reject(0)
// //     }
// //  })
 
// // }
// //  let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
// //  p1.then((value)=>{
// //     console.log(value)
// //     return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
// //  }).then((value)=>{
// //     console.log("this is second script")
// //  })

// //  .catch((error)=>{
// //     console.log("sorry for error this script takes some times to handle this error")
//  })