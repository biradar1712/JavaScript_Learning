
// WA FE with one argument for values.."Javscript", "I am hero"
//Inside the FE check whether given word is even or odd length

var result = function(word){
  
    var result = word.length%2==0 ? "Even" : "ODD";
    console.log(`Given word "${word}" is with ${result} length`);

}
result("JavaScript")
result("I am hero")


// FE to check wether number is multiple of 3 or not

var multiple = function(num){
    var result = num%3==0 ? "YES" : "NO";
    console.log(`Given number ${num} is mulptiple of 3 ==> ${result}`);
}
multiple(9);
multiple(11);