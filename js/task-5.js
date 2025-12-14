// ======= task-01 ======= //

// Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала результат її виклику
// Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється

function deliverPizza() {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza() {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage('Royal Grand', makePizza));
// "Pizza Royal Grand is being prepared, please wait..."

console.log(makeMessage('Ultracheese', deliverPizza));
// "Delivering Ultracheese pizza."

// ======================= //
// ======= task-02 ======= //
// ======================= //
// ======= task-03 ======= //
// ======================= //
// ======= task-04 ======= //
// ======================= //
// ======= task-05 ======= //
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
