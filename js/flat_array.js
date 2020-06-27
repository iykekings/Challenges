// flat recursively flattens an array
function flat(array) {
  let result = [];
  if (!(array instanceof Array)) {
    throw new Error('Not an array');
  }

  for (let elem of array) {
    if (elem instanceof Array) {
      result = [...result, ...flat(elem)];
    } else {
      result = [...result, elem];
    }
  }
  return result;
}

module.exports = flat;
