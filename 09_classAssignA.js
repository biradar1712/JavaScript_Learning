
class Vehicle {
    
    constructor(name, number, mileage, colour, ratings, fueltype){
        this.name = name;
        this.number = number;
        this.mileage = mileage;
        this.colour = colour;
        this.ratings = ratings;
        this.fueltype = fueltype;
    }
    detail(){
        
    console.log(`Name: ${this.name}`);
    console.log(`Number: ${this.number}`);
    console.log(`Mileage: ${this.mileage}`);
    console.log(`Colour: ${this.colour}`);
    console.log(`Ratings: ${this.rating}`);
    console.log(`Fueltype: ${this.fueltype}`);

    }

} 


console.log(`----------------------------------------------`);
const thar = new Vehicle("Mahindra-Thar",5777, 9, "Black", 4.5, "Petrol" );
thar.detail();

console.log(`----------------------------------------------`);

const gwagon = new Vehicle("Mercedes-AMG G 63",6848, 8.5, "Black", 7.3, "Petrol")
gwagon.detail();

console.log(`----------------------------------------------`);

const audi = new Vehicle("Audi A4",3456, 17.4, "White", 7.6, "Petrol");
audi.detail();

console.log(`----------------------------------------------`);

const swift = new Vehicle("Swift-Dzire", 7555, 22.41, "White", 4.3, "Petrol")
swift.detail();

console.log(`----------------------------------------------`);

const kiasonet = new Vehicle("Kia Sonet", 1722, 18.2, "Red", 4.8, "Diesel" );
kiasonet.detail();

console.log(`----------------------------------------------`);

let arrayOfVehicle = [thar, gwagon, audi, swift, kiasonet];
for (const element of arrayOfVehicle) {
    console.log(element);
}

console.log(`==================Step 2=====================`);

class College {
    constructor(collegeName,city,pinCode,totalStudents){
        this.collegeName = collegeName;
        this.city = city;
        this.pinCode = pinCode;
        this.totalStudents = totalStudents;
    }
    display(){
    console.log(`College Name: ${this.collegeName}, City: ${this.city}, PinCode: ${this.pinCode}, TotalStudents: ${this.totalStudents}`);
     }
}

const modern = new College("Modern College", "Pune", 411023, 60000);
modern.display();

const mit = new College("MIT-WPU","Kothrud", 411057, 15000);
mit.display();

const sinhagad = new College("Sinhagad College", "Narhe-Ambegaon", 456200, 10000);
sinhagad.display();

const university = new College("Pune University", "Ganeshkhind", 452136, 10000);
university.display();
    
