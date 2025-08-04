const f=()=>{

try {
  let a = 0;
//   console.log(program)
  console.log("Program can run successfully");
  return
} catch (err) {
  console.log("This is an error");
  console.log(cheery);
} finally {
  console.log("This is always run");

// if we return the function before the (finally) then the finally clause will be run no one can stop the finally clause

  // Close the file
  // Exit the loop
  // Write to the log file
}

}
f()

console.log("end")

//they run after the finally clause