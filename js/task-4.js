// ======================= //
// ======= task-01 ======= //

// Об'єкт apartment описує квартиру 6 властивостями: шлях до зображення, опис, рейтинг, ціна, теги і власник
// Властивість owner (власник) також є об'єктом
// Оголошено шість змінних, значення яких це значення відповідних властивостей об'єкту apartment.
// Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// ======================= //
// ======= task-02 ======= //

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(keys);
// console.log(values);

// ======================= //
// ======= task-03 ======= //

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of
// Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = [];

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// ======================= //
// ======= task-04 ======= //

// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей
// Функція має повернути кількість властивостей в об'єкті object

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// function countProps(object) {
//   return Object.keys(object).length;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// ======================= //
// ======= task-05 ======= //

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.
// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for (const salary of Object.values(salaries)) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ======================= //
// ======= task-06 ======= //

// Масив colors містить колекцію кольорів
// Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями
// Перебери масив об'єктів colors, використовуючи цикл for...of
// Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ======================= //
// ======= task-07 ======= //

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість
// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price)
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

// ======================= //
// ======= task-08 ======= //

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const result = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);
//     }
//   }

//   return result;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// ======================= //
// ======= task-09 ======= //

// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість
// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));

// ======================= //
// ======= task-10 ======= //

// function add(...args) {
//   let sum = 0;

//   for (const num of args) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));

// ======================= //
// ======= task-11 ======= //

// Функція addOverNum() приймає довільну кількість аргументів чисел
// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число
// Це число завжди буде передано першим аргументом
// Для вирішення цього завдання тобі потрібно зробити наступне:
// Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
// Усередині функції ініціалізуй змінну для зберігання загальної суми
// Потім пройдись по кожному аргументу за допомогою циклу
// Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// На завершення поверни загальну суму

// function addOverNum(value, ...args) {
//   let sum = 0;

//   for (const num of args) {
//     if (num > value) {
//       sum += num;
//     }
//   }
//   return sum;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// ======================= //
// ======= task-12 ======= //

// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores
// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores
// Використовуй оператор (...spread) і методи Math.max() і Math.min()

// function getExtremeScores(scores) {
//   if (scores.length === 0) {
//     return { best: null, worst: null };
//   }

//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// ======================= //
// ======= task-13 ======= //

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп
// Використовуючи розпилення, доповни код таким чином, щоб:
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно
// У змінній bestScore був найвищий загальний бал
// У змінній worstScore був найнижчий загальний бал

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ======================= //
// ======= task-14 ======= //

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings
// Під час створення тесту, усі або частину налаштувань можна перевизначити, користувацькі налаштування зберігаються у змінній overrideSettings
// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені користувацькі налаштування
// Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };

// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// ======================= //
// ======== hw-01 ======== //

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні
// Функція оголошує два параметри:
// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер, тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні

// function isEnoughCapacity(products, containerSize) {
//   if (typeof containerSize !== 'number') return false;

//   let totalAmount = 0;

//   for (const number of Object.values(products)) {
//     if (typeof number !== 'number') continue;
//     totalAmount += number;
//   }

//   return totalAmount <= containerSize
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));

// ======================= //
// ======== hw-02 ======== //

// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня
// Функція очікує один параметр: days — масив об’єктів
// Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день

function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  let totalCalories = 0;

  for (const day of days) {
    totalCalories += day.calories;
  }
  return totalCalories / days.length;
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

// ======================= //
// ======== hw-03 ======== //
// ======================= //
