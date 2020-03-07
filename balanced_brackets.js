function balancedBrackets(s) {
  s = s.replace(/[^\[|\]|\(|\)|\{|\}|\|]/g, '');
  while (/\[\]|\(\)|\{\}|\|\|/.test(s)) {
    s = s.replace(/\[\]|\(\)|\{\}|\|\|/g, '');
  }
  return !s.length;
}

console.log(balancedBrackets('[(])'));
console.log(balancedBrackets('{{||[]||}}'));
console.log(
  balancedBrackets(
    'I (wa)n{t to buy a on}esie[…] b(u{[t] kno}w it) won’t suit me.'
  )
);
