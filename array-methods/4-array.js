var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
function dog_year(dogs){
  var count = 0;
  for(var i=0; i<dogs.length; i++){
     count += dogs[i].age;
  }
  var dogYear = count*7;
}

// your code goes here

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

var dog_year = data.filter(value => {
  return value.type == "dog";
}).map(year => {
  return year.age*7;
}).reduce((sum,years) =>{
  return sum+years;
},0);
console.log(dog_year);

// Solution 105
