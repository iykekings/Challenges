const { assertEq } = require('./test');

function passwordCracker(pass, attempt) {
  let shouldBeEmpty = attempt;
  let attemptCopy = attempt;
  pass.forEach(ps => {
    shouldBeEmpty = shouldBeEmpty.replace(new RegExp(ps, 'g'), '');
    attemptCopy = attemptCopy.replace(new RegExp(ps, 'g'), `${ps} `);
  });
  return shouldBeEmpty.length < 1 ? attemptCopy.trim() : 'WRONG PASSWORD';
  // return pass.some(s => s === attempt)
  //   ? attempt
  //   : shouldBeEmpty.length < 1
  //   ? attemptCopy.trim()
  //   : 'WRONG PASSWORD';
}

assertEq(
  passwordCracker(['ozkxyhkcst', 'xvglh', 'hpdnb', 'zfzahm'], 'zfzahm'),
  'zfzahm'
);
assertEq(
  passwordCracker(['gurwgrb', 'maqz', 'holpkhqx', 'aowypvopu'], 'gurwgrb'),
  'gurwgrb'
);
assertEq(
  passwordCracker(
    [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa'
    ],
    'aaaaaaaaaab'
  ),
  'WRONG PASSWORD'
);
assertEq(
  passwordCracker(
    ['because', 'can', 'do', 'must', 'we', 'what'],
    'wedowhatwemustbecausewecan'
  ),
  'we do what we must because we can'
);
assertEq(passwordCracker(['hello', 'planet'], 'helloworld'), 'WRONG PASSWORD');
assertEq(passwordCracker(['ab', 'abcd', 'cd'], 'abcd'), 'ab cd');
