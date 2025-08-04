// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src; //Sets the src attribute of the <script> element.
//   script.onload = function () {
//     console.log("Loaded script with src : " + src);
//     callback(null, src);
//   };
//   script.onerror = function () {
//     console.log("Error loading with src:" + src);
//     callback(new Error("Src got some error"));
//   };
//   document.body.appendChild(script);
// }
// function hello(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Hello Universe" + src);
// }
// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap2@5.3.7/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap3@5.3.7/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap4@5.3.7/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap5@5.3.7/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap6@5.3.7/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
// // );
// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap6@5.3.7/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
// // );
// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap6@5.3.7/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback(); // ← this is the callback being called
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Abhay", sayBye);
