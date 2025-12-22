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

// ======= task-01.1 ======= //
// ========================= //

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find((item) => item.name === stoneName);
//     return stone ? stone.price * stone.quantity : 0;
//   },
// };

// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Amber'));

// if (!stone) {
//   return `${stoneName} not found`;
// }
// return `The cost of all stones ${stoneName} ${
//   stone.price * stone.quantity
// } credits`;

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

// ========================= //
// ======= task-02.1 ======= //

/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   number(number) {
//     this.result = number;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }

//   add(number) {
//     this.result += number;
//     return this;
//   }

//   substruct(number) {
//     this.result -= number;
//     return this;
//   }
//   divide(number) {
//     this.result /= number;
//     return this;
//   }

//   multiply(number) {
//     this.result *= number;
//     return this;
//   }
// }

// const calculator = new Calculator();
// const result = calculator
//   .number(10)
//   .add(5)
//   .substruct(2)
//   .divide(4)
//   .multiply(7)
//   .getResult();

// console.log(result);

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

// class Car {
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }

//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));

// ======================= //
// ======= task-11 ======= //

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список
// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this._email = email;
//   }

//   get email() {
//     return this._email;
//   }

//   set email(newEmail) {
//     if (typeof newEmail !== 'string' || newEmail === '') {
//       return;
//     }
//     this._email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// const admin = new Admin('admin@mail.com');

// console.log(admin.email);
// console.log(Admin.role.SUPERUSER);

// ======================= //
// ======= task-12 ======= //

// Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань з двома властивостями email і access
// Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора
// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email);
// console.log(mango.access);

// ======================= //
// ======= task-13 ======= //

// Додай класу Admin наступні властивості і методи
// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   blacklistedEmails = [];

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email);
// console.log(mango.access);

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails);
// console.log(mango.isBlacklisted('mango@mail.com'));
// console.log(mango.isBlacklisted('poly@mail.com'));

// ======================= //
// ======= task-14 ======= //

// Cтворіть клас `Person`, який містить наступні властивості:
//    - `name` - ім'я людини;
//    - `age`- вік людини;
//    - `gender` - стать людини;
//    - `email`- електронна пошта людини.
// Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.

// Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//   - salary - зарплата співробітника;
//   - department - відділ, в якому працює співробітник.
//   Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника,  зарплатою та відділом, в якому працює співробітник.

// class Person {
//   constructor({ name, age, gender, email }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// const sergio = new Person({
//   name: 'Sergio',
//   age: 55,
//   gender: 'male',
//   email: 'sergio@mail.com',
// });

// console.log(sergio.getDetails());

// class Employee extends Person {
//   constructor({ name, age, gender, email, salary, department }) {
//     super({ name, age, gender, email });
//     this.salary = salary;
//     this.department = department;
//   }

//   getEmployeeDetails() {
//     return {
//       ...this.getDetails(),
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const employee = new Employee({
//   name: 'Max',
//   age: 49,
//   gender: 'male',
//   email: 'max@mail.com',
//   salary: 10_000,
//   department: 'developer',
// });

// console.log(employee.getEmployeeDetails());

// ======================= //
// ======= task-15 ======= //

// Напиши клас Blogger для створення об’єкта блогера з наступними властивостями:
// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем, на яких спеціалізується блогер
// Клас чекає один параметр - об’єкт налаштувань з однойменними властивостями.
// Додай метод getInfo(), який повертає рядок:
// User ${email} is ${age} years old and has ${numPosts} posts.
// Додай метод updatePostsCount(value), який у параметрі value приймає кількість постів які потрібно додати користувачеві

class Blogger {
  constructor({ email, age, numberOfPosts, topics }) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostsCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  email: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});

console.log(mango.getInfo());

mango.updatePostsCount(5);
console.log(mango.getInfo());

// ======================= //
// ======= task-16 ======= //
// ======================= //
