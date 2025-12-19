// ======= task-01 ======= //

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order('Smoked'));
// console.log(pizzaPalace.order('Four meats'));
// console.log(pizzaPalace.order('Big Mike'));
// console.log(pizzaPalace.order('Viennese'));

// ======================= //
// ======= task-02 ======= //

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(child.name);
// console.log(child.surname);
// console.log(child.age);
// console.log(child.heritage);

// console.log(parent.isPrototypeOf(child));
// console.log(child.isPrototypeOf(parent));

// console.log(child.hasOwnProperty('name'));
// console.log(child.hasOwnProperty('surname'));

// ======================= //
// ======= task-03 ======= //

// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// ======================= //
// ======= task-04 ======= //

// Додай класу Car метод constructor, який приймає три параметри:
// brand - марка автомобіля
// model - модель автомобіля
// price - ціна автомобіля
// Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const firstCar = new Car('Audi', 'Q3', 36000);
// const secondCar = new Car('BMW', 'X5', 58900);
// const thirdCar = new Car('Nissan', 'Murano', 31700);

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);

// ======================= //
// ======= task-05 ======= //

// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }

// const firstCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const secondCar = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const thirdCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);

// ======================= //
// ======= task-06 ======= //

// Додай класу Car два методи.
// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const firstCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const secondCar = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const thirdCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);

// ======================= //
// ======= task-07 ======= //

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості
// getBrand() - повертає значення приватної властивості brand
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand

// class Car {
//   #brand;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// const firstCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const secondCar = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const thirdCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);

// ======================= //
// ======= task-08 ======= //

// Виконай рефакторинг класу Car
// Додатково до приватної властивості #brand зроби приватними властивості model і price
// Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// ======================= //
// ======= task-09 ======= //

// Виконай рефакторинг класу Car
// Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля
// Додай сеттеру price перевірку значення параметра newPrice, що передається
// Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля
// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price

// class Car {
//   static maxPrice = 50000;

//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price);

// audi.price = 49000;
// console.log(audi.price);

// audi.price = 51000;
// console.log(audi.price);

// ======================= //
// ======= task-10 ======= //

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля
// Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice
// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum"
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits"
// Під оголошенням класу додано ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price)

class Car {
  static #maxPrice = 50000;

  constructor(params) {
    this.price = params.price;
  }

  static checkPrice(price) {
    if (price > Car.#maxPrice) {
      return 'Error! Price exceeds the maximum';
    }
    return 'Success! Price is within acceptable limits';
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ======================= //
// ======= task-11 ======= //
// ======================= //
// ======= task-12 ======= //
// ======================= //
// ======= task-13 ======= //
// ======================= //
// ======= task-14 ======= //
// ======================= //
// ======= task-15 ======= //
// ======================= //
// ======= task-16 ======= //
// ======================= //
