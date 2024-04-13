
const arrayNumbers = [2, 4, 1, 7, 9, 8]
//... > this is used to spread array of create duplicate array of original array
console.log(arrayNumbers);
const newArray = [...arrayNumbers];
console.log(newArray);

console.log(`====Merging of two array with these methods====`);
const array1 = [1,3,4];
const array2 = [5,4,6,7];
//1st way to merge using concat()
 const array3 = array1.concat(array2);
 console.log(array3);
//2nd way to merge using ...spread method
const array4 = [...array1, ...array2];
console.log(array4);