'use strict';
class Calculate_class {
  value;
  constructor(value) {
    this.value = value;
  }
  add(num) {
    this.value += num;
    return this;
  }
  sub(num) {
    this.value -= num;
    return this;
  }
}

let test2 = new Calculate_class(1);
test2
  .add(3)
  .sub(1)
  .add(4)
  .sub(3)
  .sub(2);

test2.value; //?
