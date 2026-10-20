
// 1. BASE CLASS: FoodItem (Encapsulation)
class FoodItem {
  #name;
  #price;

  constructor(name, price) {
    this.#name = name;
    this.setPrice(price); /
  }

  // Controlled access to private price property (Encapsulation)
  setPrice(price) {
    if (price >= 0) {
      this.#price = price;
    } else {
      console.log(`[Error]: Invalid price for ${this.#name}. Price cannot be negative.`);
    }
  }

  getPrice() {
    return this.#price;
  }

  getName() {
    return this.#name;
  }

  // Base methods to be overridden (Polymorphism)
  getDeliveryFee() {
    return 0;
  }

  getItemType() {
    return "Generic Food";
  }
}

// 2. SUBCLASSES (Inheritance & Polymorphism)


class Pizza extends FoodItem {
  constructor(name, price, size) {
    super(name, price);
    this.size = size; // Specific property for Pizza
  }

  getDeliveryFee() {
    return 25.00; // Pizza-specific delivery fee
  }

  getItemType() {
    return "Pizza";
  }
}

class Burger extends FoodItem {
  constructor(name, price, hasCheese) {
    super(name, price);
    this.hasCheese = hasCheese; // Specific property for Burger
  }

  getDeliveryFee() {
    return 15.00; // Burger-specific delivery fee
  }

  getItemType() {
    return "Burger";
  }
}

class Drink extends FoodItem {
  constructor(name, price, volume) {
    super(name, price);
    this.volume = volume; // Specific property for Drink
  }

  getDeliveryFee() {
    return 5.00; // Drink-specific delivery fee
  }

  getItemType() {
    return "Drink";
  }
}


class Dessert extends FoodItem {
  constructor(name, price, isSweet) {
    super(name, price);
    this.isSweet = isSweet; // Specific property for Dessert
  }

  getDeliveryFee() {
    return 10.00; // Dessert-specific delivery fee
  }

  getItemType() {
    return "Dessert";
  }
}

// 3. ORDER MANAGEMENT SYSTEM (Abstraction)

class Order {
  constructor() {
    this.items = []; 
  }

  addItem(foodItem) {
    this.items.push(foodItem);
    console.log(`Added: ${foodItem.getName()} (${foodItem.getItemType()}) to order.`);
  }

  // Requirement: Remove items if needed
  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      const removed = this.items.splice(index, 1);
      console.log(`Removed: ${removed[0].getName()} from order.`);
    } else {
      console.log("Invalid item index for removal.");
    }
  }

  calculateFoodTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.getPrice();
    }
    return total;
  }

  calculateDeliveryTotal() {
    let totalDelivery = 0;
    for (let item of this.items) {
      totalDelivery += item.getDeliveryFee();
    }
    return totalDelivery;
  }

  calculateFinalTotal() {
    return this.calculateFoodTotal() + this.calculateDeliveryTotal();
  }

  // Abstraction & Order Summary Display (Requirement 6)
  displayOrderSummary() {
    console.log("\n=======================================================");
    console.log("               Food Delivery Order Summary             ");
    console.log("=======================================================");
    console.log("Item Name          | Type     | Price     | Delivery Fee");
    console.log("-------------------------------------------------------");

    for (let item of this.items) {
      console.log(
        `${item.getName().padEnd(18)} | ${item.getItemType().padEnd(8)} | R${item.getPrice().toFixed(2).padEnd(7)} | R${item.getDeliveryFee().toFixed(2)}`
      );
    }

    console.log("-------------------------------------------------------");
    console.log(`Food Total:        R${this.calculateFoodTotal().toFixed(2)}`);
    console.log(`Delivery Total:    R${this.calculateDeliveryTotal().toFixed(2)}`);
    console.log(`FINAL TOTAL:       R${this.calculateFinalTotal().toFixed(2)}`);
    console.log("=======================================================\n");
  }
}

// 4. TESTING CODE & SCENARIOS 

console.log("--- STARTING SYSTEM TESTS ---");

// Create an empty order
const customerOrder = new Order();

// Create food items across different classes
const pizza = new Pizza("Regina", 120.00, "Large");
const burger = new Burger("Zinger Burger", 65.00, true);
const drink = new Drink("Coke", 20.00, "500ml");
const dessert = new Dessert("Malva Pudding", 45.00, true);

// Test Encapsulation & Invalid Price Handling
console.log("\n[Test]: Testing invalid price encapsulation...");
pizza.setPrice(-50); // Should trigger invalid price error message
console.log(`Verified Price of Pizza remains: R${pizza.getPrice()}`);

// Add items to the order
console.log("\n[Test]: Adding items to order...");
customerOrder.addItem(pizza);
customerOrder.addItem(burger);
customerOrder.addItem(drink);
customerOrder.addItem(dessert);

// Display initial summary
customerOrder.displayOrderSummary();

// Test item removal functionality
console.log("[Test]: Removing the drink from the order...");
customerOrder.removeItem(2); // Removes 'drink' at index 2


customerOrder.displayOrderSummary();
