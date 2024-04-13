// Marks greater tahn eaqual to 35 and < 55  ==> grade C
// Marks greater tahn eaqual to 55 and < 75  ==> grade B  
// Marks greater tahn eaqual to 75 and < 100  ==> grade A

var marks = 80;
if (marks<35) {
    console.log(`Failed, Marks: ${marks}`);
} else {
    if (marks>=35 && marks < 55) {
        console.log(`Congratulations, Marks: ${marks} Grade: c`);

    } else {  
       if (marks>=55 && marks<100) {
        console.log(`Congratulations Marks${marks} Grdae: B`);
       } else {
        if (marks>=75 && marks<100) {
            console.log(`Grade: A`);
        } else {
            console.log(`Invalid Marks percentage`);
        }

       } 
    }
    
}