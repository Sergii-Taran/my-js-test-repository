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

function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  const result = [];

  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      result.push(product[propName]);
    }
  }

  return result;
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('category'));

// ======================= //
// ======= task-09 ======= //
// ======================= //
// ======= task-10 ======= //
// ======================= //
// ======= task-11 ======= //
// ======================= //
// ======= task-12 ======= //
// ======================= //
// ======= task-13 ======= //
// ======================= //
// ======= task-14 ======= //
// ======================= //
