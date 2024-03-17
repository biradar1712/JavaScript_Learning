
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


console.log("==========Concatinating==========");
var Firstname = "Vaishnavi";
var Lastname = " Biradar";
var nameConcat = Firstname.concat(Lastname);
console.log("The concatinated name is:",nameConcat);