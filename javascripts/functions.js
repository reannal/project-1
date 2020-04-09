// jshint esversion: 6

//3b: average of array
let arrAvg = arr => {
  let sum = 0;
  for (var i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

//3c: maximum of array
let arrMax = arr => {
let maximum = arr[0]; //start with first array value

//iterate over array
  arr.forEach(elem => {
    if(maximum < elem){
      maximum = elem; //becomes new maximum
    }
    });
    return maximum;
};
