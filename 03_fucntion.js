//1. Function woth no argument and no return value

function show(){
    console.log("Inside show function");

}
show();

//2.Function with arguments and no return value

function add(n1,n2,n3){
   console.log("Arguments:",n1, n2, n3);
   var result = n1+n2+n3;
   console.log("Addition is:", result);
}
add(3,6,7)
add(99.89, 67, 456789);
add(6,7);
add(16, 9, 90, 44);
add("hi", " Good ", " Morning ");


//3.Function with arguments and return value

function subtract(num1, num2){
    console.log("=====Subtraction=====");
    console.log("Arguments:", num1, num2);
    var result = num1 - num2;
    return result;

}
var returnvalue = subtract(9, 4);
console.log("Reuslt of Subtraction is:", returnvalue);

var returnvalue = subtract(9, 4);
console.log("Reuslt of Subtraction is:", returnvalue);