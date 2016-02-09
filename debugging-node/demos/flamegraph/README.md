Using a linux system install `perf(1)`

```
$ sudo apt-get install linux-tools-common
$ sudo apt-get install linux-tools
```

Ensure your server is running

```
$ node --perf-basic-prof-only-functions index.js
```

In another terminal session

```
$ sudo perf record -F 99 -p `pgrep -n node` -g -- sleep 30
```

Find the perf map

```
$ ls /tmp/*.map
/tmp/perf-13083.map
```

Own the perf map

```
$ sudo chown root /tmp/perf-13083.map
```

```
$ sudo perf script > nodestacks
```

Clone the flamegraph tools

```
$ git clone --depth 1 http://github.com/brendangregg/FlameGraph
$ cd FlameGraph
```

Create the flamegraph from the stacks

```
$ ./stackcollapse-perf.pl < ../nodestacks | ./flamegraph.pl --colors js > ../node-flamegraph.svg
```
