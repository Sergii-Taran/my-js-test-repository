'use strict';

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;

//   if (totalPrice > customerCredits) {
//     return 'Insufficient funds!';
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

// console.log(makeTransaction(5, 3000, 23000));
// console.log(makeTransaction(3, 1000, 15000));
// console.log(makeTransaction(10, 5000, 8000));
// console.log(makeTransaction(8, 2000, 10000));
// console.log(makeTransaction(10, 500, 5000));

// ===================== //

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

// ===================== //

// function checkForSpam(message) {
//   const lowerCaseMessage = message.toLowerCase();

//   if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// ===================== //

// function getShippingCost(country) {
//   let price;

//   switch (country) {
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
//     case 'Ukraine':
//       price = 300;
//       break;

//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
//   return `Shipping to ${country} will cost ${price} credits`;
// }

// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Sweden'));

// ===================== //

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalDroidsCost = quantity * pricePerDroid;

  if (totalDroidsCost > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `You ordered ${quantity} droids worth ${totalDroidsCost} credits!`;
  }
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));

// ===================== //

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

// ===================== //
// ===================== //
// ===================== //
