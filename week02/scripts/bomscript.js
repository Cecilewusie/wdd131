//declaring three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

//Creating a li element that will hold each entries chapter title and an associated delete button.
const liElement = document.createElement("li");

//Creating a delete button.
const deleteButton = document.createElement("button");

//Populating the li element variable's textContent or innerHTML with the input value.
liElement.textContent = input.value;

//Populating the button textContent with a ❌.
button.textContent = "❌";

//Appending the li element variable with the delete button.
liElement.append(deleteButton);

//Appending the li element variable to the unordered list in your HTML
list.append(liElement);
