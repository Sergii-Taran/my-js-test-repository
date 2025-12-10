// ======= task-01 ======= //

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   if (array.length === 0) {
//     return [null, null];
//   }

//   const lastIndex = array.length - 1;
//   const lastValue = array[lastIndex];

//   return [lastIndex, lastValue];
// }

// console.log(getLastElementMeta([1, 2, 3, 4, 5]));

// ======================= //
// ======= task-02 ======= //

// Функція getLength(array) очікує один параметр array - масив довільних значень
// Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   const arrayAsString = array.join('');

//   return arrayAsString.length;
// }
// console.log(getLength([1, 2, 3, 4, 5]));
// console.log(getLength(['Serhii', 'Taran']));

// ======================= //
// ======= task-03 ======= //

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово
// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord)
// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');

//   return words.length * pricePerWord;
// }

// console.log(
//   calculateEngravingPrice('Ця функція приймає першим параметром рядок', 50)
// );

// ======================= //
// ======= task-04 ======= //

// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   const indexEl = array.indexOf(value);
//   let newArr;

//   if (indexEl === -1) {
//     return [];
//   }
//   return array.slice(0, indexEl + 1);
// }

// console.log(getSlice(['apple', 'plum', 'pear', 'orange', 'banana'], 'lemon'));
// console.log(getSlice(['apple', 'plum', 'pear', 'orange', 'banana'], 'orange'));

// ======================= //
// ======= task-05 ======= //

// Функція createArrayOfNumbers(min, max) приймає два параметра:
// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно

// function createArrayOfNumbers(min, max) {
//   const arr = [];

//   for (let i = min; i <= max; i++) {
//     arr.push();
//   }
//   return arr;
// }

// console.log(createArrayOfNumbers(5, 15));

// ======================= //
// ======= task-06 ======= //

// Функція checkStorage(storage, item) приймає два параметри:
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"]

// function checkStorage(storage, item) {
//   const normalizedStorage = storage.map((el) => el.toLowerCase());
//   const normalizedItem = item.toLowerCase();

//   if (normalizedStorage.includes(normalizedItem)) {
//     return `${item} is available to order!`;
//   }
//   return 'Sorry! We are out of stock!';
// }

// console.log(
//   checkStorage(['apple', 'plum', 'pear', 'orange', 'banana'], 'oRange')
// );
// console.log(
//   checkStorage(['apple', 'plum', 'pear', 'orange', 'banana'], 'lemon')
// );

// ======================= //
// ======= task-07 ======= //

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів
// Доповни код функції:
// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//   let commonArr = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonArr.push(array1[i]);
//     }
//   }
//   return commonArr;
// }

// console.log(getCommonElements([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9]));
// console.log(getCommonElements([1, 2, 3, 4, 5, 6], [11, 12, 13, 14, 15, 16]));

// ======================= //
// ======= task-08 ======= //

// створіть масив styles з елментами "jazz" та "blues"
// додайте "rock-n-roll" в кінець
// замініть "blues" на "classical"
// видаліть перший елемент та виведіть його в консоль
// вставте "rap" та "reggae" на початок масиву

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// styles.splice(1, 1, 'classical');

// const firstEl = styles.shift();

// styles.splice(0, 0, 'rap', 'reggae');

// console.log(styles);
// console.log(firstEl);

// ======================= //
// ======= task-09 ======= //

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел
// Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order

// function calculateTotalPrice(order) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([11, 12, 13, 14, 15, 16]));

// ======================= //
// ======= task-10 ======= //

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end
// Якщо жодного парного числа немає, то масив має бути пустим
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let evenArr = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenArr.push(i);
//     }
//   }

//   return evenArr;
// }

// console.log(getEvenNumbers(1, 10));
// console.log(getEvenNumbers(5, 5));

// ======================= //
// ======= task-11 ======= //

// Напиши функцію add для складання довільної кількості аргументів (чисел)

// function add() {
//   let sum = 0;

//   for (const arg of arguments) {
//     sum += arg;
//   }
//   return sum;
// }

// console.log(add(1, 2, 3, 4, 5));

// ======================= //
// ======= task-12 ======= //

// Напиши функцію calAverage(), яка пиймає довільну кількість аргументів і повертає їх середнє значення
// Усі аргументи будуть лише числами

// function calAverage() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4, 5, 6));
// console.log(calAverage(0));
// console.log(calAverage(122, 56, 88, 73, 64, 38, 91));

// ======================= //
// ======= task-13 ======= //

// Функція createReversedArray() може приймати довільну кількість аргументів
// Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку
// Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]
// Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку

// function createReversedArray() {
//   const arr = [];

//   for (const arg of arguments) {
//     arr.push(arg);
//   }

//   return arr.toReversed();
// }

// console.log(createReversedArray(11, 12, 13, 14, 15, 16));

// ======================= //
// ======= task-14 ======= //

// Функція calculateTax(amount, taxRate) оголошує два параметри:
// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку

// function calculateTax(amount, taxRate = 0.2) {
//   if (typeof amount !== 'number' || amount < 0) {
//     throw new Error('invalid amount! It must be a non negative number');
//   }

//   if (typeof taxRate !== 'number' || taxRate < 0 || taxRate > 1) {
//     throw new Error('invalid tax rate! It must be a number between 0 and 1');
//   }

//   return amount * taxRate;
// }

// console.log(calculateTax(15000, 0.15));
// console.log(calculateTax(20000));

// ===================== //
// ======= hw-01 ======= //

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути в нижньому регістрі
// Усі слова slug повинні бути розділені тире

// function slugify(title) {
//   return title.toLowerCase().trim().split(/\s+/).join('-');
// }

// console.log(slugify('Arrays for beginners'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// ===================== //
// ======= hw-02 ======= //

// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число)
// Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів
// В іншому випадку функція повинна повернути весь новий масив

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);

//   if (newArray.length <= maxLength) {
//     return newArray;
//   }
//   return newArray.slice(0, maxLength);
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

// ===================== //
// ======= hw-03 ======= //

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри
// Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value
// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

function filterArray(numbers, value) {
  const result = [];

  for (const num of numbers) {
    if (num > value) {
      result.push(num);
    }
  }
  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

// ======================= //
