'use strict';
function Calculate_new(num) {
  this.value = num;
  this.add = function (num) {
    this.value += num;
    return this;
  };
  this.sub = function (num) {
    this.value -= num;
    return this;
  };
}

let test4 = new Calculate_new(1);
console.log(typeof test4);
test4.add(3).sub(1).add(4).sub(3).sub(2);

test4.value; //?
