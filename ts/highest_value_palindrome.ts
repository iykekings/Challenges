import { assertEq } from "./deno_test.ts";

// currently not working
function highestValuePalindrome1(s: string, n: number, k: number) {
  // function highestValuePalindrome(s, n, k) {
  // create an empty array for collection

  let collector: number[] = [];
  // get the max integer in s
  let sArray = s.split("").map((m) => parseInt(m, 10));
  let max = [...sArray].sort((a, b) => b - a)[0];
  // split sArray by half
  let leftHalf: number[];
  let rightHalf: number[];
  // if length of s is odd, leave the middle out
  leftHalf = sArray.slice(0, n / 2);
  if (n % 2 !== 0) {
    rightHalf = sArray.slice(n / 2 + 1).reverse();
  } else {
    rightHalf = sArray.slice(n / 2).reverse();
  }
  // check if both when one is reversed is same for every element
  // if not, record the index of the element
  leftHalf.forEach((el, i) => {
    if (el !== rightHalf[i]) {
      collector.push(i);
      collector.push(n - 1 - i);
    }
  });

  // if collection length divided by two is greater than k return -1
  if (collector.length / 2 > k) return -1;
  // else return original array with indices in collection replaced by the max value of s
  collector.forEach((el) => {
    sArray[el] = max;
  });
  // console.log(collector)
  return sArray.join("");
}

function highestValuePalindrome(s: string, n: number, k: number) {
  if (n < 1) {
    return s;
  }
  if (n >= 1 && s.length === 1) {
    return "9";
  }

  const sArray = s.split("");
  let count = 0;
  for (let i = 0; i < n / 2; i++) {
    if (count >= k && count) {
      return -1;
    }
    if (sArray[i] !== "9" || sArray[n - 1 - i] !== "9") {
      sArray[i] = "9";
      sArray[n - 1 - i] = "9";
      count++;
    }
  }
  return sArray.join("");
}

assertEq(highestValuePalindrome("3943", 4, 1), 3993);
assertEq(highestValuePalindrome("092282", 6, 3), 992299);
assertEq(highestValuePalindrome("0011", 4, 1), -1);
assertEq(highestValuePalindrome("777", 3, 0), 777);
// assertEq(highestValuePalindrome('39434', 5, 2), 99499);
