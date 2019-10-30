
/*
* JAVASCRIPT FUNCTION
* @parameter: This does ____
*
* Notes: Lorem ipsum justo vel
* */
// Toggle Function
// let toggleFunction = function(){
//     var x = document.getElementById("new-div");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

console.log("This outputs into the console.");

let newDiv = document.createElement("div");
let main = document.getElementsByClassName("main")[0];
newDiv.id = "new-div";
main.appendChild(newDiv);
newDiv.innerHTML = "the New"

// let runFunction = function(){
let toggleButton = document.createElement("button");
toggleButton.innerHTML = "Toggle";
toggleButton.onclick = function(){
    var x = document.getElementById("new-div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.body.appendChild(toggleButton);

let a = document.getElementsByTagName("a")[0];
a.setAttribute("title", "Fortini Games");
// a.innerHTML = "New New";

let strengthsList = document.getElementById("strengths").getElementsByTagName("li");
strengthsList[1].setAttribute("class", "new-class");


// }


