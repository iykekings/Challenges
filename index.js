const { Las } = require('las-js');

async function read() {
  const myLas = new Las('./C1.las');
  const v = await myLas.dataStripped();
  console.log(v.slice(1, 5));
}

read();
