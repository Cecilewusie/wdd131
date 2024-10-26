const humbutton = document.querySelector(".menu");
const navB = document.querySelector("nav");
 
//adding event to the humbutton
humbutton.addEventListener("click", ()=> {
    navB.classList.toggle("show");
    humbutton.classList.toggle("show");
})

const carBrands = [
    {
        brand: "Toyota",
        models: [
            {
                modelTitle: "Toyota",
                modelName: "Corolla",
                year: 2020,
                engine: "1.8L 4-cylinder",
                fuelType: "Petrol",
                price: "$20,000 - $25,000",
                features: ["Bluetooth", "Adaptive Cruise Control", "Backup Camera"],
                imageUrl: "car-images/toyota/toyota-corolla-2020.webp"
            },
            {
                modelTitle: "Toyota",
                modelName: "Camry",
                year: 2021,
                engine: "2.5L 4-cylinder",
                fuelType: "Petrol",
                price: "$25,000 - $30,000",
                features: ["Navigation", "Heated Seats", "Lane-Keeping Assist"],
                imageUrl: "car-images/toyota/toyota-camry-2021.webp"
            },
            // Additional Toyota models...
        ]
    },
    {
        brand: "Honda",
        models: [
            {
                modelTitle: "Honda",
                modelName: "Civic",
                year: 2020,
                engine: "2.0L 4-cylinder",
                fuelType: "Petrol",
                price: "$20,000 - $25,000",
                features: ["Rearview Camera", "Lane Assist", "Keyless Entry"],
                imageUrl: "car-images/honda/honda-civic-2022.webp"
            },
            {
                modelTitle: "Honda",
                modelName: "Accord",
                year: 2021,
                engine: "1.5L Turbocharged",
                fuelType: "Petrol",
                price: "$25,000 - $30,000",
                features: ["Blind Spot Monitoring", "Dual-Zone Climate Control", "Apple CarPlay"],
                imageUrl: "car-images/honda/honda-accord-2021.webp"
            },
            // Additional Honda models...
        ]
    },
    {
        brand: "BMW",
        models: [
            {
                modelTitle: "BMW",
                modelName: "3 Series",
                year: 2020,
                engine: "2.0L Turbocharged",
                fuelType: "Petrol",
                price: "$35,000 - $45,000",
                features: ["Sport Seats", "Harman Kardon Sound System", "Navigation"],
                imageUrl: "car-images/bmw/BMW-3-series-2022.webp"
            },
            {
                modelTitle: "BMW",
                modelName: "X5",
                year: 2021,
                engine: "3.0L Turbocharged",
                fuelType: "Petrol",
                price: "$60,000 - $70,000",
                features: ["Adaptive Suspension", "Leather Interior", "AWD"],
                imageUrl: "car-images/bmw/BMW-X5-2021.webp"
            },
            // Additional BMW models...
        ]
    },
    {
        brand: "Mercedes-Benz",
        models: [
            {
                modelTitle: "Mercedes-Benz",
                modelName: "C-Class",
                year: 2020,
                engine: "2.0L Turbocharged",
                fuelType: "Petrol",
                price: "$40,000 - $50,000",
                features: ["Premium Leather", "Burmester Sound System", "Lane-Keeping Assist"],
                imageUrl: "car-images/benz/Mercedes-Benz-C-Class-2020.webp"
            },
            {
                modelTitle: "Mercedes-Benz",
                modelName: "GLE",
                year: 2021,
                engine: "3.0L Turbocharged",
                fuelType: "Petrol",
                price: "$55,000 - $70,000",
                features: ["Panoramic Roof", "MBUX", "4MATIC AWD"],
                imageUrl: "car-images/benz/Mercedes-Benz-gle-2020.webp"
            },
            // Additional Mercedes-Benz models...
        ]
    },
    {
        brand: "Ford",
        models: [
            {
                modelTitle: "Ford",
                modelName: "Mustang",
                year: 2020,
                engine: "5.0L V8",
                fuelType: "Petrol",
                price: "$35,000 - $45,000",
                features: ["Launch Control", "Sports Suspension", "Performance Brakes"],
                imageUrl: "car-images/ford/ford-mustang-2020.jpg"
            },
            {
                modelTitle: "Ford",
                modelName: "F-150",
                year: 2021,
                engine: "3.5L V6",
                fuelType: "Petrol",
                price: "$30,000 - $50,000",
                features: ["Trailer Assist", "4WD", "Ford Sync"],
                imageUrl: "car-images/ford/ford-150-2019.jpg"
            },
            // Additional Ford models...
        ]
    }
];

// reference to elemets on the html

// creating the template for the inner html
// Template for each car brand model
function carBrandTemplate(model) {
    return `
        <div class="car-container">
            <h2>${model.modelTitle} ${model.modelName}</h2>
            <img src="${model.imageUrl}" alt="${model.modelName}" loading="lazy">
            <p class="car-year">${model.year} ${model.modelTitle}</p>
            <div class="car-information">
                <p><strong>Engine:</strong> ${model.engine}</p>
                <p><strong>Fuel Type:</strong> ${model.fuelType}</p>
                <ul><strong>Features:</strong>
                    ${model.features.map(feature => `<li>${feature}</li>`).join("")}
                </ul>
                <p class="price">${model.price}</p>
                <p class="cart-message"></p>
                <button class="add-to-cart">Add to Cart 🛒</button>                
            </div>
        </div>
    `;
}

//creating a local storage to store items selected
//This function will add selected car model to the local storage i will create
function addToCart(model) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];  //this will get either saved items in the local storage or empty storage array

    //checking to see if car is already in the cart by comparing the model name and year
    const existingItem = cartItems.find(item => item.modelName == model.modelName && item.year == model.year)

    if(!existingItem) {
        cartItems.push(model);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
}

// Function to render car HTML based on selected brand and display brand title
function createCarHtml(filteredBrands, brandName = "") {
    const titleHtml = brandName ? `<h2 class="brand-title">${brandName}</h2>` : "";
    const carsHtml = filteredBrands.map(brand => brand.models.map(carBrandTemplate).join("")).join("");
    document.querySelector(".imagesWithCap").innerHTML = titleHtml + carsHtml;

    // Adding event listeners to each 'Add to Cart' button after rendering
    const cartButtons = document.querySelectorAll(".add-to-cart");
    cartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // flatting the items in the filteredBrands
            const model = filteredBrands.flatMap(brand => brand.models)[index];
            addToCart(model);

            const cartMessage = button.previousElementSibling; // Getting the .cart-message for the specific car card
            cartMessage.textContent = "Successfully added to cart!";
        });
    });
}

// Function to handle filter by brand name
function filterByBrand(brandName) {
    const filteredBrands = carBrands.filter(brand => brand.brand === brandName);
    createCarHtml(filteredBrands, brandName);
}

// Adding event listeners for each button
document.querySelector("#bmw").addEventListener('click', () => filterByBrand("BMW"));
document.querySelector("#benz").addEventListener('click', () => filterByBrand("Mercedes-Benz"));
document.querySelector("#honda").addEventListener('click', () => filterByBrand("Honda"));
document.querySelector("#toyota").addEventListener('click', () => filterByBrand("Toyota"));
document.querySelector("#ford").addEventListener('click', () => filterByBrand("Ford"));

// Initially displaying all cars without a specific brand title
createCarHtml(carBrands);


