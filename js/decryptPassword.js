const { equal } = require('assert');

function decryptPassword(s) {
  // return numbers t right positions
  // console.log(s.slice(-10, -1));
  const numPattern = /^\d*/;

  let numbers = numPattern.exec(s)[0];
  s = s.replace(numPattern, '');

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (/\D0/.test(s)) {
      s = s.replace('0', numbers[i]);
    } else {
      break;
    }
  }
  s = s.replace(/([A-Z])([a-z])\*/g, '$2$1');
  return s;
}

equal(decryptPassword('43Ah*ck0rr0nk'), 'hAck3rr4nk');
equal(decryptPassword('51Pa*0Lp*0e'), 'aP1pL5e');
equal(decryptPassword('pTo*Ta*O'), 'poTaTO');
