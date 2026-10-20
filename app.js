
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
