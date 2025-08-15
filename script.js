var myList = [];
myList.push("Chair"); // ✅ Correct
console.log("After push:", myList);

myList.push("Table"); // ✅ Correct
console.log("After push:", myList);

myList.push("sofa");
console.log("After push:", myList);

myList.push("Dining Table", "Bed" ,"Lounge" ,"Drawer", "CupBoard");
console.log("After push:", myList);

myList.pop();
console.log("After pop:", myList);

console.log("Final List:", myList);