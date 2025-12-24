// ======== task-01 ======== //

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((number) => number ** 2);
// const squares = numbers.map((number) => number * number);
// const squares = numbers.map((number) => {
//   return number * number;
// });

// console.log(squares);

// ========================= //
// ======== task-02 ======== //

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flattenedData = data.flatMap((item) => item.values);

// console.log(flattenedData);

// ========================= //
// ======== task-03 ======== //

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const hasUnderAge = (people, age) => people.some((person) => person.age < age);

// console.log(hasUnderAge(people, 20));

// ========================= //
// ======== task-04 ======== //

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const isAllEven = (numbers) => numbers.every((number) => number % 2 === 0);

// const isAllEven = (numbers) => {
//   if (!Array.isArray(numbers)) return false;

//   return numbers.every((num) => typeof num === 'number' && num % 2 === 0);
// };

// console.log(isAllEven(numbers));
// console.log(isAllEven([2, 4, 6]));
// console.log(isAllEven([2, 3, 6]));
// console.log(isAllEven([]));

// ========================= //
// ======== task-05 ======== //

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const findFirstOdd = (numbers) => numbers.find((num) => num % 2 !== 0);

// console.log(findFirstOdd(numbers));
// findFirstOdd([2, 4, 6]);
// findFirstOdd([]);

// ========================= //
// ======== task-06 ======== //

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedArray = numbersArray.toSorted((a, b) => a - b);

// console.log(sortedArray);

// ========================= //
// ======== task-07 ======== //

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedArray = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(sortedArray);

// ========================= //
// ======== task-08 ======== //

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const inAscendingAgeOrder = users.toSorted(
//   (firstUser, secondUser) => firstUser.age - secondUser.age
// );

// const sortedByAge = users.toSorted((a, b) => a.age - b.age);

// console.log(sortedByAge);

// ========================= //
// ======== task-09 ======== //

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const userAdult = users.filter((user) => user.age > 20);

// console.log(userAdult);

// ========================= //
// ======== task-10 ======== //

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce((acc, number) => acc + number, 0);

// console.log(result);

// ========================= //
// ======== task-11 ======== //

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод subtract - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor(result = 0) {
//     this.result = result;
//   }

//   number(value) {
//     this.result = value;
//     return this;
//   }

//   add(value) {
//     this.result += value;
//     return this;
//   }

//   subtract(value) {
//     this.result -= value;
//     return this;
//   }

//   multiply(value) {
//     this.result *= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       throw new Error('Division by zero is impossible!');
//     }

//     this.result /= value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10)
//   .add(5)
//   .subtract(3)
//   .multiply(4)
//   .divide(2)
//   .getResult();

// console.log(result);

// ========================= //
// ======== task-12 ======== //

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.login = login;
//     this.email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     if (typeof newLogin !== 'string') {
//       throw new Error('Login must be a string');
//     }

//     if (newLogin.length < 5) {
//       throw new Error('Your login must have at least 5 characters!');
//     }

//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (typeof newEmail !== 'string') {
//       throw new Error('Email must be a string');
//     }

//     if (!newEmail.includes('@')) {
//       throw new Error('Incorrect email format!');
//     }

//     this.#email = newEmail;
//   }
// }

// ========================= //
// ======== task-13 ======== //

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor({ name, age, gender, email }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor({ name, age, gender, email, salary, department }) {
    super({ name, age, gender, email });
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

// ========================= //
