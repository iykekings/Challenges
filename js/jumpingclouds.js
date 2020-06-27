function jumpingOnClouds(c) {
  let jump = 0;
  let i = 1;
  while (i < c.length) {
    if (c[i] == 1 || c[i + 1] == 0) {
      i += 2;
      jump += 1;
    } else {
      i += 1;
      jump += 1;
    }
  }
  return jump;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
