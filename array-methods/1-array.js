// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var final = numbers.sort(function(a,b){ return a-b; });

var largest_num = final[final.length-1];

console.log(largest_num);


// Find longest string in strings

var largestString = strings.sort(function(a,b){
  return a.length-b.length;
});

console.log(largestString[largestString.length-1]);


// Find all the even numbers

var evenNumbers = numbers.filter(function(x){return x%2==0});
console.log(evenNumbers);


// Find all the odd numbers

var oddNumbers = numbers.filter(function(x){return x%2 != 0;});
console.log(oddNumbers);


// Find all the words that contain 'is' use string method 'includes'

var isArray = strings.filter(function checkIs(x){
  return x.includes("is");
  })
  console.log(isArray);

// Find all the words that contain 'is' use string method 'indexOf'

--------------------------------------------------------------------------------------------------------------------------- Doubt


// Check if all the numbers in numbers array are divisible by three use array method (every)

var three = numbers.every(function (x){
  return x%3===0;
});

//  Sort Array from smallest to largest

numbers.sort(function(x,y){
  return x-y;
});


// Remove the last word in strings

strings.splice(strings.length-1);
console.log(strings);


// Add a new word in the array

strings.push("last");


// Remove the first word in the array

strings.shift(strings[0]);


// Place a new word at the start of the array use (upshift)

strings.unshift("first");


// Make a subset of numbers array [18,9,7,11]

var numstart = numbers.indexOf(18);
var numend = numbers.indexOf(11);
var num = numbers.slice(numstart,numend+1);
console.log(num);


// Make a subset of strings array ['a','collection']


var strstart = strings.indexOf("a");
var strend = strings.indexOf("collection");
var str = strings.slice(strstart,strend+1);
console.log(str);

// Replace 12 & 18 with 1221 and 1881

var numstart = numbers.indexOf(18);
numbers[numstart] = 1881;
var numend = numbers.indexOf(12);
numbers[numend] = 1221;
console.log(numbers);


// Replace words with string in strings array

var str = strings.indexOf("words");
strings[str] = "newword";
console.log(strings);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

var name_with_j = customers.filter(name => {
  name.firstname[0] == "J";
})

var name_with_j = customers.filter(name => {
  return name.firstname.includes("J",0);
})
console.log(name_with_j);

// Create new array with firstname and lastname

var firstName = customers.map(fName =>{
  return fName.firstname;
});

var lastName = customers.map(lName =>{
  return lName.lastname;
})

// Sort the array created above alphabetically

var sortedFirstName = firstName.sort();
var sortedLastName = lastName.sort();
