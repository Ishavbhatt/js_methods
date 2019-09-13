// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

var obj = {
  place: "thehr",
  course: "javascript"
}
Object.keys(obj) = ["place", "course"]
Object.values(obj) = ["thehr", "javascript"]
Object.entries(obj) = [ ["place","thehr"], ["course","javascript"]


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
Object.keys(student)

function lengthofObject(obj){
  return Object.keys(obj);
}
lengthofObject(student)