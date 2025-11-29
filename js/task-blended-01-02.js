// ===================== //

// task-01

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

// ===================== //

// task-02

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

// ===================== //

// task-03

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

// ===================== //
// task-04

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

// ===================== //
// task-05

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

// варіант_1 (if...else)

let login = prompt('Enter your login:');

console.log('Entered login:', login);

if (login === null || login === '') {
  alert('Cancelled');
} else if (login === 'Admin') {
  let password = prompt('Enter password:');

  if (password === null || password === '') {
    alert('Cancelled');
  } else if (password === 'I_Am_the_boss') {
    alert('Hello!');
  } else {
    alert('Incorrect password!');
  }
} else {
  alert('I dont know you!');
}

// варіант_2 (function)

// ===================== //
// task-06
// ===================== //
// task-07
// ===================== //
// task-08
// ===================== //
// task-09
// ===================== //
// task-10
// ===================== //
// ===================== //
// ===================== //
// ===================== //
// ===================== //
