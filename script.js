//  Cache elements using getElementById and querySelector
const form = document.getElementById("name").form;
const messageBox = document.querySelector("#message");

// Create a new paragraph element Modify element using textContent & style
const newPara = document.createElement("p") ;
newPara.textContent = "Click a menu item to see more!";
newPara.style.color = "lightgreen";

// Using appendChild to add (newPara) to body
document.body.appendChild(newPara);

// Adding Event listener for input validation & Browser Object Model: preventDefault()
form.addEventlistner("Submit", function (event) {
    const nameInput = document.getElementById("name").value; 
    If (nameInput.length < 3) {
        alert("Name must be at least 3 characters long");
        event.preventDefault();
    }
});

// On interaction messageBox Modififcation on Form input changes trigger border and placeholder update 
messageBox.addEventListener("input", function(){
    if (messageBox.value.length > 0) {
        messageBox.style.border = "2px solid green";
        messageBox.setAttribute("placeholder", "Keep Trying...");
    }
});
