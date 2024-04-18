
const person ={
    name: "Gajanan",
    city: "Pune",
    experience: 10
}
//person = {
 //   pin: 1234
//}
//Not allowed

console.log(person);
person.city = "Mumbai";
console.log(person);

const address ={
    flatNumber: 1005,
    wing: "B2 Block",
    street: "Wakad"
}
console.log(address);
Object.freeze(address);

address.street = "Kharadi"; //won't reflect this  change as object adress in object
console.log(address);

console.log(`======in operator======`);

const result = "street" in address;
console.log(result);

console.log("pin" in address);

console.log(`======getting the keys and values  from an object======`);
const keys = Object.keys(address);
console.log(keys);

const values = Object.values(address);
console.log(values);
