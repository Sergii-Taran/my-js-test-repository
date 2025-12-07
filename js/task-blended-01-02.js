// ================= ======= //
// ======== task-01 ======== //

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const input = prompt('Enter a number:');

// if (input === null) {
//   alert('You canceled the entry!');
// } else {
//   const number = Number(input);

//   if (Number.isNaN(number)) {
//     alert('You entered not a number');
//   } else if (number === 10) {
//     alert('True');
//   } else {
//     alert('False');
//   }
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
//   case min < 15:
//     alert(`The number ${min} is in the first quoter`);
//     break;

//   case min < 30:
//     alert(`The number ${min} is in the second quoter`);
//     break;

//   case min < 45:
//     alert(`The number ${min} is in the third quoter`);
//     break;

//   default:
//     alert(`The number ${min} is in the fourth quoter`);
// }

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

// const num = Number(prompt('Enter a number from 1 to 4:'));

// let result;

// switch (num) {
//   case 1:
//     result = 'winter';
//     break;

//   case 2:
//     result = 'spring';
//     break;

//   case 3:
//     result = 'summer';
//     break;

//   case 4:
//     result = 'autumn';
//     break;

//   default:
//     result = 'Sorry, but you must enter a value between 1 and 4 inclusive';
// }

// console.log(result);

// ================ ======== //
// ======== task-04 ======== //

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const input = prompt('Enter minutes:');
// const totalMinutes = parseInt(input);

// if (isNaN(totalMinutes) || totalMinutes < 0) {
//   console.log('Please enter a valid positive number!');
// } else {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const formatted =
//     String(hours).padStart(2, 0) + ':' + String(minutes).padStart(2, 0);

//   console.log(formatted);
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

// if (login === 'Admin') {
//   let password = prompt('Enter login:');

//   if (password === 'I am the BOSS!') {
//     alert('Hello!');
//   } else if (password === '' || password === null) {
//     alert('Cancelled');
//   } else {
//     alert('Incorrect password!');
//   }
// } else if (login === '' || login === null) {
//   alert('Cancelled');
// } else {
//   alert('I do not know you!');
// }

// console.log('Entered login:', login);

// ======== var.02 (function) ======== //

// Функція для перевірки логіну
// function checkLogin(login) {
//   if (login === null || login === '') {
//     alert('Cancelled');
//   } else if (login === 'Admin') {
//     checkPassword();
//   } else {
//     alert('I do not know you~');
//   }
// }

// Функція для перевірки пароля
// function checkPassword() {
//   let password = prompt('Enеуr password:');

//   if (password === null || password === '') {
//     alert('Cancelled');
//   } else if (password === 'I am the BOSS!') {
//     alert('Hello!');
//   } else {
//     alert('Incorrect password!');
//   }
// }

// Основний код
// let login = prompt('Enter your login:');
// console.log('Entered login:', login);
// checkLogin(login);

// ======== var.03 (function) ======== //

// Функція для перевірки логіну та пароля
function authenticateUser(login, passwordPrompt = true) {
  if (login === null || login === '') {
    return 'Cancelled';
  }

  if (login === 'Адмін') {
    if (!passwordPrompt) return 'Cancelled';

    let password = prompt('Введіть пароль:');
    if (password === null || password === '') {
      return 'Cancelled';
    } else if (password === 'I am the BOSS!') {
      return 'Hello!';
    } else {
      return 'Incorrect password!';
    }
  }

  return 'Я вас не знаю';
}

// Основний код
let login = prompt('Введіть ваш логін:');
console.log('Введений логін:', login);

// Виклик функції та показ результату
alert(authenticateUser(login));

// ========================= //
// ======== task-06 ======== //

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// ========================= //
// ======== task-07 ======== //

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// ========================= //
// ======== task-08 ======== //

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// ======== var.01 (function) ======== //

// ======== var.02 (ternary operator) ======== //

// ========================= //
// ======== task-09 ======== //

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// ======== var.01 (easy) ======== //

// ======== var.02 (extended) ======== //

// ========================= //
// ======== task-10 ======== //

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// ------------------------- //

// ------------------------ //

// ------------------------- //

// ------------------------- //
// ========================= //
