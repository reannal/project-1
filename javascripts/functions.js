// jshint esversion: 6

//average of array
let arrAvg = arr => arr.reduce((x,y) => x + y, 0) / arr.length;
var arr = [];
console.log(arrAvg(arr));

//Maximum of array
let arrMax = arr => Math.max(...arr)
var arr = [];
console.log(arrMax(arr));
