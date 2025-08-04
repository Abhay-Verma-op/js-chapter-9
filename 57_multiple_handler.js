let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },2000)
})

// p1.then((value)=>{
//     console.log(value)
// })

// p1.then((value)=>{
//     console.log(value)
// })
p1.then((value)=>{
    console.log("Congratulation this promise is now resolved")
    console.log(value)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4)
        },5000)

        })

/*   You use .then() immediately after a Promise — after the closing bracket of the new Promise(...) or another .then().  */

    }).then((value)=>{
        console.log(value)
    })

p1.then(()=>{
    console.log("Hurray")
})


/* Even though you don’t use the resolved value, the .then() block will still run once the promise is resolved. That’s because:
✅ .then() is a notification system:

Think of .then() as saying:

    “Hey, when this promise is done (resolved), run this code.”

Even if you don't care about the resolved value, you're still saying:

    "Run this function when the promise resolves."    
     
    
    is .then() required to use the value?	❌ No, you can ignore the value.
Will .then(() => {...}) still run?	✅ Yes, it runs when the promise resolves.
Why is this allowed?	Because you're reacting to the completion, not just the value.
    
    */