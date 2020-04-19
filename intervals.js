const test = [
  { start: 0, end: 9 },
  { start: 1, end: 3 },
  { start: 3, end: 6 },
  { start: 7, end: 9 },
  { start: 5, end: 8 },
  { start: 2, end: 4 },
  { start: 6, end: 7 },
];

const midway = test
  .reduce((a, b) => {
    a.push(`${b.start}S`);
    a.push(`${b.end}E`);
    return a;
  }, [])
  .sort((a, b) => parseInt(a.match(/\d+/g)) - parseInt(b.match(/\d+/g)));

console.log(midway);
