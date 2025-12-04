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

// const userInput = prompt('Enter a number:');
// const number = Number(userInput);

// if (Number.isNaN(number)) {
//   console.log('You entered not a number!');
// } else {
//   if (number % 2 === 0) {
//     console.log('The number is even!');
//   } else {
//     console.log('The number is odd!');
//   }
// }

// ======================= //
// ======= task-03 ======= //

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:
// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return 'Not enough goods in stock!';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }

// console.log(checkStorage(2200, 3500));
// console.log(checkStorage(5700, 3660));
// console.log(checkStorage(7800, 7800));

// ======================= //
// ======= task-04 ======= //

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:
// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in the order!';
//   } else if (available < ordered) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you!';
//   }
// }

// console.log(checkStorage(10000, 0));
// console.log(checkStorage(10000, 15000));
// console.log(checkStorage(10000, 7000));

// ======================= //
// ======= task-05 ======= //

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.
// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:
// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = 'Wsxcde159';

//   return password === correctPassword
//     ? 'Access granted!'
//     : 'Access denied, wrong password!';
// }

// console.log(checkPassword('Ghtnb951'));
// console.log(checkPassword('Wsxcde159'));

// ======================= //
// ======= task-06 ======= //

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.
// Якщо значення параметра type — це рядок:
// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".
// Використай оператор switch для розв'язання цієї задачі!

// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;
//     case 'professional':
//       price = 20;
//       break;
//     case 'organization':
//       price = 50;
//       break;

//     default:
//       return 'Invalid subscription type!';
//   }
//   return price;
// }

// console.log(getSubscriptionPrice('starter'));
// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));

// ======================= //
// ======= task-07 ======= //

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно
// Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end
// Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

// console.log(isNumberInRange(0, 100, 55));
// console.log(isNumberInRange(90, 100, 55));

// ======================= //
// ======= task-08 ======= //

// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту
// Перевірка відбувається за типом передплати.
// Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ
// В іншому випадку повертала false.

// function checkAccess(subType) {
//   return subType === 'pro' || subType === 'vip';
// }

// console.log(checkAccess('pro'));
// console.log(checkAccess('start'));
// console.log(checkAccess('vip'));

// ======================= //
// ======= task-09 ======= //

// Програма запитує у користувача рік і перевіряє, чи є він високосним
// Рік є високосним, якщо він ділиться на 4, але не ділиться на 100, або ділиться на 400

// const year = Number(prompt('Enter the year:'));

// if (isNaN(year)) {
//   console.log('Please enter a valid number');
// } else {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// }

// ======================= //
// ======= task-10 ======= //
// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію)
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

function getSubstring(string, length) {
  return string.slice(0, length);
}

console.log(getSubstring('slice НЕ змінює оригінальний рядок', 15));

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
