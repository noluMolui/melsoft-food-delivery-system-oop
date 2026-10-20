
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
