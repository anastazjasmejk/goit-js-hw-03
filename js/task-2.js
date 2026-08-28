// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"


// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   }

//   return message.slice(0, maxLength) + "...";
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`; }
function makeArray(firstArray, secondArray, maxLength) {
  let addedArray = firstArray.concat(secondArray);
  if (addedArray.length > maxLength) {
    return addedArray.slice(0, maxLength);
  } else {
    return addedArray;
  }
}

console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []