// Write your code here!
const testVar = "hi"

// Enter the code to remove the node element here 
document.querySelector("main#main").remove();

//Create your new element here and assign it to newHeader 
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = " Dominic is the champion!";// my name
newHeader.className = "victory";