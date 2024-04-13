
var word = "JavaScript";
for (let index = 0; index < word.length; index++) {
    var element =  word.charAt(index);
    console.log(element); 
    
}

var word1 = "Vaishnavi";
for (let index = 0; index < word1.length; index++) {
    var element = word1.charAt(index);
    console.log(element);
}

console.log(`======WAP to count the char a=====`);
var word = "Javascript"
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char  = word.charAt(index);
    if (char=='a'){
    count = count+1;
    }
} 
console.log(`Char a count is: ${count}`);