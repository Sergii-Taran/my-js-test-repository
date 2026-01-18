// ======= task-01 ======= //

// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18
// Використай у тілі функції інструкцію if для перевірки значення age.

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   } else {
//     return 'Wet behind the ears!';
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
// console.log(getSubscriptionPrice('premium'));

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
// ======= task-10 ======= //

// Напишіть функцію, яка перевіряє, чи є користувач авторизованим
// Функція приймає об'єкт користувача зі властивостями username та role
// Якщо користувач не має імені (тобто username є хибним), йому потрібно присвоїти значення за замовчуванням "Guest"
// Якщо роль не вказана, потрібно призначити роль за замовчуванням "User"
// Функція повинна повертати рядок із ім'ям користувача та його роллю

function checkUser(user) {
  const userName = user.userName || 'Guest';
  const role = user.role || 'User';

  return `Username: ${userName}, Role: ${role}`;
}

console.log(checkUser({ userName: 'Alice', role: 'Admin' }));
console.log(checkUser({ userName: '', role: 'Moderator' }));
console.log(checkUser({ userName: 'Bob' }));
console.log(checkUser({ role: 'Editor' }));
console.log(checkUser({}));
console.log(checkUser({ userName: null, role: undefined }));

// ======================= //
// ======= task-11 ======= //

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

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring('slice НЕ змінює оригінальний рядок', 15));

// ======================= //
// ======= task-11 ======= //

// Функція normalizeInput(input, to) оголошує два параметри:
// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:
// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else if (to === 'lower') {
//     return input.toLowerCase();
//   }
//   return 'Invalid value: must be "upper" or "lower"';
// }

// console.log(normalizeInput('Доповни код функції', 'upper'));
// console.log(normalizeInput('Доповни код функції', 'input'));
// console.log(normalizeInput('Доповни код функції', 'lower'));

// ======================= //
// ======= task-12 ======= //

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.
// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName)
// Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий
// Перед перевіркою входження не забудь прирівняти їх до однакового регістру

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// console.log(checkForName('Serhii Taran', 'sErHIi'));
// console.log(checkForName('Serhii Taran', 'Mykola'));

// ======================= //
// ======= task-13 ======= //

// Функція getFileName(file) приймає один параметр
// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//   const dotIndex = file.indexOf('.');

//   if (dotIndex === -1) {
//     return file;
//   }

//   return file.slice(0, dotIndex);
// }
// console.log(getFileName('index.html'));
// console.log(getFileName('styles'));

// ======================= //
// ======= task-14 ======= //

// Функція createFileName(name, ext) приймає два параметри:
// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення
// Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext.trim()}`;
// }

// console.log(createFileName('order', 'xsls'));

// ======================= //
// ======= task-15 ======= //

// Функція calculateTotal(number) приймає ціле число (параметр number)
// Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно
// Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6

// function calculateTotal(number) {
//   let sum = 0;
//   let i = 1;

//   while (i <= number) {
//     sum += i;
//     i++;
//   }

//   return sum;
// }

// console.log(calculateTotal(15));
// console.log(calculateTotal(99));
// console.log(calculateTotal(0));
// console.log(calculateTotal(77));

// ======================= //
// ======= task-16 ======= //

// Функція calculateTotal(number) приймає ціле число (параметр number)
// Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(15));

// ======================= //
// ======= task-17 ======= //

// Функція calculateEvenTotal(number) приймає ціле число (параметр number)
// Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно

// function calculateEvenTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(calculateEvenTotal(15));

// ======================= //
// ======= task-18 ======= //

// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі

// const start = 7;
// const end = 29;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// ======================= //
// ======= task-19 ======= //

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
// Доповни код функції таким чином, щоб вона:
// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(3, 56, 12));

// =========================== //
// ======= homework-01 ======= //

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів
// Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:
// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const total = quantity * pricePerDroid;

//   return total > customerCredits
//     ? 'Insufficient funds!'
//     : `You ordered ${quantity} droids worth ${total} credits!`;
// }

// console.log(makeTransaction(5, 3000, 23000));
// console.log(makeTransaction(3, 1000, 15000));
// console.log(makeTransaction(10, 5000, 8000));
// console.log(makeTransaction(8, 2000, 10000));
// console.log(makeTransaction(10, 500, 5000));

// =========================== //
// ======= homework-02 ======= //

// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).
// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + '...';
//   }
// }

// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

// =========================== //
// ======= homework-03 ======= //

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки
// Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
// Доповни код функції таким чином, що:
// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// function checkForSpam(message) {
//   const normalize = message.toLowerCase();

//   return normalize.includes('spam') || normalize.includes('sale')
//     ? true
//     : false;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// =========================== //
// ======= homework-04 ======= //

// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат
// Обов'язково використовуй інструкцію switch
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення
// Список країн і вартість доставки:
// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів
// Зі списку видно, що доставка можлива не скрізь
// Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let price;

//   switch ('price') {
//     case 'China':
//       price = 100;
//       break;

//     case 'Chile':
//       price = 250;
//       break;

//     case 'Australia':
//       price = 170;
//       break;

//     case 'Jamaica':
//       price = 120;
//       break;

//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
//   return `Shipping to ${country} will cost ${price} credits`;
// }

// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Ukraine'));
// console.log(getShippingCost('USA'));

// =========================== //
