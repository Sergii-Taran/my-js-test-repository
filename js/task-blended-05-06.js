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

const numbers = [2, 4, 6, 8, 10];

// const isAllEven = (numbers) => numbers.every((number) => number % 2 === 0);

const isAllEven = (numbers) => {
  if (!Array.isArray(numbers)) return false;

  return numbers.every((num) => typeof num === 'number' && num % 2 === 0);
};

console.log(isAllEven(numbers));
console.log(isAllEven([2, 4, 6]));
console.log(isAllEven([2, 3, 6]));
console.log(isAllEven([]));

// ========================= //
// ======== task-05 ======== //
// ========================= //
// ======== task-06 ======== //
// ========================= //
// ======== task-07 ======== //
// ========================= //
// ======== task-08 ======== //
// ========================= //
// ======== task-09 ======== //
// ========================= //
// ======== task-10 ======== //
// ========================= //
// ======== task-11 ======== //
// ========================= //
// ======== task-12 ======== //
// ========================= //
// ======== task-13 ======== //
// ========================= //
