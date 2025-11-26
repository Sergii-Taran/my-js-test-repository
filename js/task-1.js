'use strict';

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// ===================== //

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;

  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

// ===================== //

// function getElementWidth(content, padding, border) {
//   const contentWidth = parseFloat(content);
//   const paddingWidth = parseFloat(padding) * 2;
//   const borderWidth = parseFloat(border) * 2;
//   const totalWidth = contentWidth + paddingWidth * 2 + borderWidth * 2;

//   return totalWidth;
// }

function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) +
    2 * Number.parseFloat(padding) +
    2 * Number.parseFloat(border)
  );
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

// ===================== //

function calcBMI(weight, height) {
  const normalizedWeight = Number(replaceToDot(weight));
  const normalizedHeight = Number(replaceToDot(height));

  // const bmi = weight / height ** 2;
  // const powHeight = Math.pow(height, 2);

  const bmi = normalizedWeight / normalizedHeight ** 2;

  // return Math.round(bmi * 10) / 10;

  return roundDecimal(bmi, 1);
}

function replaceToDot(value) {
  return value.replace(',', '.');
}

function roundDecimal(value, num = 1) {
  return Math.round(value * 10 ** num) / 10 ** num;
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8

// ===================== //

// ===================== //
