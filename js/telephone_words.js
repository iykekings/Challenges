const digits_to_letters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

const telephoneToWords = number => {
  const letterToWords = (letter, words) =>
    words.flatMap(word => word.split('').map(w => `${letter}${w}`));

  const words = `${number}`.split('').map(num => digits_to_letters[num]);

  return words
    .slice(0, -1)
    .flatMap((word, index) =>
      word.split('').flatMap(w => letterToWords(w, words.slice(index + 1)))
    );
};

console.time('Test');
const test = telephoneToWords(27);
console.timeEnd('Test');
console.log(test);
