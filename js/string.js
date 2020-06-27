function test(strings, queries) {
  return queries.map(q => strings.filter(s => s === q).length);
}

function test1(strings, queries) {
  let keeper = {};
  for (let key of queries) {
    keeper[key] = strings.filter(s => s === key).length;
  }
  return Object.values(keeper);
}

const q = ['ab', 'cd', 'fem', 'yt', 'poll', 'you', 'il'];
const s = [
  'ab',
  'ab',
  'ab',
  'cd',
  'cd',
  'fem',
  'yt',
  'yt',
  'yt',
  'yt',
  'yt',
  'yt',
  'you',
  'you',
  'you',
  'you',
  'you',
  'you',
  'you',
  'you',
  'you',
  'you'
];

console.time('Start');
test1(s, q);
console.timeEnd('Start');
console.log(test(s, q));
