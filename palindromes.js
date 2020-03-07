function generatePalindromes(data) {
  return data.filter(d => {
    let c = d.replace(/-/g, '');
    return c === c.split``.reverse``.join``;
  });
}

function genDates(begin, end) {
  let res = [];
  let current = new Date(begin).getTime();
  const stop = new Date(end).getTime();
  while (current < stop) {
    res.push(new Date(current).toISOString());
    current += 24 * 3600 * 1000;
  }
  return res;
}
console.log(genDates('01-01-2020', '12-31-2020'));

// // This year
console.log(generatePalindromes(genDates('01-01-2020', '12-31-2020')));

// // From 01 Jan 2011 - 31 Dec 2020
// console.log(generatePalindromes(genDates('01-01-2011', '12-31-2020')));

// From 01 Jan 1890 - 31 Dec 2020
// console.log(generatePalindromes(genDates('01-01-1890', '12-31-2121')));

// // From 31 Dec 2020 - 31 Dec 2050
console.log(generatePalindromes(genDates('01-01-2020', '12-31-2050')));
console.log(genDates('01-01-2020', '12-31-2050').includes('2032-02-23'));
