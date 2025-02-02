// const testString = 'jkjknjhbjk';

// if (testString.toLowerCase().startsWith('a')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// const result = testString.toLowerCase().startsWith('a') ? 'yes' : 'no';

// console.log(result);

// const firstName = 'Serhii';
// const lastName = 'Tarantini';
// const firstNameLength = firstName.length;
// const lastNameLength = lastName.length;

// if (firstNameLength > 4 && lastNameLength > 5) {
//   console.log(firstNameLength + lastNameLength);
// } else {
//   console.log('it is impossible to fulfill the condition');
// }

// const result =
//   firstNameLength > 4 && lastNameLength > 5
//     ? firstNameLength + lastNameLength
//     : 'it is impossible to fulfill the condition';

// console.log(result);

// const number = prompt('enter number:');

// if (number >= 55 && number <= 99) {
//   console.log('number falls within range');
// } else {
//   console.log('number does not fall within range');
// }

// const number = prompt('enter number:');

// if (number !== null) {
//   const num = Number(number);

//   if (!isNaN(num) && num >= 55 && num <= 99) {
//     console.log('number falls within range');
//   } else {
//     console.log('number does not fall within range');
//   }
// } else {
//   console.log('input canceled');
// }

// const userAge = 55;

// if (userAge >= 0 && userAge <= 16) {
//   console.log('children');
// } else if (userAge >= 17 && userAge <= 60) {
//   console.log('adults');
// } else if (userAge >= 61 && userAge <= 100) {
//   console.log('pensioners');
// } else {
//   console.log('age entered incorrectly');
// }

// const age = prompt('Enter the user age:');

// if (age !== null) {
//   const numAge = Number(age);
//   let group;

//   if (!isNaN(numAge)) {
//     if (numAge >= 0 && numAge <= 16) {
//       group = 'chidren';
//     } else if (numAge >= 17 && numAge <= 60) {
//       group = 'adults';
//     } else if (numAge >= 61 && numAge <= 100) {
//       group = 'pensioners';
//     } else {
//       group = 'incorrect age';
//     }

//     console.log(`The user belongs to the group: ${group}`);
//     alert(`The user belongs to the group: ${group}`);
//   } else {
//     console.log('Invalid value. Enter a number!');
//     alert('Invalid value. Enter a number!');
//   }
// } else {
//   console.log('Input canceled');
//   alert('Input canceled');
// }

// const drink = 'Tea'.toLowerCase();

// function orderDrink(drink) {
//   let price = 0;
//   switch (drink) {
//     case 'tea':
//       price = 30;
//       break;
//     case 'coffee':
//       price = 50;
//       break;
//     case 'juice':
//       price = 40;
//       break;

//     default:
//       return 'there is no such drink on the menu';
//   }
//   return `the cost of your order ${price}$`;
// }

// const result = orderDrink(drink);
// console.log(result);

// const drink = prompt('What drink would you like to order? (Coffee, Tea, Juice)')
//   .trim()
//   .toLowerCase();
// let price;

// switch (drink) {
//   case 'coffee':
//     price = 50;
//     break;
//   case 'tea':
//     price = 30;
//     break;
//   case 'juice':
//     price = 40;
//     break;
//   default:
//     price = null;
//     alert('Sorry, this drink is not on the menu');
// }

// if (price !== null) {
//   alert(
//     `The cost ${drink.charAt(0).toUpperCase() + drink.slice(1)}: ${price} $`
//   );
//   console.log(
//     `The cost ${drink.charAt(0).toUpperCase() + drink.slice(1)}: ${price} $`
//   );
// }

// let star = '*';

// for (let i = 0; i <= 7; i += 1) {
//   console.log(star);
//   star += '*';
// }

// for (let i = 1; i <= 7; i++) {
//   console.log('*'.repeat(i));
// }
