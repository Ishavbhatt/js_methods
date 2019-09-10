// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
console.log(Math.max(...numbers));

// Find longest string in strings
var longestString = "";
      strings.forEach((e) => {
          if(e.length > longestString.length){
            longestString = e;
          }
        })
      console.log(longestString)

// Find all the even numbers
console.log(numbers.filter(function(numbers) { return (numbers & 1) === 0; }));

// Find all the odd numbers
console.log(numbers.filter(function(numbers) { return (numbers & 2) === 0; }));

// Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes('is'));

// Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf('is'));

// Check if all the numbers in numbers array are divisible by three use array method (every)
function divide(num){
  if (num%3 == 0){
  console.log(num);
  }
  }
  numbers.every(divide)


//  Sort Array from smallest to largest
console.log(strings.sort());

// Remove the last word in strings
console.log(strings.pop());

// Add a new word in the array
console.log(strings.splice(1,0, "sentences"));

// Remove the first word in the array
console.log( strings.shift() );


// Place a new word at the start of the array use (upshift)
console.log(strings.unshift("same"));

// Make a subset of numbers array [18,9,7,11]
var newnumber = numbers.slice(3, 7);
console.log(newnumber);

// Make a subset of strings array ['a','collection']
var newstring = strings.slice(2, 4);
console.log(newstring);

// Replace 12 & 18 with 1221 and 1881
console.log(numbers.toString().replace(12,1221).split(" "));
console.log(numbers.toString().replace(18,1881).split(" "));



// Replace words with string in strings array
strings.toString().replace("word", "string").split(",")

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var nameStartsWith;
for (let key in customers) {
nameStartsWith = (customers[key].firstname.charAt(0));
if(nameStartsWith == "J") {
console.log(customers[key]);
}
}

// Create new array with firstname and lastname
var arr = [
  { firstname: "rahul", lastname: "roy"},
  { firstname: "karan", lastname: "kumar"},
  { firstname: "parush", lastname: "sharma"}

];

// Sort the array created above alphabetically
arr.sort(function(one, two){
  if(one.firstname < two.firstname) { return -1; }
  if(one.firstname > two.firstname) { return 1; }
  return 0;
})