console.log("---------Implicit conversion to String--------");
console.log("--numeric string used with + gives string type--");

var a = '3';
var b =2;
var result = a + b;
console.log(`Result of '${a}' + ${b} is : "${result}"`);

var a = '3';
var b = true;
var result = a + b;
console.log(`Result of '${a} + {b} is : "${result}"`);

var a = '3'
var b = undefined;
var result = a + b;
console.log(`Result of ${a} + ${b} is : "${result}"`);

var a = '3';
var b = null;
var result = a + b;
console.log(`Result of ${a} + ${b} is : "${result}"`);

console.log("------Implicit boolean conversion to number-----");

var a = '4';
var b = true;
var result = a - b;
console.log(`Conversion of ${a} - ${b} is : ${result}`);

var a = '4';
var b = true;
var result =  4 + true;
console.log(`conversion of ${a} + ${b} is : ${result}`);

var a = 4;
var b = false;
var result = 4 + false;
console.log(`Conversion of ${a} + ${b} is : ${result}`);


console.log("-----Implicit string conversion to number-----");

var a = '4';
var b = '2';
var result = a - b;
console.log(`Conversion of '${a}' + '${b}' is : ${result} `);

var a = '4';
var b = '2';
var result = a * b;
console.log(`Conversion of '${a}' *  ${b} is : ${result}`); 

var a = '4';
var b = '2';
var result = a / b;
console.log(`Conversion of '${a}' /  ${b} is : ${result}`); 

console.log("======Undefined used with number, boolean or null given Nan====");

var a = 4;
var b = undefined;
var result = a + b;
console.log(`result is : ${result}`);

var a = 4;
var b = undefined;
var result = a - b;
console.log(`result is : ${result}`);

var a = true;
 var b = undefined;
 var result = a + b;
 console.log(`result is : ${result}`);

 var a = null;
 var b = undefined;
 var result = a + b;
 console.log(`result is : ${result}`);

 console.log("====Explicit conversion====");

var n1 = '324';
var result = Number(n1);
console.log(`n1:${n1} it's type:${typeof n1}, result:${result} it's type:${typeof result}`);

var n2 = '324-1';
var result = Number(324e-1);
console.log(`n2:${n2} it's type:${typeof n2}, result:${result} it's type:${typeof result}`);


var n3 = 'true';
var result = Number(true);
console.log(`n3:${n3} it's type:${typeof n3}, result:${result} it's type:${typeof result}`);


var n4 = false;
var result = Number(false);
console.log(`n4:${n4} it's type:${typeof n4}, result:${result} it's type:${typeof result}`);


console.log("=====================");

var a = 'hello';
result = Number(a);
console.log(`Result is : ${result}`);

var b = 'undefined';
result = Number(b);
console.log(`Result is : ${result}`);

var a = 'Nan';
result = Number(a);
console.log(`Result is : ${result}`);