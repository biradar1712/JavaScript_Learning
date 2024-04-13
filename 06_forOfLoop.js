//what is for of loop?....can de asked

const arrayNumbers  = [2, 4, 1, 7, 9, 8,];

for(const element of arrayNumbers){
    console.log(element);
}

let sum = 0;
for (const element of arrayNumbers) {
    sum = sum + element
    
}
console.log(`sum of an array: ${sum}`);


console.log(`---------------------------------`);

let multiplication = 1;
for (const element of arrayNumbers) {
    multiplication = multiplication * element;
}
console.log(`Multiplication of an array is : ${multiplication}`);

console.log(`---------------------------------`);

var friendList = ["Jenny", "Bill", "Andy", "Elon"];
for (const element of  friendList) {
    console.log(element);
    
}

console.log(`---------------------------------`);
console.log(`====Join() Method====`);

console.log(friendList);
const element = friendList.join(",");
console.log(element);

console.log(friendList.join("="));
