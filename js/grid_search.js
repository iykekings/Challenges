function gridSearch(G, P) {
  const l = G[0].length;
  G = G.join``;
  let iP = G.indexOf(P[0]);

  if (iP >= 0) {
    for (let i = 1; i < P.length; i++) {
      if (G.indexOf(P[i]) === l + iP) {
        iP += l;
      } else {
        return 'NO';
      }
    }
    return 'YES';
  }
  return 'NO';
}

const test = ['7283455864',
  '6731158619',
  '8988242643',
  '3830589324',
  '2229505813',
  '5633845374',
  '6473530293',
  '7053106601',
  '0834282956',
  '4607924137']
const pattern = [
  '9505',
  '3845',
  '3530'
]

console.log(gridSearch(test, pattern))