// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//
// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`; }
function slugify(title) {
  const slug = title.split(' ').join('-').toLowerCase();
  return slug;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"