function sherlockAndAnagrams(s) {
  let pairs = 0;
  for (let i = 0; i < s.length; i++) {
    let supe = s.slice(i + 1);
    let sub = s.slice(0, i + 1);
    if (supe.includes(s[i])) pairs++;
    if (supe.includes(sub) && sub.length > 1) pairs++;
  }
  console.log(pairs);
  return pairs;
}
sherlockAndAnagrams('cdcd');
// sherlockAndAnagrams('abba');
sherlockAndAnagrams('abcd');
// sherlockAndAnagrams('kkkk');
