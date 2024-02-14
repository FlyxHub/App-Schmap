from flask import Flask, render_template, request

app = Flask(__name__)

# Dictionary to store burger ingredients and their prices
ingredients = {
    "lettuce": 0.50,
    "tomato": 0.50,
    "cheese": 1.00,
    "bacon": 1.50,
    "onion": 0.50,
    "pickle": 0.50,
    "ketchup": 0.25,
    "mustard": 0.25,
    "mayo": 0.25
}

# Default burger with no ingredients
default_burger = {
    "lettuce": 0,
    "tomato": 0,
    "cheese": 0,
    "bacon": 0,
    "onion": 0,
    "pickle": 0,
    "ketchup": 0,
    "mustard": 0,
    "mayo": 0
}

@app.route('/')
def index():
    return render_template('index.html', ingredients=ingredients)

@app.route('/build', methods=['POST'])
def build_burger():
    selected_ingredients = request.form
    total_price = 0
    selected_items = {}
    for ingredient, quantity in selected_ingredients.items():
        if int(quantity) > 0:
            selected_items[ingredient] = int(quantity)
            total_price += int(quantity) * ingredients[ingredient]
    return render_template('burger.html', selected_items=selected_items, total_price=total_price)

if __name__ == '__main__':
    app.run(debug=True)
