const assert = require('assert');
function biggerIsGreater(w) {
  if (w.length < 2) return 'no answer';
  w = [...w];
  if (w.every((e) => e === w[0])) return 'no answer';
  if ([...w].sort((a, b) => b > a).join`` < w) return 'no answer';
  let cur = w.length - 1;
  let next = cur - 1;
  let c = [...w];
  while (next >= 0) {
    if (c[cur] > c[next]) {
      let temp = c[next];
      if (cur + 1 && c[cur + 1] < c[cur]) {
        c = [
          ...c.slice(0, next),
          c[cur + 1],
          ...[...c.slice(cur + 2), temp, c[cur]].sort(),
        ];
      } else {
        c[next] = c[cur];
        c[cur] = temp;
      }
    }
    if (c.join`` > w.join``) return c.join``;
    next--;
    cur--;
  }
  return 'no answer';
}

function biggerIsGreater(w) {
  let J = -1;
  let I;
  let found = false;
  for (let i = w.length - 1; i >= 0; i--) {
    if (found) break;
    for (let j = i - 1; j >= 0; j--) {
      if (w[i] > w[j]) {
        I = i;
        J = j;
        found = true;
        break;
      }
    }
  }
  if (J === -1) return 'no answer';
  return w.slice(0, J) + w[I] + [w[J], ...w.slice(I + 1)].sort().join``;
}

assert.equal(biggerIsGreater(''), 'no answer');
assert.equal(biggerIsGreater('ab'), 'ba');
assert.equal(biggerIsGreater('bb'), 'no answer');
assert.equal(biggerIsGreater('hefg'), 'hegf');
assert.equal(biggerIsGreater('dhck'), 'dhkc');
assert.equal(biggerIsGreater('dkhc'), 'hcdk');
assert.equal(biggerIsGreater('lmno'), 'lmon');
assert.equal(biggerIsGreater('dcba'), 'no answer');
assert.equal(biggerIsGreater('dcbb'), 'no answer');
assert.equal(biggerIsGreater('abdc'), 'acbd');
assert.equal(biggerIsGreater('abcd'), 'abdc');
assert.equal(biggerIsGreater('fedcbabcd'), 'fedcbabdc');
