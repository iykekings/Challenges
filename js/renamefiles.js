const fs = require('fs');

async function print(path) {
  process.chdir(path);
  const files = await fs.promises.readdir('./');
  files
    .filter(f => f.match(/.mp3$/))
    .forEach(file => {
      fs.renameSync(file, file.match(/([A-Z][a-z]+)/g).join` ` + '.mp3');
      // console.log(file.match(/([A-Z][a-z]+)/g).join` ` + '.mp3');
    });
}
print('../../../Music/Leonard Cohen - You Want It Darker').catch(console.error);
