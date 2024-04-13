
function gardeCalulation(marks){
    //invalid inputs like....-tive marks,abc,null,pune,0,no under string
   
    if (marks >= 90){
    } else if (marks>=90) {
       console.log(`Fantastic Marks : ${marks}, and Your grade is A+`);

    } else if(marks>=75 && marks>90){
        console.log(`Excellent Marks ${marks} and Your Grade is A`);

    } else if(marks>=50 && marks<75){
        console.log(`Good Marks : ${marks} and Your Grade is B`);

    } else if (marks>=35 && marks<50) {
    
        console.log(`Marks is : ${marks} and Your Grade is C, Need improvement`);
    }
    // invalid inputs like...null,-tive num,string,pune,0   
        if (marks==null || marks<=0 || marks>100 || isNaN(+marks)) {
            console.log(`Invalid Inputs: ${marks}`);
    } else {
        console.log(`Valid input : ${marks}`);
    }
}
gardeCalulation(98);
gardeCalulation(80);
gardeCalulation(90);
gardeCalulation(0);
gardeCalulation(150);
gardeCalulation(-7);
gardeCalulation(35);
gardeCalulation(29);
gardeCalulation(64);
gardeCalulation(49);
gardeCalulation("91");
gardeCalulation("Eighty");
gardeCalulation(undefined);
gardeCalulation(null);