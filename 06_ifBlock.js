

var marriageCheck = function(age, candidateName){
     if (age>=2){
        console.log(`Eligible for Marriage : ${age} ${candidateName}`);
     }
     
}
marriageCheck(23,"Bill");
marriageCheck(21,"Stew");
marriageCheck(20,"Elon");
console.log("==============================================");
console.log("------&&-----");

var marriageEligilbility = function(age, candidateName, gender){
    if (age>=21 && gender=="Male") {
        console.log((`Eligible : Age:${age}, Name:${candidateName}`));
    }
}
marriageEligilbility(23, "Bill", "Male")
marriageEligilbility(20, "Elon", "Male")