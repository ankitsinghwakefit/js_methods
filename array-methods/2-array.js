var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(firstword, Secondword){
  var lengthOfFirst = firstword.length;
  var lengthOfSecond = Secondword.length;
  if(lengthOfFirst>lengthOfSecond){
    return firstword;
  } else if(lengthOfFirst<lengthOfSecond){
    return Secondword;
  } else {
    return firstword;
  }
}

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(item_price){
  var total = item_price.reduce(function(sum,item){
    return sum+item;
  }
  ,0);
  console.log(total);
  var avg = total/(item_price.length);
  console.log(avg);
}


var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function averageNumbers(item_price){
  var total = item_price.reduce(function(sum,item){
    return sum+item;
  }
  ,0);
  console.log("total: "+total);
  var avg = total/(item_price.length);
  console.log("Avg: "+avg);
}



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(statement){
  var avg = statement.reduce(function(sum,word){
    return sum += word.length;
  },0);
  var finalAvg = avg/(statement.length);
  console.log("Avg: "+finalAvg);
}
