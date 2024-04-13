

let arrayNumbers = [2,4,1,7,9,8];
console.log(arrayNumbers);

console.log(`====Total Elements or Length====`);
console.log(`${arrayNumbers.length}`);

console.log(`-------------------------------`);

console.log(`====Acessing array elements====`);
const element0 = arrayNumbers[0];
console.log(`0th elemnt is ${element0}`); 

console.log(`-------------------------------`);

console.log(`3rd index elemnt from the array : ${arrayNumbers[3]}`);

console.log(`-------------------------------`);

console.log(`====Acessing array's last elemnt====`);
console.log(arrayNumbers[5]);

console.log(`-------------------------------`);

console.log(`====Acessing array's last element using length property====`);
const len = arrayNumbers.length;
console.log(arrayNumbers[len-1]);

console.log(`-------------------------------`);

console.log(`====Update elemnts====`);
arrayNumbers[2] = 200;
console.log(arrayNumbers);

console.log(`====include()====`);
console.log(arrayNumbers.includes(7));
console.log(arrayNumbers.includes(5)); 

console.log(`-------------------------------`);

console.log(`====Traversing an array====`);
const arrayNums = [2,4,1,7,9,8];
for (let index = 0; index < arrayNums.length; index++) {
    const element = arrayNums[index];
    console.log(element);
}

console.log(`-------------------------------`);

console.log(`====Traversing an array in reverse====`);
for (let index = arrayNums.length-1; index >=0; index--) {
    const element = arrayNums[index];
    console.log(element);
}

console.log(`If we want the array numbers in same line then use concatination`);
let word = "";
for (let index = arrayNums.length-1; index >=0; index--) {
    const element = arrayNums[index];
    word = word + ', ' + element;
    console.log(element);
}
console.log(word);