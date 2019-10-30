
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

// Creating new Div element
let newDiv = document.createElement("div");
let main = document.getElementsByClassName("main")[0];
newDiv.id = "new-div";
main.appendChild(newDiv);
newDiv.innerHTML = "the New"

// Toggle Button
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

// Additional Button to display text
let newButton1 = document.createElement("button");
newButton1.innerHTML = "New Button";
newButton1.onclick = function(){
    let newText = document.createElement("p");
    newText.innerHTML = "Thank you for viewing my profile";
    document.body.appendChild(newText);
}
document.body.appendChild(newButton1);

// Set Title for Website Link
let a = document.getElementsByTagName("a")[0];
a.setAttribute("title", "Fortini Games");
// a.innerHTML = "New New";

let strengthsList = document.getElementById("strengths").getElementsByTagName("li");
strengthsList[1].setAttribute("class", "new-class");


// }


