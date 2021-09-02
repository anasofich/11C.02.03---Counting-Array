"use strict";

const arr = [];
let counter = 0;

countArray();

function countArray() {
  counter++;
  arr.unshift(counter);
  console.log(arr.slice(0, 9));
  setTimeout(countArray, 700);
}
