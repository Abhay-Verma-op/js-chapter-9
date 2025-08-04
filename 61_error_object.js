try{
let age=prompt("Enter Your Age")
age=Number(age)
if(age>150){
throw new ReferenceError("This is probably not true")
}

    // console.log(harry)
//   throw new ReferenceError("Harry is not good")
}
catch(error){
console.log(error.name)
console.log(error.message)
console.log(error.stack)
}
console.log("The script is still running")