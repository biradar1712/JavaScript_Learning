
const arrayNumbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`================1==============`);
console.log(`>>Finding total elemnts or length`);
console.log(`Total Length of an array is:${arrayNumbers.length}`);

console.log(`================2==============`);
console.log(`Fisrt Element of an array is : ${arrayNumbers[0]}`);
const len = arrayNumbers[arrayNumbers.length-1];
console.log(`Last Element of an array is : ${len}`);

console.log(`================3==============`);
console.log(`>>Log the third last element using length property`);
const length = arrayNumbers[arrayNumbers.length-3];
console.log(`Last Third Element of an array is : ${length}`);

console.log(`================4==============`);
console.log(`>>All Even number using for of loop`);
function evenNumbers(arr){
    const evenNumbers = [];
    for (const number of arr) {
     if (number % 2 === 0) {
         evenNumbers.push(number);
     }
    }
    return evenNumbers;
 }
 const findEvenNumbers = evenNumbers(arrayNumbers);
 console.log(" Even numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :",findEvenNumbers);

console.log(`================5==============`);
console.log(`>>Odd number using for of loop`);
function oddNumbers(arr){
    const oddNumbers = [];
    for (const number of arr) {
     if (number%2!=0) {
         oddNumbers.push(number);
     }
    }
    return oddNumbers;
 }
 const findOddNumbers = oddNumbers(arrayNumbers);
console.log(" Even numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :",findOddNumbers);

console.log(`================6==============`);
console.log(`>>Sum of all even positioned elements`);
var add = 0;
for (const element of findEvenNumbers) {
    add = add + element;

}
console.log(add);


console.log(`================7==============`);
console.log(`>>Sum of all odd position numbers`);
var odd = 0;
for (const element of findOddNumbers) {
    odd = odd + element
}
console.log(odd);

console.log(`================8==============`);
console.log(`>>Finding the sum of all array elements`);
let sum = 0;
for (const element of arrayNumbers) {
    sum = sum + element
}
console.log(`>>sum of an array is : ${sum}`);

console.log(`================9==============`);
console.log(`Multiple of 5`);
let multiplication = 5;
for (const element of arrayNumbers) {
    multiplication = multiplication * element;
}
console.log(`Multiplication of 5 : ${multiplication}`);

console.log(`================10==============`);
console.log(`Is number 115 available in arrayNumbers`);
console.log(`>>Number 115 is available or not :${arrayNumbers.includes(115)}`);

console.log(`================11==============`);
console.log(`>>Number 23 available in arrayNumber : ${arrayNumbers.includes(23)}`);

console.log(`================12==============`);
console.log(`>>Insert number 55, 66 at index 3`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);

console.log(`================12==============`);
console.log(`>>Deleting 3 elements starting from index 4`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);