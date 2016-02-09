'use strict';
const fs = require('fs');
const http = require('http');
const profiler = require('v8-profiler');

const hostname = '127.0.0.1';
const port = 1337;

let requests = 0;
let cache = {};

const doWorkSync = (n) => {
  var tmp = [];
  console.log('Doing', n, 'work');
  for (let i = 0; i < n; i++) {
    tmp.push(i);
  }
  cache[n] = tmp;
};

const server = http.createServer((req, res) => {
  if (requests >= 5) {
    res.end('Server is closing\n');
    server.close(() => {
      var snapshot = profiler.takeSnapshot();
      snapshot.export()
        .pipe(fs.createWriteStream('prof.heapsnapshot'))
        .on('finish', function() {
          console.log('Wrote Heap profile');
          snapshot.delete();
        });
    });
  } else {
    doWorkSync(requests * 1e7);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    requests += 1;
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
