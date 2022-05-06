const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3];
// custom Map function
/*
const result = array1.map((element, index, array) => element * 2);
console.log(result);

Array.prototype.customMap = function (callBackFunction) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callBackFunction(this[i]));
  }
  return newArray;
};
const result = array1.customMap((element) => element * 2);
console.log(result);
*/

// Custom ForEach Function
/*
// array1.forEach((element, index, array) => {
//   console.log(element, index + 1, array);
// });
Array.prototype.customForEach = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    callBackFunction(this[i]);
  }
};
const result = array1.customForEach((element) => {
  console.log(element * 2);
});
*/
//Custom Some Function
/*
// const customSome = array1.some((element) => 7);
// console.log(customSome);
Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const result = array1.customSome((element, index, array) => element % 2 == 0);
console.log(result);
*/

//Custom Every Function
/*
// const customEvery = array1.every((item, idex, array) => item % 2 == 0);
// console.log(customEvery);
Array.prototype.customEvery = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if (!callBackFunction(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
const result = array1.customEvery((element, index, array) => element % 2 == 0);
console.log(result);
*/
// Custom Filter Function
/*
// const customFilter = array1.filter((item) => item > 3);
// console.log(customFilter);
Array.prototype.customFilter = function (callBackFunction) {
  const newarr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBackFunction(this[i]) == true) {
      newarr.push(this[i]);
    }
  }
  return newarr;
};
const result = array1.customFilter((i) => i > 3);
console.log(result);
*/

//Custom Reduce Function
/*
// const customReduce = array1.reduce(function (prevValue, currentValue) {
//   return prevValue + currentValue;
// }, 0);
// console.log(customReduce);
Array.prototype.customReduce = function (callBackFunction) {
  let newA = 0;
  for (let i = 0; i < this.length; i++) {
    callBackFunction((newA = newA + this[i]));
  }
  return newA;
};
const result = array1.customReduce(
  (prevValue, currentValue) => prevValue + currentValue
);
console.log(result);
*/
