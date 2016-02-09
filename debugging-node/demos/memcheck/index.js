'use strict';
const fs = require('fs');
const http = require('http');
const v8 = require('v8');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req, res) => {
  for ( let i = 0; i < 1000; i++ ) {
    server.on('request', function leakyfunc() {});
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
server.setMaxListeners(0);

let stats = [];
process.on('SIGUSR2', () => {
  gc();
  console.log('Total Heap size', v8.getHeapStatistics().total_heap_size);
})
