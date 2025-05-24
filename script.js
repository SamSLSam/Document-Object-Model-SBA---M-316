//  Cache elements using getElementById and querySelector
const form = document.getElementById("name").form;
const messageBox = document.querySelector("#message");

// Create a new paragraph element Modify element using textContent & style
const newPara = document.createElement("p") ;
newPara.textContent = "Click a menu item to see more!";
newPara.style.color = "lightgreen";

// Using appendChild to add (newPara) to body
document.body.appendChild(newPara);

// Adding Event listener for input validation & Browser Object Model: preventDefault() Alerts if name too short
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

// Using firstElementChild to Navigate elements with parent-child-sibling relationship(First nav text yellow)
const menu = document.querySelector(".menu");
const firstMenuItem = menu.firstElementChild;
firstMenuItem.style.color = "yellow"

// Using DocumentFragment to add multiple elements(2 paragraphs) and an Extra paragraph
const fragment = document.createDocumentFragment();
for ( let i = 0; < 2; i++){
    const tempPara = document.createElement("p");
    tempPara.textContent = "Generated content" + (i + 1);
    fragment.appendChild(tempPara);
    document.body.appendChild(fragment)
}

// Using BOM properties 
