//create variable to select IDs
const form = document.querySelector("#dog");
const input = document.querySelector("#dogName");
const list = document.querySelector("#list");

//add event listener
form.addEventListener("submit", function (e){
    //prevent the form from submitting
    e.preventDefault();
    //saves input into a variable
    const dogName = input.value;
    //creates a new list item in the html
    const newLI = document.createElement("LI"); 
    //sets the list item value to the value of dogName variable
    newLI.innerText = dogName;
    //displays dogName values
    list.append(newLI);

    dogName.reset();
});
