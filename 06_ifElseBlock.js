var person = "Raman";
 var age = 19;  
 
// Voting age shoul be greater than eqaual 18

if (age>=18) {
    console.log(`Yes, please vote. Age: ${age}, Name: ${person}`);
} else {
    console.log(`Sorry. please try next year. Age:${age}, Name: ${person}`);
    
}

var person ="Raman";
var age = 17;
if (age>=18) {
    console.log(`Yes, please vote. Age${age}, Name:${person}`);
} else {
    console.log(`Sorry. please try next year. Age:${age}, Name:${person}`);
}

console.log("----------------------------------");

function vote(person, age) {
    if (age>=18) {
        console.log(`Yes, please vote. Age${age}, Name:${person}`);
    } else {
        console.log(`Sorry. please try next year. Age:${age}, Name:${person}`);
    }
}
vote("Jenny", 34);
vote("Bill", 14);
vote("Elon", 18);
