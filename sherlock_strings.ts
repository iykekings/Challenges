import { assertEq } from './deno_test.ts';

function isValid(s: string) {
  const set = new Set(s);
  // let map: Map<string, number> = new Map();
  // for(let elem of s.split("")) {
  //   if(map.has(elem)) {
  //     map.set(elem, map.get(elem) + 1)
  //   } else {
  //     map.set(elem, 1);
  //   }
  // }
  // const freq = [...map.values()]
  // const test1 = freq.filter(f => f === freq[0])
  // const test2 = freq.filter(f => f !== freq[0])
  // return test1.length <= 1 || test2.length <= 1 ? "YES" : "NO"
  const size = set.size;
  return 0 === s.length % size || size === s.length || 1 === s.length % size  ? "YES" : "NO";

}

assertEq(isValid("abcdefghhgfedecba"), "YES");
assertEq(isValid("abc"), "YES");
assertEq(isValid("aabbcd"), "NO");
assertEq(isValid("aabbccddeefghi"), "NO");