var a = 5
var b = a++;
console.log(a);
console.log(b);

var n1 = 5;
var result  = n1++ + ++n1 +n1++;
console.log(result);

var a = 2;
var b= ++a + ++a + a++ - --a;
console.log(a); 
console.log(b);

var a = 4;
var b = a-- + ++a + ++a + a++
console.log(a);
console.log(b);

var a = 7;
var result = a%2 == 0 ? "EVEN" : "ODD";
console.log(`${result}`);