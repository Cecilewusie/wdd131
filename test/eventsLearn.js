const textArea = document.querySelector(".story");
const setText = document.querySelector("#set-text");
const clearText = document.querySelector("#clear-text");

setText.addEventListener("click", () => {
    textArea.textContent = "it worked"
});

clearText.addEventListener("click", () => textArea.textContent = "")

const btn = document.querySelector("button");

document.querySelector("#windowinfor").innerHTML= `windows width:${window.innerWidth}, height: ${window.innerHeight}`;

//submiting the form

const form = document.querySelector("form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const submited = document.querySelector("#submit")
const subMessage = document.querySelector("#sub-message");

let tobe = form.addEventListener("submit", (e) => {
    e.submited;
    subMessage.textContent = "submitted succesfully";
});

