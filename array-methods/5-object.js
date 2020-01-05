// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

var family = {
  name : "a",
  age : 25,
  intro : function(){
    return `my name is ${this.name} and my age is ${this.age}`;
  }
}

var title = Object.keys(family);
var value = Object.values(family);
var record = Object.entries(family);

Object.freeze(family);
family.name = "abc";
console.log(family.name);  // "a" no change.


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

console.log(student);
delete student.rollno;
console.log(student);



// 3. Write a function to get the length of an object.

function noOfEnteries(list){
  var aray = Object.entries(list);
  var lengthOfList = aray.length;
  console.log(lengthOfList); // 3          ---------------------- why length is 3 it must be 2 (ask why ?)
}