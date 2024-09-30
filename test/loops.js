myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    Phones: ["Xr", "X", "13 pro max"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
};

//document.querySelector("#places-lived").innerHTML = myInfo.placesLived.map(element => `<dt>${element.place}</dt><dd>${element.length}</dd>`).join("");
function foodTemplate (food) {
  return `<li>${food}</li>`;
};
function placesLivedTemp (places) {
  return `<dt>${places.place}</dt><dd>${places.length}</dd>`;
};

function generateHtml (list, template) {
  const smallHtml = list.map(template);
  return smallHtml.join("");
};

document.querySelector("#places-lived").innerHTML = generateHtml(myInfo.placesLived, placesLivedTemp);
document.querySelector("#favorite-foods").innerHTML = generateHtml(myInfo.favoriteFoods, foodTemplate);

// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// document.querySelector("#favorite-foods").appendChild(favoriteFood1);

//-for each elementn in the favoriteFoods array, we will iterate through it
//-create an empty list Element(li) in our document,
//-set the text contents of the empty li to each iterated element in our array 
//-and lastly select the id of which we want its contents to be replaced
//- and we add each li element with its content into it.

//using .forEach function
// myInfo.favoriteFoods.forEach(element => {
//   let Els = document.createElement("li");
//   Els.textContent = element;
//   let send = document.querySelector("#favorite-foods").appendChild(Els);
//   return send;
// });

// //using .map function
// myInfo.hobbies.map(element => {
//   let Els = document.createElement("li");
//   Els.textContent = element;
//   let send = document.querySelector("#hobbies").appendChild(Els);
//   return send;
// });

// document.querySelector("#phones").innerHTML = myInfo.Phones.map(element => `<li>iphone ${element}</li>`).join("");

