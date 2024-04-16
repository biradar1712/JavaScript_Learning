 

 let arrayMarks = [90, 56, 45, 72, 80, 84];
 let mapStudentMarks = new Map();
 mapStudentMarks.set("Elon",90);
 mapStudentMarks.set("Stew",56);
 mapStudentMarks.set("Jenny",45);
 mapStudentMarks.set("Ratan", 72);
 mapStudentMarks.set("Andy", 80);
 mapStudentMarks.set("Larry", 84);

 mapStudentMarks.set("Ratan", 99); //Adding duplicate key
 mapStudentMarks.set("Gajanan",45);//Adding duplicate key
 console.table(mapStudentMarks);

 const jennyMarks = mapStudentMarks.get("Jenny");
 console.log(`jenny Marks: ${jennyMarks}`);


 console.log(`----------------------------------------`);
  
 const isAvailable = mapStudentMarks.has("Larry"); //has method written the key is available or not
 console.log(`Is key "Larry" available : ${isAvailable}`);

 console.log(`Is key "sundar" available :${mapStudentMarks.has("sundar")}`);


 console.log(`----------------------------------------`);
 const totalElements = mapStudentMarks.size;
 console.log(`Size of Map or total Elements in the map is : ${totalElements}`);

 console.log(`----------------------------------------`);
 mapStudentMarks.delete("Andy");;
 console.table(mapStudentMarks);

 console.log(`----------------------------------------`);

 console.log(mapStudentMarks.keys());
 console.log(mapStudentMarks.values());

 console.log(`====Keys() and values() method====`);
 const keys = mapStudentMarks.keys();
 for (const iterator of keys) {
    console.log(iterator);
 }

 const values = mapStudentMarks.values();
 for (const iterator of values) {
    console.log(iterator);

 }

  console.log(`==== Traversing ====`);
  const keysMap = mapStudentMarks.keys();
  for (const key of keysMap) {
    const values = mapStudentMarks.get(key);
    console.log(`Student name : ${key} and Marks: ${values}`);
  }
