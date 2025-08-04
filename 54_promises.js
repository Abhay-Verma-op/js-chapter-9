  let promise=new Promise(function(resolve,reject){
    alert("Hello in promise")
    resolve(56)
  })
/* A Promise represents a value that may be available now, in the future, or never (async result).

It takes a function as an argument with two parameters:

    resolve: call this to succeed

    reject: call this to fail  */                                           
    

console.log("hello one")

 setTimeout(function(){
    console.log("Hello two")
 },2000)


 console .log("hello three")
 console.log(promise)