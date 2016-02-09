'use strict';
const fs = require('fs');
const http = require('http');
const profiler = require('v8-profiler');

const hostname = '127.0.0.1';
const port = 1337;
let requests = 1;

// push items onto an array to simulate work
const doWorkSync = (n) => {
  let tmp = [];
  console.log('Doing', n, 'work');
  for (let i = 0; i < n; i++) {
    tmp.push(i);
  }
};

const server = http.createServer((req, res) => {
  if (requests === 5) {
    res.end('Server is closing\n');
    // close the server
    server.close(() => {
      // stop profiling and write the CPU profile to disk
      const profile = profiler.stopProfiling();
      profile.export()
        .pipe(fs.createWriteStream('prof.cpuprofile'))
        .on('finish', function() {
          console.log('Wrote CPU profile');
          profile.delete();
        });
    });
  } else {
    // simulate work before responding to the request
    doWorkSync(requests * 1e7);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    requests += 1;
  }
}).listen(port, hostname, () => {
  profiler.startProfiling('1', true);
  console.log(`Server running at http://${hostname}:${port}/`);
});
