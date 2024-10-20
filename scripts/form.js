const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const select = document.querySelector("#product")

function createProductOption(product) {
    // creating option element
    let option = document.createElement("option");

    //setting the attributes and textContent
    option.textContent = product.name;
    option.setAttribute("value", product.id);

    return option;
};

// select.addEventListener('click', () => {
//     // this will clear the options before the mapping is done on each click
//     //otherwise on each click, the old options will stay and new one will be 
//     //created in addition to the old ones make it duplicate on each click
//     select.innerHTML = `<option value="" disabled selected>Select a product... &#9662;</option>`

//     //mapping through each element in the products array
//     //to create options elements and append it to the
//     //select element
//     products.forEach(product => {
//         let option = createProductOption(product)
//         select.appendChild(option);
//     })
// })

// Populating the dropdown once on page load
window.addEventListener('DOMContentLoaded', () => {
    select.innerHTML = `<option value="" disabled selected>Select a product... &#9662;</option>`;
    
    products.forEach(product => {
        let option = createProductOption(product);
        select.appendChild(option);
    });
});
