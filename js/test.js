// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

const store = {
  product: [],

  addNewProduct(newProduct) {
    this.product.push(newProduct);
  },

  hasProduct(product) {
    return this.product.includes(product);
  },
};

store.addNewProduct('Apples');
store.addNewProduct('Oranges');
store.addNewProduct('Piers');
store.addNewProduct('Plumps');

console.log(store.product);
console.log(store.hasProduct('Apples'));
console.log(store.hasProduct('Tomato'));
