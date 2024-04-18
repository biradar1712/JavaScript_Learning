
let professor = {
    name : "Gajanan",
    age : 40,
    experience : 10,
    university : "SPPU",
    subject : "JavaSacript",
    city : "Pune",
    salary : 45000,
    degrees : {
     engineering : "CSC",
     PHD : "Adv Chemistry",
     masters : "M-tech"
    },
    certificates : [
        'Hacker Rank Participation',
        'Certificsate in IFE course',
        'Certificate in Adv Programming'
    ]
    
}

console.log(`1.Properties is 1st object are `);
console.log(professor);

console.log(`2.Properties is given in 2nd object are `);
console.log(professor.degrees);

console.log(`3.Add array`);
console.log(professor.certificates);

professor.totalExperience = 14;
console.log(`4.Added new Property to professor`);
console.log(professor);
console.log(`Total experience : ${professor.totalExperience}`);

professor.city = "Mumbai";
console.log(professor);
console.log(`5.Added new property to professor`);
console.log(`City is : ${professor.city}`);

professor.certificates.splice(2,0,"Oracle Certified");
console.log(`6.Added new certificate to professor`);
console.log(professor.certificates);

console.log(`5.Logging the last elemnt of array certificates`);
console.log(professor.certificates[3]);

console.log(`8.Log complete object: professor`);
console.log(professor);
console.log(professor.degrees);
console.log(professor.certificates);

console.log(`9.Traverse Array - Certificates using for loop`);
for (let index = 0; index < professor.certificates.length; index++) {
    const element = professor.certificates[index];
    console.log(element);
}
