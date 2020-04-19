function countDuplicates(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (newString.includes(str[i])) {
      newString = newString.replace(
        new RegExp(`(${str[i]})(\\d+)`),
        (_, k, i) => `${k}${+i + 1}`
      );
    } else {
      newString += `${str[i]}1`;
    }
  }
  return newString;
}

console.log(countDuplicates("occurences"));
console.log(countDuplicates("occurenceseeeeeeeeee"));

function countDuplicates(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (!newString.includes(str[i])) {
      newString += `${str[i]}${str.match(new RegExp(str[i], "g")).length}`;
    }
  }
  return newString;
}

console.log(countDuplicates("occurences"));
console.log(countDuplicates("occurenceseeeeeeeeee"));
