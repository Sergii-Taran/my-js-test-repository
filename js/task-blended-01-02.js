// ================= ======= //
// ======== task-01 ======== //

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = parseInt(prompt('Enter a number:'));

// if (isNaN(number)) {
//   alert("You didn't enter a number!");
// } else if (number === 10) {
//   alert('True');
// } else {
//   alert('False');
// }

// ================ ======== //
// ======== task-02 ======== //

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 60);

// switch (true) {
//   case min <= 15:
//     alert(`${min} is in the first quarter`);
//     break;

//   case min <= 15:
//     alert(`${min} is in the second quarter`);
//     break;

//   case min <= 15:
//     alert(`${min} is in the third quarter`);
//     break;

//   default:
//     alert(`${min} is in the fourth quarter`);
// }

// компактний варіант через Math

// const min = Math.floor(Math.random() * 60);

// const quarter = Math.floor(min / 15) + 1;

// alert(`${min} is in the quarter ${quarter}`);

// ================ ======== //
// ======== task-03 ======== //

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const input = prompt('Enter a number from 1 to 4:');
// const number = parseInt(input);

// let result;

// if (!input || isNaN(number)) {
//   result = 'Please enter a valid number!';
// } else {
//   switch (number) {
//     case 1:
//       result = 'Winter';
//       break;

//     case 2:
//       result = 'Spring';
//       break;

//     case 3:
//       result = 'Summer';
//       break;

//     case 4:
//       result = 'Autumn';
//       break;

//     default:
//       result = 'Sorry, but you must enter a number between 1 and 4 inclusive';
//   }
// }

// alert(result);
// console.log(result);

// ================ ======== //
// ======== task-04 ======== //

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function formatTimeFromMinutes(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const formatted =
//     String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');

//   return formatted;
// }

// const input = prompt('Enter minutes:');
// const minutes = parseInt(input);

// if (isNaN(minutes) || minutes < 0) {
//   alert('Please enter a valid positive number!');
//   console.log('Invalid input');
// } else {
//   const result = formatTimeFromMinutes(minutes);

//   alert(result);
//   console.log(result);
// }

// ========================= //
// ======== task-05 ======== //

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// ======== var.01 (if...else) ======== //

// let login = prompt('Enter your login:');

// console.log('Entered login:', login);

// if (login === null || login === '') {
//   alert('Cancelled');
// } else if (login === 'Admin') {
//   let password = prompt('Enter password:');

//   if (password === null || password === '') {
//     alert('Cancelled');
//   } else if (password === 'I_am_the_Boss') {
//     alert('Hello!');
//   } else {
//     alert('Incorrect password!');
//   }
// } else {
//   alert('I dont know you!');
// }

// ======== var.02 (function) ======== //

// function checkLogin(login) {
//   if (login === null || login === '') {
//     alert('Cancelled');
//   } else if (login === 'Admin') {
//     checkPassword();
//   } else {
//     alert('I dont know you!');
//   }
// }

// function checkPassword() {
//   let password = prompt('Enter password:');

//   if (password === null || password === '') {
//     alert('Cancelled');
//   } else if (password === 'I_am_the_Boss') {
//     alert('Hello!');
//   } else {
//     alert('Incorrect password!');
//   }
// }

// let login = prompt('Enter your login:');
// console.log('Entered login:', login);
// checkLogin(login);

// ======== var.03 (function) ======== //

// function authenticateUser(login, passwordPrompt = true) {
//   if (login === null || login === '') {
//     return 'Cancelled';
//   }

//   if (login === 'Admin') {
//     if (!passwordPrompt) return 'Cancelled';

//     let password = prompt('Enter password:');
//     if (password === null || password === '') {
//       return 'Cancelled';
//     } else if (password === 'I_am_the_Boss') {
//       return 'Hello!';
//     } else {
//       return 'Incorrect password!';
//     }
//   }

//   return 'I dont know you!';
// }

// let login = prompt('Enter your login:');
// console.log('Entered login:', login);

// alert(authenticateUser(login));

// ========================= //
// ======== task-06 ======== //

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let count = 0;

// while (count <= 20) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// ========================= //
// ======== task-07 ======== //

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);

//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getNumbers(7, 99));

// ========================= //
// ======== task-08 ======== //

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// ======== var.01 (function) ======== //

// function min(a, b) {
//   if (!Number.isFinite(a) || !Number.isFinite(b)) {
//     return 'Not a number!';
//   }

//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(10, 5));
// console.log(min('Hello!', 5));

// ======== var.02 (ternary operator) ======== //

// function min(a, b) {
//   if (!Number.isFinite(a) || !Number.isFinite(b)) {
//     return 'Not a number!';
//   }

//   return a < b ? a : b;
// }

// console.log(min(1, 5));
// console.log(min('Hello!', 5));

// ========================= //
// ======== task-09 ======== //

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// ======== var.01 (easy) ======== //

// function isAdult(age) {
//   if (!Number.isFinite(age)) {
//     return 'Error: age must be a number!';
//   }

//   return age >= 18 || confirm('Are you 18 years old?');
// }

// console.log(isAdult(25));
// console.log(isAdult(15));
// console.log(isAdult('hello'));

// ======== var.02 (extended) ======== //

// function isAdult() {
//   const input = prompt('Enter your age:');
//   const age = Number(input);

//   if (!Number.isFinite(age)) {
//     alert('Error: The entered value must be a number!');
//     return false;
//   }

//   if (age >= 18) {
//     alert('You are of legal age!');
//     return true;
//   }

//   const approved = confirm(
//     'You are not 18 years old. Did your parents allow it?'
//   );

//   if (approved) {
//     alert('Confirmation received!');
//   } else {
//     alert('Access is denied!');
//   }

//   return approved;
// }

// console.log(isAdult());

// ========================= //
// ======== task-10 ======== //

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);

// ------------------------- //

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     let output = '';

//     if (i % 3 === 0) output += 'fizz';
//     if (i % 5 === 0) output += 'buzz';

//     console.log(output || i);
//   }
// }

// fizzBuzz(15);

// ------------------------ //

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     switch (true) {
//       case i % 3 === 0 && i % 5 === 0:
//         console.log('fizzbuzz');
//         break;

//       case i % 3 === 0:
//         console.log('fizz');
//         break;

//       case i % 5 === 0:
//         console.log('buzz');
//         break;

//       default:
//         console.log(i);
//         break;
//     }
//   }
// }

// fizzBuzz(15);

// ------------------------- //

function fizzBuzz(num) {
  for (let i = 1; i <= 15; i++) {
    console.log((i % 3 === 0 ? 'fizz' : '') + (i % 5 === 0 ? 'buzz' : '') || i);
  }
}

fizzBuzz(15);

// ------------------------- //
// ========================= //
