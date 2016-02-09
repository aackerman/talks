`node-inspector` doesn't seem to work on node 5.1 yet so you might have to install 4.2.6.

The node-inspector module is a fantastic tool that allows you to debug node programs using the Chrome developer tools to set breakpoints and inspect the program state in a graphical way.

The Blink DevTools debugger is a powerful JavaScript debugger interface. Node Inspector supports almost all of the debugging features of DevTools, including:

* Navigate in your source files
* Set breakpoints (and specify trigger conditions)
* Step over, step in, step out, resume (continue)
* Inspect scopes, variables, object properties
* Hover your mouse over an expression in your source to display its value in a tooltip
* Edit variables and object properties
* Continue to location
* Break on exceptions
* Disable/enable all breakpoints
* CPU and HEAP profiling
* Network client requests inspection
* Console output inspection

To install `node-inspector`

```
npm i -g node-inspector
```

To run node-inspector for this demo

```
node-debug index.js
```

Your application will start an instance of Chrome with debugging
