function acmTeam(t) {
  let f = [];
  let res = 0b0;
  for (let b of t) {
    res |= parseInt(b, 2);
    f.push(res.toString(2).padEnd(5, '0'));
  }
  return f;
  // let ways = 0;
  // let max = t.reduce((a, b) => a | parseInt(b, 2), 0b00000);

  // for (let i = 0; i < t.length; i++) {
  //   for (let j = i + 1; j < t.length; j++) {
  //     if ((parseInt(t[i], 2) | parseInt(t[j], 2)) === max) ways++;
  //   }
  // }
  // return [max.toString(2).match(/1/g).length, ways];
}

console.log(acmTeam(['10101', '11100', '11010', '00101']));
console.log(acmTeam(['11101', '10101', '11001', '10111', '10000', '01110']));

// ways = 0; max = 10101
// 10100
//
