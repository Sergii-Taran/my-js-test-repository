// ======= task-01 ======= //

// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18
// Використай у тілі функції інструкцію if для перевірки значення age.

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   } else {
//     return 'You are not an adult';
//   }
// }

// console.log(checkAge(25));
// console.log(checkAge(15));

// ======================= //
// ======= task-02 ======= //

// Напиши програму, яка запитує у користувача ціле число і визначає, чи є це число парним або непарним

const userInput = prompt('Enter a number:');
const number = Number(userInput);

if (Number.isNaN(number)) {
  console.log('You entered not a number!');
} else {
  if (number % 2 === 0) {
    console.log('The number is even!');
  } else {
    console.log('The number is odd!');
  }
}

// ======================= //
// ======= task-03 ======= //
// ======================= //
// ======= task-04 ======= //
// ======================= //
// ======= task-05 ======= //
// ======================= //
// ======= task-06 ======= //
// ======================= //
