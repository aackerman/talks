# Debugging Node

Thanks to our hosts for inviting me to speak. I haven't spoken at NodeMN before and I appreciate the opportunity to speak here.

I'm told that people from MN are extremely quick speakers and I've listened to recordings of my own presentations and I tend to speak even more quickly than my normal cadence so if I go over something too quickly please raise a hand and ask me a question and I apologize in advance.

This talk isn't specifically targeted towards expert audiences but there's a good portion of expert level content in this talk. I have my slides and links online on github, if you have questions after the talk I'll give you a link and you can read up afterwards if there is anything I go over too quickly. I have a lot of links to blog posts and helpful modules.

Let's get started.

I consider myself adept at debugging JavaScript and I had used several of the debugging techniques I'll present here today before I agreed to speak tonight. But I decided to do the research and actually try several of the debugging techniques that I've read articles about. Debugging Node is a horse of a different color than debugging in-browser JavaScript. I've never had to do post-mortem debugging from a browser crash, users just reload the page.

If you run Node in production, at some point in time you might have to understand why your process crashes, and you can't reproduce it in devlepment. There are certain types of problems that only appear at heavy load in a production environment exposed to real user data.

I can think of a few different types of debugging that you might want to do. You're developing new features and working through testing new code, you're running your tests in a headless process and you're tests are failing and you have no idea why. You could have a problem in production where something just isn't going quite right in 1 out of 1000 cases. You could have a problem where your Node process crashes every five hours and requires a restart. Or you could have a problem where your system is just slower than you need it to be.

To sum up, you'll hit these types of problems: my app does the wrong thing sometimes or all the time, my app is slow, or my app crashes.

One fortunate thing about JavaScript is that it's always single threaded and garbage collected. We don't have to worry about manually handling memory or thread deadlocks, unless you're writing native modules. We always have to worry about faulty application logic and overusing system resources such as CPU and memory. And these are the areas where debugging, tracing and profiling tools are the most important.

To solve problems with faulty application logic we can use techniques like logging, a step debugger, and process hooks. To solve problems with resource management and crashes we need to turn to powerful tools that can give us information on where the program is spending resources by outputting CPU profiles, flamegraphs, and heap dumps.

So first we'll go over some simple problems like faulty logic and use logging and the step debugger to first understand and then solve the problems.

## logging

`console.log` is the default debug tool. Output to standard out or a log file is a tried and true debugging technique and usually the first tool to reach for when attemting to solve a problem. Other loggers are available to Node that are great.

** console.log debugging demo **

That was a very contrived example. Understanding closures and variable block scoping in JavaScript is not a tough problem to solve. You could have that problem in browser JavaScript or in Node. I'm sure several of you in the audience spotted the problem at a glance.

* Production problems are often hard to reproduce. Problems in distributed systems are especially hard to reproduce on the instance that you're debugging.
* Worse, restarts often make the original problem go away. Many problems result from bad in-memory state that's recreated on restart, so if you restart the service, you lose all hope of debugging it.

So it's very useful to be able to debug a running program while it's broken. Besides using MDB, other popular techniques include building a REPL into your program or some other way to pull out program state. These are extremely useful, but have their own limitations:

* They don't work to debug crashes, since the program's gone at that point.
* They usually don't work to debug infinite loops, since the program's stuck.
* They can't show you all of the state in your program, like the files it has open, JavaScript objects that aren't referenced by these tools, or the C-level state used by native add-ons.

 The `debug` module allows you to set command line flags when running a Node process to only output the debug information you want when you want it.

** debug module debugging demo **

 In an ideal debug logging environment, you can turn debugging on or off per file at runtime.

 Observability is a key feature of a system that is easy to debug.

## Step debugging with Node debugger API

After logging, a step debugger is the next most powerful tool in our arsenal to bring into the mix. We'll first look at the command line Debugger API that is available in node without any extra modules. After that we'll take a look at the debuggers made available by the `node-inspector` project.

## Process hooks

We'll spend a couple minutes on process hooks, these provide you with a few specialized callbacks to notify your program about uncaught exceptions and unhandled native promise rejections. At one point the Node standard library included a concept called domains that provided other error handling but the API has been deprecated and should not be used going forward. The important thing to remember here is that these hooks are here for unexpected behavior. The uncaught exception handler should usually just log and exit the process. Understanding why this happened is the important part with debugging but unfortunately using the uncaught exception handler often loses information about where the error was generated.

So let's take a look at the three hooks that are available. The promise hooks are only available in later versions of Node, 4.x and beyond. These hooks were not available in 0.12.

** process hooks debugging demo **

If you take a look at what's going on here the script registers three handlers for process event callbacks and runs four timeouts. The first to create and reject a promise, to show the callback trigger on `unhandledRejection` hook. The second to handle the promise rejection in a different tick of the event loop to trigger the `handledRejection` hook. The third to throw an exception to trigger the `uncaughtException` handler and finally a timeout to keep the script running to show that the `uncaughtException` handler prevents scripts from exiting early.

An uncaught exception handler is good for catching exceptions in your JavaScript code. But doesn't do anything to help you handle a SEGFAULT in native modules.

