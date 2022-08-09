/* 
   6) You are given an array:
   var fruits = ['Apple', 'Banana', 'Orange'];
   a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
   b) Remove ‘Orange’ and add ‘Watermelon’.
*/

var fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);

var bananaIndex = fruits.indexOf("Banana");
fruits[bananaIndex] = "Mango";

console.log(fruits);

fruits.pop();
fruits.push("Watermelon");
console.log(fruits);
