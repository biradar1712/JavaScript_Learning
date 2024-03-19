function stringHandsOn(){
    
    var string = "   Hey you are doing good, keep it up   ";
    console.log(`Step 1 : The given string is -    Hey you are doing good, keep it up   `);
    
    var stringLength = string.length;
    console.log(`Step 2 : The Length of the string is - ${stringLength} `);
    
    var lengthBeforeTrim = string.length;
    var stringAfterTrim = string.trim();
    var lengthAfterTrim = stringAfterTrim.length;
    console.log(`Step 3 : After removing spaces sentence is - ${stringAfterTrim} and it's length is ${lengthAfterTrim}`);

    console.log(`Step 4 : Total space removed is ${lengthBeforeTrim - lengthAfterTrim}`);

    var stringTrim = string.trim();
    var result = stringTrim.charAt(0);
    var resultValue = stringTrim.charAt(stringTrim.length-1);
    console.log(`Step 5 : First character after trim is - ${result}, and last character after is ${resultValue}`);

    var totalwords = stringTrim.split(" ");
    var word = totalwords.length;
    console.log(`Step 6 : The count of tatal available words after step 3 is - ${word}.`);

    var index = stringTrim.indexOf("good");
    console.log(`Step 7 : Index of word good is ${index}.`);

    var sub = stringTrim.substring(22);
    console.log(`Step 8 : Substring starting from index 22 is - ${sub}`);

    var stringEnd = stringTrim.endsWith("up");
    console.log(`Step 9 : Checking ths string is ending word "up" after step 3 is - ${stringEnd}`);

    var stringStart = stringTrim.startsWith("Hey");
    console.log(`Step 10 : Checking ths string is ending word "Hey" after step 3 is - ${stringStart}`);



}
stringHandsOn();