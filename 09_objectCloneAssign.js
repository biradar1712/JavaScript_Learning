
console.log(`1.Creating object bankSbi`);
console.log(`2.Creating object bankLoacation`);
console.log(`3.Cloning both objects using Objects.assign()`);


const bankSbi = {
   bankName: "SBI",
   branch: "Bavdhan",
   accountNo: 12345,
   ifscCode: 112233,
   
}
const bankLocation = {
    street: "Dpalace",
    city: "Pune",
    pin: 411021
}
const cloneObject = Object.assign(bankSbi,bankLocation);
console.table(cloneObject);

console.log(`4.Create object rateOfInterest`);
const rateOfInterest = {
    homeLoanInterest: 5.5,
    personalLoanInterest: 12.4,
    duelInterest: 10
}
console.table(rateOfInterest);

console.log(`5.Merging the step 1, step 2, and step 4, objects into new objects namely --> sbiDetails`);
const mergedObject = Object.assign(bankSbi,bankLocation,rateOfInterest);
console.table(mergedObject);

console.log(`6.Traverse this merged object - step 5 using for in loop `);
for (const key in mergedObject) {
     {
        console.log(key + " ==>  " + mergedObject[key]);
        
    }
}