## node-inspector

With node-inspector you can debug node programs with the developer tools you find in Chrome.

** node-inspector debugging demo **

## v8-profiler

You can use the v8-profiler to create heap snapshots and CPU profiles while your Node process is running. This type of profiling is really only applicable for understanding the way your program runs in a development environment. In the case where you need to know about memory problems in production you'll want to take a core dump of your running process.

### CPU profiles

** v8-profiler demo - create a CPU profile and look at what is taking the most time **

This demo starts a server to accept requests and does work synchronously before responding to the request. We use the v8-profiler module to start CPU profiling as soon as the server is ready to start accepting connections. After five requests the server closes and writes the CPU profile to disk.

### Memory leaks

** v8-profiler demo - create a heap dump and talk about a memory leak **

This demo starts a server to accept requests and does work synchronously before responding to the request. After five requests the server closes we use the v8-profiler module to take a snapshot of the object on the v8 heap and write the snapshot to disk.

## node-memwatch

** memwatch demo - create a memory leak and run the server and allow memwatch to log the leaks **

### Memory leaks

  * https://github.com/lloyd/node-memwatch
  * https://github.com/bnoordhuis/node-heapdump
  * https://blog.risingstack.com/finding-a-memory-leak-in-node-js/
  * https://hacks.mozilla.org/2012/11/tracking-down-memory-leaks-in-node-js-a-node-js-holiday-season/
  * https://www.joyent.com/developers/videos/walmart-node-js-memory-leak-part-1
  * https://www.joyent.com/developers/videos/walmart-node-js-memory-leak-part-2


* Run the server with the --expose-gc flag: `node --expose-gc server.js`. This makes the gc() function available to our JS code which forces a collection.
* Create a handler for SIGUSR2 with process.on which calls gc().
* Run the load-test again, and tell our process to run a collection with kill -SIGUSR2 $(pgrep -lfa node | grep server.js | awk '{print $1}') to see if that makes a difference.


## Flamegraphs

To create a flamegraph you will need tracing output from the running application. On OSX you can use Dtrace if your installation of Node was built including support for Dtrace. You can figure out if your application was built with Dtrace support by running `node -p process.config` and checking `node_use_dtrace: true`.

  * http://yunong.io/2015/11/23/generating-node-js-flame-graphs/
  * npm install -g stackvis
  * http://github.com/brendangregg/FlameGraph
  * http://www.brendangregg.com/flamegraphs.html
  * Dtrace, Linux perf events

Flamegraph trips:
* dtrace errored on OSX Yosemite
* nvm download of node on linux isn't built with dtrace support
* stackvis threw up on my output data from the linux `perf` tool
* Unable to build node 5.5.0 with dtrace support on linux

* Use the normal Flamegraph tools from the repo instead of `stackvis`
```
$ sudo apt-get install linux-tools-common
$ sudo apt-get install linux-tools
$ git clone https://github.com/brendangregg/FlameGraph
$ cd FlameGraph
$ perf record -F 99 -a -g -- sleep 60
$ perf script | ./stackcollapse-perf.pl > out.perf-folded
$ ./flamegraph.pl out.perf-folded > perf-kernel.svg
```

## Core dumps

Creating a core dump
  * --abort-on-uncaught-exception
  * process.abort
  * gcore(1)
    * gcore - Generate a core file of a running program
    * gcore [-o filename] pid

Navigating a core dump
  * ::jsstacks
  * ::findjsobjects
  * ::jsprint
  * ::findleaks

* https://www.joyent.com/blog/mdb-and-linux
* http://www.slideshare.net/yunongx/debugging-node-in-prod
* http://dtrace.org/blogs/dap/2012/01/13/playing-with-nodev8-postmortem-debugging/

TODO:
* An example of using node-inspector to debug a problem
* An example of using the node step debugger
* An example of analyzing a core dump in manta/mdb
* An example of using node-memwatch to log out when a memory leak is possibly happening

## Links

* https://github.com/lloyd/node-memwatch
* https://github.com/bnoordhuis/node-heapdump
* https://github.com/node-inspector/node-inspector
* https://github.com/node-inspector/v8-profiler
* https://github.com/joyent/node-stackvis
* https://github.com/thlorenz/v8-perf
* http://github.com/brendangregg/FlameGraph
* http://www.brendangregg.com/flamegraphs.html
* https://www.joyent.com/blog/mdb-and-linux
* http://wiki.smartos.org/display/DOC/Download+SmartOS
* http://www.slideshare.net/yunongx/debugging-node-in-prod
* http://dtrace.org/blogs/dap/2012/01/13/playing-with-nodev8-postmortem-debugging/
* https://blog.risingstack.com/finding-a-memory-leak-in-node-js/
* https://hacks.mozilla.org/2012/11/tracking-down-memory-leaks-in-node-js-a-node-js-holiday-season/
* https://www.joyent.com/developers/videos/walmart-node-js-memory-leak-part-1
* https://www.joyent.com/developers/videos/walmart-node-js-memory-leak-part-2
