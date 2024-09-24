const year = document.querySelector("#currentyear");
const todaysDate = new Date();

year.innerHTML = `${todaysDate.getFullYear()}`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last date page was modified ${document.lastModified}`;

const Remaining = document.querySelector("#monthsRemaining");
const birthmonth = 9;
if (birthmonth > todaysDate.getMonth()) {
    Remaining.innerHTML = `${birthmonth-todaysDate.getMonth()}`;
} else {
    Remaining.innerHTML = `${todaysDate.getMonth() - birthmonth}`
};