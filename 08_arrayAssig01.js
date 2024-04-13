const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`===========Step 1===========`);
console.log(`The fisrt element of an array is : ${fruits_seasonal[0]}`);
const lastElement = fruits_seasonal[fruits_seasonal.length -1];
console.log(`The last element of an array is : ${lastElement}`);

console.log(`----------------------------------`);

console.log(`===========Step 2 Adding element Papaya before Banana===========`);
fruits_seasonal.unshift("Papaya")
console.log(fruits_seasonal);

console.log(`----------------------------------`);

console.log(`===========Step 3 Removing Mango from an array===========`);
fruits_seasonal.splice(4, 1)
console.log(fruits_seasonal);

console.log(`----------------------------------`);

console.log(`===========Step 4===========`);
console.log(`Adding element or inserting element 'pineapple' at the last`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`----------------------------------`);
console.log(`===========Step 5===========`);
console.log(`Inserting an element-Dragon before Watermelon`);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log(`----------------------------------`);
console.log(`===========Step 6===========`);
console.log(`Replacing an element 'oarange with 'kiwi`);
fruits_seasonal[2] = "Kiwi";
console.log(fruits_seasonal);

console.log(`----------------------------------`);

console.log(`===========Step 7===========`);
console.log(`Log the elemnts starting from 1 to 4`);
const slicedFruits = fruits_seasonal.slice(1, 5);
console.log(slicedFruits);

console.log(`----------------------------------`);
console.log(`===========Step 8===========`);
 const lastThree = fruits_seasonal.length-3;
 const sliceElement = fruits_seasonal.slice(lastThree)
console.log(sliceElement);