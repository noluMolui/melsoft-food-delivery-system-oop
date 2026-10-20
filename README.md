# Food Delivery System - OOP Practical

A JavaScript console application developed to demonstrate core Object-Oriented Programming (OOP) principles through a simulated food delivery system.

## Project Overview
This project allows users to:
- Create various food items with specific properties.
- Add items to an order using arrays.
- Calculate item costs, specific delivery fees, and final order totals dynamically.
- Manage order contents by adding or removing items.

## OOP Principles Demonstrated
1. **Encapsulation:** Sensitive properties (such as item price and name) are kept private using `#` syntax and are safely managed through validation getters and setters.
2. **Inheritance:** Specific food types (`Pizza`, `Burger`, `Drink`, `Dessert`) inherit common functionality and properties from a parent `FoodItem` class.
3. **Abstraction:** Complex underlying array management, looping, and calculations are hidden inside the `Order` class methods, providing a clean interface for users.
4. **Polymorphism:** Subclasses override the `getDeliveryFee()` and `getItemType()` methods so that each food type calculates its own unique delivery fee dynamically.

## Technologies Used
- JavaScript (ES6+ Classes, Private Fields, Arrays, Loops)
- Node.js (for execution and testing)

## How to Run the Project
1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone or download this repository.
3. Open your terminal in the project directory and run the following command:
   ```bash
   node app.js
