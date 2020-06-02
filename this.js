// 'use strict';
function Calculate(num) {
  this.value = num;
  this.add = function (num) {
    this.value += num;
    return this;
  };
  this.sub = function (num) {
    this.value -= num;
    return this;
  };
  return this;
}

let test1 = Calculate(1);
console.log(typeof test1);
test1.add(3).sub(1).add(4).sub(3).sub(2);
test1.value; //?
