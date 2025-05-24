//  Cache elements using getElementById and querySelector
const form = document.getElementById("name").form;
const messageBox = document.querySelector("#message");

// Create a new paragraph element Modify element using textContent & style
const newPara = document.createElement("p") ;
newPara.textContent = "Click a menu item to see more!";
newPara.style.color = "lightgreen";

// Using appendChild to add (newPara) to body
document.body.appendChild(newPara);

// Adding Event listener for input validation

