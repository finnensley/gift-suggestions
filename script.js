// STEP 1: Create an object called giftIdeas
// Each key (Mom, Friend, Child) holds an array of 3 gift suggestions
const giftIdeas = {
    Mom: ["Flowers", "Spa Giftcard", "Card"],
    Friend: ["Ticket To Fav Sport", "Giftcard", "Book"],
    Child: ["Bubbles", "Sidewalk Chalk", "Rocket Launcher"]
};

// STEP 2: Select the dropdown, button, and results <div> from the HTML
const dropdown = document.getElementById("person-select");
const btn = document.getElementById("suggest-btn");
const results = document.getElementById("gift-results");

// STEP 3: Add a click event to the button
// When clicked, a function will run
btn.addEventListener("click", function(){ 
    showSuggestions(dropdown.value);
});
// STEP 4: Inside the function:
// - get the value from the dropdown using .value
// - use if/else:
//   - if that value exists as a key in giftIdeas, loop through it with forEach
//     - for each item, create a <p>, set textContent, and append it to the results div
//   - else show “No gift ideas available.”

function showSuggestions(person) {
    results.innerHTML = "";
    if (giftIdeas[person]) {
        giftIdeas[person].forEach(function(suggestion) {
            const gifts = document.createElement("p");
            gifts.textContent = suggestion;
            results.appendChild(gifts);
        });
    } else {
        results.textContent = "No gift ideas available.";
    }
    
};


//Questions/Answers:
//1. addEventListener (...showSuggestions(dropdown.value)) is written before making up
// name of the function. So, think about it like here is where you are calling the function that you are about to write
//what are you naming it below. 

//2. before the forEach need if(giftIdeas[person]) to access the array first and check that the key exists; otherwise will get undefined

//3:option values on HTML must match the keys for giftIdeas on script.js; mom != Mom; changed HTML to Mom and it worked