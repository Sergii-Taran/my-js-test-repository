// function slugify(title) {
//   const lowerTitle = title.toLowerCase();
//   const slug = lowerTitle.split(' ').join('-');

//   return slug;
// }

// console.log(slugify('Arrays for beginners'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// -----------------

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray;
//   }
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// ----------------------

function filterArray(numbers, value) {
  const arrayNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      arrayNumbers.push(numbers[i]);
    }
  }
  return arrayNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
