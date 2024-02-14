// script.js
const ingredients = {
    bun: 0.50,
    cheese: 0.25,
    patty: 1.00,
    // Add other ingredients as needed
};

let burger = {
    bun: 0,
    cheese: 0,
    patty: 0,
    // Initialize other ingredients
};

const burgerList = document.getElementById("burger-list");
const totalPriceElement = document.getElementById("total-price");

function updateBurgerView() {
    burgerList.innerHTML = '';
    Object.keys(burger).forEach(ingredient => {
        if (burger[ingredient] > 0) {
            let li = document.createElement('p');
            li.textContent = `${ingredient} x${burger[ingredient]}`;
            burgerList.appendChild(li);
        }
    });
    calculatePrice();
}

function calculatePrice() {
    let totalPrice = 0;
    Object.keys(burger).forEach(ingredient => {
        totalPrice += ingredients[ingredient] * burger[ingredient];
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

document.querySelectorAll('.ingredients button').forEach(button => {
    button.addEventListener('click', () => {
        const ingredient = button.id.replace('add-', '');
        if (burger.hasOwnProperty(ingredient)) {
            burger[ingredient]++;
            updateBurgerView();
        }
    });
});

updateBurgerView(); // Initial update
