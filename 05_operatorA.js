console.log("=====Step 1=====");
function squareOfWordLength(value){
  var lengthOfWord = value.length;
  var result = lengthOfWord*lengthOfWord;
  console.log(`Length of given string ${value} is : ${lengthOfWord}`);
  return result;
  
}

var resultValue = squareOfWordLength("JavaScript");
console.log(`Square of javascript is : ${resultValue}`);
console.log("-------------------------------------");
var resultValue = squareOfWordLength("Google Chrome");
console.log(`Square of google chrome is : ${resultValue}`);
console.log("-------------------------------------");
var resultValue = squareOfWordLength("Developer Smart");
console.log(`Sqaure of developer smart is : ${resultValue}`);


console.log("======Step 2=====");



function developer(){
     var sentence = "I am Angular Developer";
    console.log(`Length of the string ${sentence} is : ${sentence.length}`);
    var sentencevalue = sentence.split(" ");
    console.log(`Total number of words ${sentence} is : ${sentencevalue.length}`);
    var result1 = sentence.length/sentencevalue.length;
    console.log(`Division of both string length and number of wors are : ${result1}`);
    var result2 = sentence.length*sentencevalue.length;
    console.log(`The length of the string and Multiplication of words are : ${result2}`);
}
developer();