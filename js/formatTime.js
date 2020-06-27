function formatTime(n) {
  if (n === 0) return 'now';
  let c = [];
  if (n / (365 * 24 * 3600) >= 1) {
    let y = Math.floor(n / (365 * 24 * 3600));
    c.push(y > 1 ? `${y} years` : '1 year');
    n = n - y * (365 * 24 * 3600);
  }
  if (n / (24 * 3600) >= 1) {
    let d = Math.floor(n / (24 * 3600));
    c.push(d > 1 ? `${d} days` : '1 day');
    n = n - d * (24 * 3600);
  }
  if (n / 3600 >= 1) {
    let h = Math.floor(n / 3600);
    c.push(h > 1 ? `${h} hours` : '1 hour');
    n = n - h * 3600;
  }
  if (n / 60 >= 1) {
    let m = Math.floor(n / 60);
    c.push(m > 1 ? `${m} minutes` : '1 minute');
    n = n - m * 60;
  }

  if (n > 0) {
    c.push(n > 1 ? `${n} seconds` : '1 second');
  }
  if (c.length >= 2) {
    c = [...c.slice(0, -1), 'and', c[c.length - 1]];
  }
  if (c.length >= 4) {
    c = c.map((d, i) => (c.length - i > 3 ? d + ',' : d));
  }
  return c.join(' ');
}
console.log(formatTime(3662));
console.log(formatTime(365 * 24 * 3600 + 1));
