let p1=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am resolve")
        resolve(true)
        // reject(new Error("I am also rejected"))
    },5000)
})

let p2=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and i am rejected")
        reject(new Error("I am an error"))
    },5000)
})

// To get the value p1 ke baad tab kya hoo
p1.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})

// Catch the error

// p2.catch((error)=>{
//     console.log("Some error in p2")
// })

p2.then((value)=>{
    console.log(value)

},(error)=>{
    console.log(error)
})
// console.log(p1,p2)

// "Parallely" = Do multiple things together instead of one by one.
// Parallely" means "at the same time" or "simultaneously."


// let promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("done")
//         reject(new Error("Some error"))
//     },1000)
// })
// promise.then(alert)

// promise.catch(alert)