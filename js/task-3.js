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

function createArrayOfNumbers(min, max) {
  const arr = [];

  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(createArrayOfNumbers(5, 15));

// ======================= //
// ======= task-06 ======= //
// ======================= //
// ======= task-07 ======= //
// ======================= //
// ======= task-08 ======= //
// ======================= //
// ======= task-09 ======= //
// ======================= //
// ======= task-10 ======= //
// ======================= //
// ======= task-11 ======= //
// ======================= //
// ======= task-12 ======= //
// ======================= //
