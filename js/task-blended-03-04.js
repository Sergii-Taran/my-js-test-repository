// ======== task-01 ======== //

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// console.log(styles);

// styles.push('rock-n-roll');
// console.log(styles);

// const index = styles.indexOf('blues');
// if (index !== -1) {
//   styles[index] = 'classic';
// }
// console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);

//   }
// }

// logItems(styles);

// ========================= //
// ======== task-02 ======== //

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const input = prompt('Enter your name:');

//   if (!input) return alert('User not found');

//   const normalized = input.trim().toLowerCase();

//   const isFound = array.some((name) => name.toLowerCase() === normalized);

//   alert(isFound ? `Welcome, ${input.trim()}!` : 'User not found');
// }

// checkLogin(logins);

// ========================= //
// ======== task-03 ======== //

// Напишіть функцію calculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   if (args.length === 0) return 0;

//   let totalSum = 0;

//   for (const arg of args) {
//     if (typeof arg !== 'number' || Number.isNaN(arg)) {
//       return 'Not a number!';
//     }
//     totalSum += arg;
//   }

//   return totalSum / args.length;
// }

// console.log(calculateAverage(1, 2, 3));
// console.log(calculateAverage(9, 18, 27, 36, 45, 54, 63, 72, 81, 90));

// ========================= //
// ======== task-04 ======== //

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29]

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function addAdjacentNumbers(array) {
//   let newArr = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     newArr.push(array[i] + array[i + 1]);
//   }
//   return newArr;
// }

// console.log(addAdjacentNumbers(someArr));

// ========================= //
// ======== task-05 ======== //

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sorry, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// ------- var.01 ------- //

// function findSmallestNumber(array) {
//   if (!Array.isArray(array)) {
//     return 'Sorry, it is not an array!';
//   }

//   let min = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min;
// }

// ------- var.02 ------- //

// function findSmallestNumber(array) {
//   if (!Array.isArray(array)) {
//     return 'Sorry, it is not an array!';
//   }

//   if (array.length === 0) {
//     return 'Array is empty';
//   }

//   if (!array.every((num) => typeof num === 'number' && !Number.isNaN(num))) {
//     return 'Array must contain only numbers';
//   }

//   const min = Math.min(...array);

//   return min;
// }

// ------- var.03 ------- //

// function findSmallestNumber(array) {
//   if (!Array.isArray(array)) {
//     return 'Sorry, it is not an array!';
//   }

//   if (array.length === 0) {
//     return 'Array is empty';
//   }

//   let min = array[0];

//   for (const num of array) {
//     if (typeof num !== 'number' || Number.isNaN(num)) {
//       return 'Array must contain only numbers';
//     }
//     if (num < min) min = num;
//   }

//   return min;
// }

// console.log(findSmallestNumber(numbers));

// ========================= //
// ======== task-06 ======== //

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.
// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// ------- var.01 ------- //

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('London is the capital of Great Britain'));

// ========================= //
// ======== task-07 ======== //
// ========================= //
// ======== task-08 ======== //
// ========================= //
// ======== task-09 ======== //
// ========================= //
// ======== task-10 ======== //
// ========================= //
