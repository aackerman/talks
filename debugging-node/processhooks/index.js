process.on('uncaughtException', (err) => {
  console.log(err.stack);
});

process.on('rejectionHandled', (err) => {
  console.log('A promise that was previously rejected has been handled');
});

process.on('unhandledRejection', (err) => {
  console.log('A promise was rejected with message:', err.message);
});

var p;
setTimeout(() => {
  p = new Promise((resolve, reject) => {
    reject(new Error('unhandledRejection'));
  });
}, 16);

setTimeout(() => {
  // handle the promise asynchronously later
  p.catch(() => {});
}, 32);


setTimeout(() => {
  throw new Error('Uncaught exception');
}, 64);

setTimeout(() => {
  console.log('ended after 10s');
}, 10 * 1e3);
