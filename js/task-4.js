// function isEnoughCapacity(products, containerSize) {
//   let sumOfProducts = 0;

//   for (const number of Object.values(products)) {
//     sumOfProducts += number;
//   }

//   if (sumOfProducts <= containerSize) {
//     return true;
//   }

//   return false;
// }

// function isEnoughCapacity(products, containerSize) {
//   if (!products || typeof containerSize !== 'number') return false;

//   return (
//     Object.values(products).every(
//       (num) => typeof num === 'number' && num >= 0
//     ) &&
//     Object.values(products).reduce((sum, num) => sum + num, 0) <= containerSize
//   );
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// function calcAverageCalories(days) {
//   let totalCalories = 0;

//   for (const day of days) {
//     totalCalories += day.calories;
//   }

//   return totalCalories / days.length;
// }

// function calcAverageCalories(days) {
//   return days.reduce((sum, day) => sum + day.calories, 0) / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 3010 },
//     { day: 'tuesday', calories: 3200 },
//     { day: 'wednesday', calories: 3120 },
//     { day: 'thursday', calories: 2900 },
//     { day: 'friday', calories: 3450 },
//     { day: 'saturday', calories: 3280 },
//     { day: 'sunday', calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 2040 },
//     { day: 'tuesday', calories: 2270 },
//     { day: 'wednesday', calories: 2420 },
//     { day: 'thursday', calories: 1900 },
//     { day: 'friday', calories: 2370 },
//     { day: 'saturday', calories: 2280 },
//     { day: 'sunday', calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
