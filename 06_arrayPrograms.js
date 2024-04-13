//Can you wap to get the sum of an array element...this qn can be asked


const arrayNumbers  = [2, 4, 1, 7, 9, 8,];
console.log(`==== Sum of an array  element====`); 
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element
}
console.log(`Sum of an array is : ${sum}`); 


console.log(`-----------------------------------`);


console.log(`==== Even index element====`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
    
}

console.log(`==== ODD index element====`);
for (let index = 1; index < arrayNumbers.length; index++) {
    if (index%2==1) {
        const element = arrayNumbers[index];
        console.log(element);
    }
    
}