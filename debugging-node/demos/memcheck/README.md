This server leaks 1000 event listener every time the server receives a request

Run the server with

```
node --expose-gc index.js
```

Make requests with

```
while true; do curl http://127.0.0.1:1337/ done
```

Send the SIGUSR2 signal to the process and the program with output the total heap size

```
kill -SIGUSR2 $(pgrep -lfa node | grep index.js | awk '{print $1}')
```

Make more requests and check the heap size. The heap will continue to grow with more and more requests until it falls over.
