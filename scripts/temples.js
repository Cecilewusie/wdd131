const humbutton = document.querySelector(".menu");
const navB = document.querySelector("nav");
 
//adding event to the humbutton
humbutton.addEventListener("click", ()=> {
    navB.classList.toggle("show");
    humbutton.classList.toggle("show");
})
