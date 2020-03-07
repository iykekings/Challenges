const flat = array => {
  let collector = [];
  if (!(array instanceof Array)) {
    throw new Error('Not an array');
  }
  for (let elem of array) {
    if (elem instanceof Array) {
      collector = [...collector, ...flat(elem)];
    } else {
      collector = [...collector, elem];
    }
  }
  return collector;
};
module.exports = flat;
