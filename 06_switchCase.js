var day = 4;
switch (day) {
  case 1:
    console.log(`Sunday`);
    break;
  case 2:
    console.log(`Monday`);
    break;
  case 3:
    console.log(`Tuesday`);
    break;
  case 4:
    console.log(`Wednesday`);
    break;
  case 5:
    console.log(`Thursday`);
    break;
  case 6:
    console.log(`Friday`);
    break;
  case 7:
    console.log(`Saturday`);  
  default:
    break;
}

console.log("----------without break;-------------");

var day = 4;
switch (day) {
  case 1:
    console.log(`Sunday`);
    break;
  case 2:
    console.log(`Monday`);
    break;
  case 3:
    console.log(`Tuesday`);
    break;
  case 4:
    console.log(`Wednesday`);
    
  case 5:
    console.log(`Thursday`);
    
  case 6:
    console.log(`Friday`);
    
  case 7:
    console.log(`Saturday`);  
  default:
    break;
}// we can remove btreak from wherever we want