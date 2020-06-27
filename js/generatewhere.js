function generateWhere(input, table = '') {
  input = Object.entries(JSON.parse(input));
  let result = {};
  for (let [key, value] of input) {
    if (value instanceof Array) {
      result[key] = In(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}
// In should come from ttypeorm
const In = (str) => str;

console.log(
  generateWhere('{"id": 1, "name": ["ike", "kings"], "sur": "eze"}', 'user')
);
console.log(generateWhere('{"id": 1}', 'user'));
console.log(generateWhere('{"lastName":"Saw"}'));
