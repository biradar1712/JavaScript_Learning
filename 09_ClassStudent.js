
// File --> 09_ClassStudent.js
//class name --> Student
//Data Member: rollNumber, name, division
// Member function: getdatail()
//Create 3 object from Student

class Student {
    name
    rollNumber
    division
    constructor(myName, myrollNumber, mydivision){
        this.name = myName;
        this.rollNumber = myrollNumber;
        this.division = mydivision
   }
   detail(){
    console.log(`Student Details --> Name: ${this.name}, RollNumber: ${this.rollNumber}, Division: ${this.division}`);
   }

}

const vaishnavi = new Student("Vaishnavi", 5, 'A');
vaishnavi.detail();

const nandini = new Student("Nandini", 6, 'A');
nandini.detail();

const pooja = new Student("Pooja", 7, 'B');
pooja.detail();