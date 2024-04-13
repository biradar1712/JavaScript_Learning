console.log(`---------------1-------------`);
console.log(`====count vowels====`);

const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
     let char = word.charAt(index);
    let lowerCase = char.toLowerCase();
    if(vowels.includes(lowerCase)){
        vowelsCount++;
    }    
}
console.log(`Total number of vowels in string is: ${vowelsCount}`);

console.log(`---------------2-------------`);

let sum = 0;
for (let index = 0; index <=5; index++) {
    sum = sum + index * index * index;
    
}
console.log(`sum of cube is :${sum}`);

console.log(`---------------3-------------`);

function oddPositionedChars(word){
    for (let index = 0; index < word.length; index++) {
        const elemnt = word.charAt(index);
        if (index%2!=0 && element !=" ") {
            console.log(element);
        }
    }
    
}
oddPositionedChars("Hard word always pays back");

