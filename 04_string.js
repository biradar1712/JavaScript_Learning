
var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of characters is:",totalChars);

var charAt0 = greet.charAt(0);
console.log("Character at index 0:",charAt0);

var charAt2 =greet.charAt(2);
console.log("Character at index 2 is:",charAt2);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is:",charAt11);

var sentence = "When you join meetings, webinars, chats or channel hosted on zoom, your profile information";
var totalChars = sentence.length;
console.log("The length of the sentence is:", totalChars);
         //This will give lenth means total index no
var lastchar = sentence.charAt(sentence.length-1);
console.log("The last character is:",lastchar);  
var charAt35 = sentence.charAt(35);
console.log("Character at index 35 is:",charAt35);


console.log("==========Indexof Method==========");
var greet= "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("IndexOf M char is:", indexOfM);

var Name = "Vaishnavi";
var indexOfS = Name.indexOf('s'); 
console.log("IndexOf char s is:", indexOfS);


console.log("==========Concatinating()==========");
var Firstname = "Vaishnavi";
var Lastname = " Biradar";
var nameConcat = Firstname.concat(Lastname);
console.log("The concatinated name is:",nameConcat);


console.log("==========replace()==========");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning","Afternoon");
console.log(`After replace string is : ${afterReplace}`);

console.log("==========toUpperCase()==========");
var greet = "Good Morning";
var greetoUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is: ${greetoUpperCase}`);



console.log("==========trim()==========");

var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(`${greet} its length is :${lengthBeforeTrim}`);

var greetAfterTrim = greet.trim;
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greetAfterTrim} its length is ${lengthAfterTrim}`);

console.log(`Total spaces removed is : ${lengthBeforeTrim- lengthAfterTrim}`);

console.log("======================================");

var greet = "   Vaishnavi Biradar   ";
var lengthBeforeTrim = greet.length;
console.log(`${greet} its length is : ${lengthBeforeTrim}`);

var greetAfterTrim = "greet.trim";
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greetAfterTrim} its length is ${lengthAfterTrim}`);
console.log(`Total spaces removed is : ${lengthBeforeTrim-lengthAfterTrim}`);


console.log("==========includes()==========");

var greet = "Good Morning";
var result =greet.includes("Mor");
console.log(`Is string "${greet}" includes the word or char Mor in :${result}`);



console.log("==========search()============");

var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`"Morning" is available in ${result}`);

var result = greet.search("God");
console.log(`God is available in ${result}`);


console.log("==========slice()=========="); //it gives a perticular portion or section of a string.
 
var greet = "Good Morning";
var result = greet.slice(3,4);
console.log(`Slice is ${result}`);
var greet = "Good Morning";
var result = greet.slice(3,7);
console.log(`Slice is ${result}`);


console.log("==========slipt()=========");
 var greet = "Good Morning";
 var resultValue = greet.split(" ");
 console.log(resultValue);
 console.log(`Total words are ${resultValue.length}`);


console.log("=========================================");



 console.log("WAF with name totalWord() with one argument");

 function totalWord(sentence){
    var sentence = sentence.split(" ");
    var totalWords = sentence.length;
    return totalWords 
 }

 var totalWords = totalWord("I am happy buddy");
 console.log(`"I am happy buddy" total number of words are ${totalWords}`);

 var totalWords = totalWord("I am learning Javascript the language of internet")
 console.log(`"I am learning Javascript the language of internet" total numbers of words are ${totalWords}`);
 