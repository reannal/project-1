// jshint esversion: 6

//3b: average of array
let arrAvg = arr => {
  let sum = 0;
  for (var i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
