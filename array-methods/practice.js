// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

// filter for numbers > 80
var largenum = numbers.filter(function(num){
  return num>80;
});

var largenum = numbers.filter(numb => numb>80);
console.log(largenum);

var largeNum1 = numbers.filter(value => value>200).map(value1 => value1*5).reduce(function(count,value2){
  return count+value2;
},0);;
console.log(largeNum1);

// printing all the 3 array by using diferent methods.

pizzas.forEach(item => console.log(item));
cuts.forEach(item => console.log(item));
numbers.forEach(item => console.log(item));

// removing 2 items from list from begaining.

var shortlist = pizzas.splice(0,2);
var shortlist = cuts.splice(0,2);
var shortlist = numbers.splice(0,2);