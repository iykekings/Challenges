const st =
  'DDUUDDDUDUUDUDDDUUDDUDDDUDDDUDUUDDUUDDDUDDDUDDDUUUDUDDDUDUDUDUUDDUDUDUDUDUUUUDDUDDUUDUUDUUDUUUUUUUUU';

const path = `
  \  /\
   \/  \    /
        \/\/
  
  
  
  `;
function countingValleys(n, s) {
  let v = 0;
  let lvl = 0;
  for (let c of s.split('')) {
    if (c === 'U') ++lvl;
    if (c === 'D') --lvl;

    // if we just came UP to sea level
    if (lvl == 0 && c == 'U') ++v;
  }
  return v;
}

console.log(countingValleys(100, st));
