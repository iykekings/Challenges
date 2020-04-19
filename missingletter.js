function findMissingLetterWithSlicingThroughAlphabetsAndComparing(a) {
  const d = "abcdefghijklmnopqrstuvwxyz";
  const u = a[0].toUpperCase() == a[0] ? d.toUpperCase() : d;
  return u
    .substr(u.indexOf(a[0]), u.indexOf(a[a.length - 1]) + 1)
    .split("")
    .filter(f => !a.some(s => s === f))[0];
}

// console.log(
//   findMissingLetterWithSlicingThroughAlphabetsAndComparing([
//     "a",
//     "b",
//     "c",
//     "d",
//     "f"
//   ])
// );
// console.log(
//   findMissingLetterWithSlicingThroughAlphabetsAndComparing(["O", "Q", "R", "S"])
// );

const findMissingLetterWithArithmeticProgression = a =>
  String.fromCharCode(
    ((a.length + 1) / 2) * (a[0].charCodeAt(0) * 2 + a.length) -
      a.reduce((b, c) => b + c.charCodeAt(0), 0)
  );
// console.log(
//   findMissingLetterWithArithmeticProgression(["a", "b", "c", "d", "f"])
// );
// console.log(findMissingLetterWithArithmeticProgression(["O", "Q", "R", "S"]));

// // const f = findMissingLetter(["a", "b", "c", "d", "f"]);
// // const s = findMissingLetter(["O", "Q", "R", "S"]);
// // console.log({ s, f });

// // Given that you will always get an array/list/vectors/slices of English letters as input
// // Implement findMissingLetter
// // That returns the missing letter in a subsection of English alphabets
// // eg: findMissingLetter(["a", "b", "c", "d", "f"]) -> "e"
// // eg: findMissingLetter(["O", "Q", "R", "S"]) -> "P"

// // Hints: String.fromCharCode, charCodeAt, Arithmetic Progression, indexOf, substr/slices

// /* Grading:
//   - LINES OF CODE
//   - DON'T USE WHOLE ALPHABETS IN YOUR CODE
//   - WORK FOR BOTH CASES - (upper and lower) - NB: input won't be mixed case
//   - READABILITY
//   - TIME COMPLEXITY
//   - SPACE COMPLEXITY
//   - TOO EASY FOR YOU -> IMPLEMENT IT IN ONE OF RUST, C OR HASKELL

//   Fatality:
//   - USE ARITHMETIC PROGRESSION TO SAVE COMPUTATION TIME
// */

// // using rust window-like implementation
function findMissingLetterWithNaiveRustWindowImplementation(a) {
  return a
    .map((v, i) => [v, ...a.slice(i + 1, i + 2)]) //window(2)
    .filter(([f, s]) => f.charCodeAt() - (s || "").charCodeAt() === -2)
    .map(a => String.fromCharCode(a[0].charCodeAt() + 1))[0];
}

// console.log(
//   findMissingLetterWithNaiveRustWindowImplementation(["a", "b", "c", "d", "f"])
// );
// console.log(
//   findMissingLetterWithNaiveRustWindowImplementation(["O", "Q", "R", "S"])
// );

// // uing rust zip-like implementation
function findMissingLetterWithNaiveRustZipImplementation(a) {
  return Array.from({ length: a.length }, (_, i) => i + a[0].charCodeAt())
    .map((v, i) => [v, a[i]]) // zips generated array with a
    .filter(([n, c]) => n - c.charCodeAt() !== 0)
    .map(a => String.fromCharCode(a[0]))[0];
}

// console.log(
//   findMissingLetterWithNaiveRustZipImplementation(["a", "b", "c", "d", "f"])
// );
// console.log(
//   findMissingLetterWithNaiveRustZipImplementation(["O", "Q", "R", "S"])
// );

function findMissingLetterWithEarlyBreakForLoop(a) {
  let first = a[0].charCodeAt();
  for (let i = 1; i < a.length; i++) {
    if (first + i !== a[i].charCodeAt()) {
      return String.fromCharCode(first + i);
    }
  }
}
// console.log(findMissingLetterWithEarlyBreakForLoop(["a", "b", "c", "d", "f"]));
// console.log(findMissingLetterWithEarlyBreakForLoop(["O", "Q", "R", "S"]));

function findMissingLetterFilter(a) {
  return String.fromCharCode(
    a
      .find((char, i) => char.charCodeAt() !== i + a[0].charCodeAt())
      .charCodeAt() - 1
  );
}

// console.log(findMissingLetterFilter(["a", "b", "c", "d", "f"]));
// console.log(findMissingLetterFilter(["O", "Q", "R", "S"]));

[
  findMissingLetterFilter,
  findMissingLetterWithArithmeticProgression,
  findMissingLetterWithSlicingThroughAlphabetsAndComparing,
  findMissingLetterWithNaiveRustWindowImplementation,
  findMissingLetterWithNaiveRustZipImplementation,
  findMissingLetterWithEarlyBreakForLoop
].forEach(fn => {
  // const alpha = Array.from({ length: 26 }, (_, i) =>
  //   String.fromCharCode(i + 97)
  // );
  // const test = [...alpha.slice(0, 19), ...alpha.slice(20, 26)];
  const test = ["a", "b", "c", "d", "f"];
  console.time(fn.name);
  for (let i = 0; i < 1000000; i++) {
    fn(test);
  }
  console.timeEnd(fn.name);
});

// First Test: Very Long input (Node)

// findMissingLetterWithArithmeticProgression: 113.853ms
// findMissingLetterWithSlicingThroughAlphabetsAndComparing: 3056.435ms
// findMissingLetterWithNaiveRustWindowImplementation: 2530.695ms
// findMissingLetterWithNaiveRustZipImplementation: 4539.217ms
// findMissingLetterWithEarlyBreakForLoop: 76.370ms

// (Deno)
// findMissingLetterWithArithmeticProgression: 87ms
// findMissingLetterWithSlicingThroughAlphabetsAndComparing: 2814ms
// findMissingLetterWithNaiveRustWindowImplementation: 2671ms
// findMissingLetterWithNaiveRustZipImplementation: 4695ms
// findMissingLetterWithEarlyBreakForLoop: 106ms

// Second Test: Short Input (Deno)

// findMissingLetterWithArithmeticProgression: 52ms
// findMissingLetterWithSlicingThroughAlphabetsAndComparing: 458ms
// findMissingLetterWithNaiveRustWindowImplementation: 657ms
// findMissingLetterWithNaiveRustZipImplementation: 1121ms
// findMissingLetterWithEarlyBreakForLoop: 31ms

// (Node)
// findMissingLetterWithArithmeticProgression: 51.125ms
// findMissingLetterWithSlicingThroughAlphabetsAndComparing: 321.328ms
// findMissingLetterWithNaiveRustWindowImplementation: 744.439ms
// findMissingLetterWithNaiveRustZipImplementation: 1126.771ms
// findMissingLetterWithEarlyBreakForLoop: 30.305ms
