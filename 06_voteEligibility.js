

var voteEligibility =  function (age){
    if (age>=18 && age<=130) {
        console.log(`Eligible for voting : Age${age}`);
    } else if (age<18) {
        console.log(`Not eligible for voting :age${age}`);
    } else if (age>=18 || age>130) {
        console.log(`Invalid data : Age${age}`);
    } else{
        console.log("Information Not Found");
    }
    
            
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility("null");
