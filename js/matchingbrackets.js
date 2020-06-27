let st = '{[()]}';
function isBalanced(s) {
  while (/\[\]|\(\)|\{\}/.test(s)) {
    s = s.replace(/\[\]|\(\)|\{\}/g, '');
  }
  return !s.length ? 'YES' : 'NO';
}
console.log(isBalanced(st));
