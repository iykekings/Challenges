'use strict';
function Calculate_Obj(num) {
  return {
    value: num,
    add: function(num) {
      this.value += num;
      return this;
    },
    sub: function(num) {
      this.value -= num;
      return this;
    }
  };
}

let test3 = Calculate_Obj(1);
test3
  .add(3)
  .sub(1)
  .add(4)
  .sub(3)
  .sub(2);
test3.value; //?
