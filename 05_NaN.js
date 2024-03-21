
var a = 0;
var b = 0
var result = a/b;
console.log(`a divide by b is : ${result}`);

console.log(`Data type of ==> ${ typeof result}`);


console.log("======conversion======");

var n1 = "10";
console.log(`Value of n1 is ${n1} and it's type is : ${typeof n1}`);

console.log("=======Conversion of n1=====");
var n2 = +n1;
console.log(`value of n1 is ${n2} after converting and it's type is : ${typeof n2}`);



console.log("===============Implicit(automatic) Conversion=========");
 var num1 = "100";
 var num2 = 100;
 console.log(`Equity check : ${num1 == num2}`); // automatic conversion means implicit conversion

 console.log(`Strict Equity check : ${num1 === num2}`);

 console.log(`Addition is : ${num1 + num2}`);
 console.log(`Operation : ${true + 1}`);