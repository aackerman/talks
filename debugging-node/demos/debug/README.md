```
$ npm install debug
```

```
node index.js
```

See no output

```
DEBUG=http node index.js
```

See output for http debug statements

```
DEBUG=http,worker node index.js
```

See output for http and worker loggers
