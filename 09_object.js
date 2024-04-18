

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
    //amountToPay: function (amount){
     //   return amount* 9.5;
    //}
     
}
bankSbi.bankDetails();
//const amountToPayable = person.amountToPay(50000);


console.log(`=====Nested Object=====`);
const jennyPerson ={
    name : "Jenny",
    age : 25,
    country : "USA",
     address :{
        flatNo : 102,
        flootNumber : 3,
        street : "Bergen road",
        city : "LA",
        state : "ABC",
        getAddress : function(){
            const address = `Flat Number: ${this.flatNo}, Floor Number: ${this.flootNumber}, Stree:${this.street}, City:${this.city},State: ${this.state}` ;
            return address; 
        }
        
     }
}
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of adress : ${typeof address}`);

console.log(`City : ${jennyPerson.address.city}`);
jennyPerson.address.state = "XYZ"  //updated value

console.log(`==========Jenny complete address to courier=========`);
const jennyAddress = jennyPerson.address.getAddress();
console.log(jennyAddress);