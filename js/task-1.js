// ======= task-01 ======= //
// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:
// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати (ціна одного дроїда помножена на кількість дроїдів у замовленні, плюс вартість доставки)
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits"

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered ${orderedQuantity} droids worth ${totalPrice} credits`;

// console.log(totalPrice);
// console.log(message);

// ======================= //
// ======= task-02 ======= //

// Змінна username зберігає рядок з іменем користувача.
// Оголоси змінну message та за допомогою синтаксису шаблонних рядків. Доповни код так, щоб в ній зберігався рядок наступного формату: "Username <name> is <length> characters long", в якому <name> це ім'я користувача зі змінної username, а <length> це його довжина.

// const userName = 'Sergio';
// const message = `Username ${userName} is ${userName.length} characters long`;

// console.log(message);

// ======================= //
// ======= task-03 ======= //

// Додай код, який записує у змінні наступні значення:
// courseTopicLength - довжина рядка
// firstElement - перший символ рядка
// lastElement - останній символ рядка (використовуй змінну courseTopicLength)

// const string = 'Winter is coming';

// const courseTopicLength = string.length;
// console.log(courseTopicLength);

// const firstElement = string[0];
// console.log(firstElement);

// const lastElement = string[string.length - 1];
// console.log(lastElement);

// ======================= //
// ======= task-04 ======= //

// Функція add повинна вміти додавати три числа і виводити результат у консоль.
// Оголоси для функції add три параметри: a, b і c, які будуть отримувати значення з аргументів, під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }

// add(15, 5, 55);
// add(22, 13, 8);
// add(11, 45, 99);

// ======================= //
// ======= task-05 ======= //

// Написати функцію calcBMI (weight, height), яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу людини на квадрат її висоти.
// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути як крапка, так і кома.
// Індекс маси тіла потрібно округлити до однієї цифри після коми.

// function calcBMI(weight, height) {
//   let numWeight = Number.parseFloat(weight.replace(',', '.'));
//   let numHeight = Number.parseFloat(height.replace(',', '.'));

//   const bmi = numWeight / numHeight ** 2;

//   return parseFloat(bmi.toFixed(1));
// }

// const bmi = calcBMI('102.5', '1.85');
// console.log(bmi);

// =========================== //
// ======= homework-01 ======= //

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів
// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику:
// • quantity— перший параметр, число, що містить кількість замовлених дроїдів
// • pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
// "You ordered <quantity> droids worth <totalPrice> credits!", де:
// • <quantity> — це кількість замовлених дроїдів
// • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

// =========================== //
// ======= homework-02 ======= //

// Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику:
// • country — перший параметр, рядок, що містить країну доставки
// • price — другий параметр, число, що містить загальну вартість товару
// • deliveryFee — третій параметр, число, що містить вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача:
// "Shipping to <country> will cost <totalPrice> credits", де:
// • <country> — це країни доставки
// • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;

  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));

// =========================== //
// ======= homework-03 ======= //

// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику:
// • content — перший параметр, ширина контенту
// • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
// • border — третій параметр, значення товщини бордера для кожної зі сторін
// Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове
// Доповни код функції так, щоб вона повертала число —загальну ширину елемента
// При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box

function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) +
    2 * Number.parseFloat(padding) +
    2 * Number.parseFloat(border)
  );
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));

// =========================== //
