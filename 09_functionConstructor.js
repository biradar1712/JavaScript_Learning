
function Person(name, city, age){
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.country = "Bharat"; 
const jenny = new Person("Jenny", "Pune", 23);
console.log(`${jenny.name}, ${jenny.city}, ${jenny.age}, ${jenny.country}`);

const bill = new Person("Bill", "Mumbai", 24);
console.log(`${bill.name}, ${bill.city}, ${bill.age}, ${bill.country}`);

const steve = new Person("Steve", "Satara", 25);
console.log(`${steve.name}, ${steve.city}, ${steve.age}, ${steve.country}`);

console.log(`----------------------------------------------------`);
//instanceof --> Tell us that the specific object is presnt in class or not nad if it is present it gives true.
const result = steve instanceof Person;
console.log(result);