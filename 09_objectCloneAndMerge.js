const person ={
    name: "Gajanan",
    city: "Pune",
    experience: 10
}

// cloning an object

const personClone = {...person}
console.log(person);

personClone.name = "Elon";
console.log(personClone);

// Cloning an Object using Object.assign() 
console.log(`===== Cloning an Object using Object.assign()====`);
const cloneObject = Object.assign({}, person);
console.log(cloneObject);


console.log(`=======Merging an object======`);

const personGK ={
    name: "Gajanan k",
    city: "Pune",
    experience: 10
}
const address ={
    flatNumber: 1005,
    wing: "B2 Block",
    street: "Wakad"
}

const mergedObject = Object.assign(personGK, address);
console.table(`=====mergedObject====`);

console.log(`=====personGk=====`);
console.table(personGK);