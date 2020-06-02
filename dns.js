const dns = require('dns');
dns.resolveCname('las.ikeze.dev', function (err, address) {
  console.log({ err });
  console.log({ address });
});
