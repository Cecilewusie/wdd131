//declaring three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.addEventListener("click", function () {
    if(input.value.trim() != "") {
        displayList(input.value)
        chaptersArray.push(input.value);

        setChapterList();
        input.value = "";
        input.focus();
    }
})

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function displayList(item) {
    let liElement = document.createElement("li");

    //Creating a delete button.
    let deleteButton = document.createElement("button");

    //Populating the li element variable's textContent or innerHTML with the input value.
    liElement.textContent = item;

    //Populating the button textContent with a ❌.
    deleteButton.textContent = "❌";

    //this references the CSS rule .delete{width: fit-content} to size the delete button
    deleteButton.classList.add('delete');

    //Appending the li element variable with the delete button.
    liElement.append(deleteButton);

    //Appending the li element variable to the unordered list in your HTML
    list.append(liElement);

    //Adding an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener("click", function () {
        list.removeChild(liElement);
        deleteChapter(liElement.textContent);
        input.focus();
    });
    
};

function deleteChapter(chapter) {
    //reformat the chapter paramter to get rid of the ❌ that is passed on the end
    //of the chapter string when we called the deleteChapter function.
    //using string.slice() method to extract the last character
    chapter = chapter.slice(0, chapter.length - 1);

    //redefine the chaptersArray array using the array.filter method
    // to return everything except the chapter to be removed
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    setChapterList();
}

let chaptersArray = getChapterList()||[];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});