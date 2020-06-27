import { assertEq } from "./deno_test.ts";

function isValid(s: string) {
  const set = new Set(s);
  const size = set.size;
  return 0 === s.length % size || size === s.length || 1 === s.length % size
    ? "YES"
    : "NO";
}

assertEq(isValid("abcdefghhgfedecba"), "YES");
assertEq(isValid("abc"), "YES");
assertEq(isValid("aabbcd"), "NO");
assertEq(isValid("aabbccddeefghi"), "NO");
