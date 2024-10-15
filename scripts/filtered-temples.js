const humbutton = document.querySelector(".menu");
const navB = document.querySelector("nav");
 
//adding event to the humbutton
humbutton.addEventListener("click", ()=> {
    navB.classList.toggle("show");
    humbutton.classList.toggle("show");
})

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Greater Accra, Accra",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg"
    },
    {
        templeName: "Columbus Ohio Temple",
        location: "Columbus Ohio",
        dedicated: "1999, September, 4",
        area: 11745,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbus-ohio/400x250/columbus-temple-lds-406110-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Roma Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
    }
  ];

function cardsTemplate(card) {
    return `<section class="image-card">
            <h3>${card.templeName}</h3>
            <p><span>Location:</span> ${card.location}</p>
            <p><span>Dedicated:</span> ${card.dedicated}</p>
            <p><span>size:</span> ${card.area} sq ft</p>
            <img src="${card.imageUrl}" alt="${card.templeName}" loading="lazy">
            </section>`
}

// creating the temple cards in my own way
function createTempleCard(array) {
    const html = array.map(cardsTemplate).join(" ");
    document.querySelector(".imagesWithCap").innerHTML = html;
}

// calling the card
createTempleCard(temples);

//references to be used for the navigation
const LargeLink = document.querySelector("#large");
const homeLink = document.querySelector("#Home");
const smallLinke = document.querySelector("#small");
const oldLink = document.querySelector("#Old");
const newLink = document.querySelector("#New");

//function to extract the year from the 'dedicated' string
function getYear(dedicatedString) {
    return parseInt(dedicatedString.split(',')[0], 10);
}

//Event listeners and handlers
//home link
homeLink.addEventListener('click', ()=>{
    createTempleCard(temples)
});

//Old Link
oldLink.addEventListener('click', ()=> {
    const oldTemples = temples.filter(temple => getYear(temple.dedicated) < 1900)
    createTempleCard(oldTemples);
});

//New Link
newLink.addEventListener('click', () => {
    const oldTemples = temples.filter(temple => getYear(temple.dedicated) > 2000)
    createTempleCard(oldTemples);    
});

//Large Link
LargeLink.addEventListener('click', ()=> {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
});

//small link
smallLinke.addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000)
    createTempleCard(smallTemples);
});









