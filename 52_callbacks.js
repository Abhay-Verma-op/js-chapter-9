//synchronous programming
// let a=prompt("What is your name")
// let b=prompt("What is your age")
// let c=prompt("What is your favourite color")
// console.log(a + " is " + b + " year old and " + c + " is favourite color ")

// asynchronous programming
// console.log("start")
//  setTimeout(function(){
//     console.log("this is good")
//  },3000)

// console.log("end")

function loadScript(src, callback){
    var script=document.createElement("script");
    script.src=src; //Sets the src attribute of the <script> element. 
    script.onload=function(){
        console.log("Loaded script with src : " + src)
        callback(null,src);
    }
    script.onerror=function(){
        console.log("Error loading with src:" + src )
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script)
}
function hello(error, src){
    if(error){
        console.log(error)
        return
    }
    alert("Hello Universe" + src)
}
function goodmorning(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("goodmorning" + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
goodmorning()