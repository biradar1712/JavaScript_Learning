

let person = {
    name : "Gajanan",
    city :"Pune",
    experience : 10
}

console.log(person);
console.table(person);

console.log(`Type of person is: ${typeof person}`);

console.log(`=====Acessing object properties =====`);

let personCity = person["city"]; // []Notation
console.log(`Person city is : ${personCity}`);

const personExp = person.experience; // .Notation
console.log(`Person experience is : ${personExp}`);

console.log(`=====Adding properties in object  =====`);
person.isMarried = true
console.log(person);

console.log(`=====Deleting properties from an object =====`);
delete person.experience;
console.log(person);

console.log(`=====Creating an empty  object =====`);
let address = {

}
address.pin = 112233
console.log(address);

console.log(`====creating  method and fun inside the object====`);
const bankSbi = {
    name : "SBI Bank Wakad",
    city : " Pune",
    totalStaff : 90,
    homeLoanROI : 9.5,
    bankDetails : function(){
       console.log(`Bank Details`);
       console.log(`Name: ${this.name}, City: ${this.city}, totalStaff: ${this.totalStaff}, Home Loan ROI: ${this.homeLoanROI} `);
    },
    amountToPay:
}
bankSbi.bankDetails();