import { assertEq } from "./deno_test.ts";
function stringConstruction(s: string): number {
  return new Set(s).size;
}

assertEq(stringConstruction("abcd"), 4);
assertEq(stringConstruction("abab"), 2);
