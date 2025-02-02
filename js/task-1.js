function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

//

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;

  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));

//

function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border) * 2;

  const totalWidth = contentWidth + paddingWidth + borderWidth;

  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
