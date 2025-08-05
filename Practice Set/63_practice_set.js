// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => {
//       resolve(src +  " done success ");
//     };
//     document.head.append(script);
//   });
// };

// let a =  loadScript(

//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
//   );

//   a.then((value)=>{
//     console.log(value)
//   })

// // const main = async () => {
// //     console.log(new Date().getMilliseconds())
// //   let a = await loadScript(

// //     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
// //   );
// //   console.log(a)
// //   console.log(new Date().getMilliseconds())
// // };
// // main()

// let p =()=>{
//   return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//         reject(new Error("Please this is not acceptable"))
//       },3000)
// });
// }
// let a=async()=>{
//   try{
//   let c= await p()
//   console.log(c)
//   }
//   catch(error){
//     console.log("This error is handled")
//   }
// }


// a()


let p1=async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("value1")
    },1000)
  })
}

let p2=async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("value2")
    },2000)
  })
}

let p3=async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("value3")
    },3000)
  })
}


const main=async()=>{
  console.time("run")
  // let a1=await p1()
  // // console.log(a1)
  // let a2=await p2()
  // // console.log(a2)
  // let a3=await p3()
  // console.log(a3)
  // console.log(a1,a2,a3)
  let a1=p1()
  let a2=p2()
  let a3=p3()
  let a1a2a3=await Promise.all([a1,a2,a3])  // They run parallely not sequential
  console.log(a1a2a3)

  console.timeEnd("run")
}
main()



// optional
//let img = document.createElement("img");
// img.src = "dog.jpg"; // sets the image file to load
//  End