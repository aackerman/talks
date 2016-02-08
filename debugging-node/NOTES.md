# Debugging Node

Thanks Mike for inviting me to speak. I haven't spoken at NodeMN before and I appreciate the opportunity to speak here.

I'm told that people from MN are extremely quick speakers and I've listened to recordings of my presentations and I tend to speak even more quickly than my normal cadence so if I go over something too quickly please raise a hand and ask me a question and I apologize in advance.

This talk isn't specifically targeted towards expert audiences but there's a good portion of expert level content in this talk. I have my slides and links online on github, so when you have questions after the talk I'll give you a link and you can read up afterwards if there is anything I go over too quickly.

Let's get started.

I consider myself adept at debugging JavaScript and I had used several of the debugging techniques I'll present here today before I agreed to speak tonight. But I decided to do the research and actually try several of the debugging techniques that I've read articles about. Let me tell you, debugging Node is a horse of a different color than debugging in-browser JavaScript. I've never had to do post-mortem debugging from a browser crash, users just reload the page. But if you run Node in production at some point in time you might have to understand why your process always segfaults after running for 20 minutes or your process crashes due to a memory overflow after 6 hours.

I can think of a few different types of debugging that you might want to do.

* Developing new features and working through testing new code.
* Understanding a problem that is in progress in a live production system.
* Understanding a problem based on artifacts from a crashed production system.
* Understanding why your system is slow.

And it will basically always be one of the following types of problem:
* My app does the wrong thing (faulty logic)
* My app is slow (not enough CPU, poor perf)
* My app crashes (memory leaks)

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

 But logging only works for simple problems, so let's look at a simple problem that logging can help solve.

## Step debugging with Node debugger API

After logging, a step debugger is the next most powerful tool in our arsenal to bring into the mix. We'll first look at the command line Debugger API that is available in node without any extra modules. After that we'll take a look at the debuggers made available by the `node-inspector` project, the WebStorm IDE debugger, and the VSCode debugger.

## Process hooks

An uncaught exception handler is great for catching exceptions in your JavaScript code. But doesn't do anything to help you handle a SEGFAULT in native modules.

## node-inspector

With node-inspector you can debug node programs with the developer tools you find in Chrome.

** node-inspector debugging demo **

## v8-profiler

You can use the v8-profiler to create heap snapshots and CPU profiles while your Node process is running. This type of profiling is really only applicable for understanding the way your program runs in a development environment. In the case where you need to know about memory problems in production you'll want to take a core dump of your running process.

### CPU profiles

### Memory leaks

### Heap dumps

  * https://github.com/lloyd/node-memwatch
  * https://github.com/bnoordhuis/node-heapdump
  * https://blog.risingstack.com/finding-a-memory-leak-in-node-js/
  * https://hacks.mozilla.org/2012/11/tracking-down-memory-leaks-in-node-js-a-node-js-holiday-season/
  * https://www.joyent.com/developers/videos/walmart-node-js-memory-leak-part-1
  * https://www.joyent.com/developers/videos/walmart-node-js-memory-leak-part-2

## Flamegraphs

## Core dumps

Creating a core dump
  * --abort-on-uncaught-exception
  * process.abort
  * gcore(1)
    * gcore - Generate a core file of a running program
    * gcore [-o filename] pid

Navigating a core dump
  * ::jsstacks
  * ::

* https://www.joyent.com/blog/mdb-and-linux
* http://www.slideshare.net/yunongx/debugging-node-in-prod
* http://dtrace.org/blogs/dap/2012/01/13/playing-with-nodev8-postmortem-debugging/
