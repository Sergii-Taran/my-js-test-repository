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

const logins = ['Peter', 'John', 'Igor', 'Sasha'];

function checkLogin(array) {
  const input = prompt('Enter your name:');

  if (!input) return alert('User not found');

  const normalized = input.trim().toLowerCase();

  const isFound = array.some((name) => name.toLowerCase() === normalized);

  alert(isFound ? `Welcome, ${input.trim()}!` : 'User not found');
}

checkLogin(logins);

// ========================= //
// ======== task-03 ======== //
// ========================= //
// ======== task-04 ======== //
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
