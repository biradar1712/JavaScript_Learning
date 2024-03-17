console.log("=====1=====");
function Name(){
    console.log("Codemind");
}
Name();

function tech(){
    console.log("Technology");
}
tech();


console.log("=====2=====");

function personalDetails(firstName, lastName, collegeName){
   console.log("First name is :", firstName);
   console.log("Last name is :", lastName);
   console.log("College name is :",collegeName);
}
personalDetails("Vaishnavi", "Biradar", "Modern Clg of Arts, Science and Commerce.");


console.log('=====3=====');

function swapvalues(arg1, arg2){
   console.log("Values Before swap:", arg1, arg2);

   var temp = arg1;
   arg1 = arg2;
   arg2 = temp;
   console.log("Values After swap :",arg1, arg2);

}
swapvalues("Virat", "Anushka");
swapvalues("1000", "2000");



console.log("=====4=====");

function addThreeValues(arg1, arg2, arg3){
    console.log("Arguments :",arg1, arg2, arg3);
    var add = arg1+arg2+arg3;
    console.log("Addition is :",add); 
}
addThreeValues(10.23, 600, 40);
addThreeValues(" Hello", " Good", " Morning");




