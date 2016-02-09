Run the script in this directory on a solaris system and use `mdb` to debug the running instance.

You can sign up to use the Manta service from Joyent to easily do this.

It allows you to login to a running instance of SmartOS and have `mdb` `node` available for use to debug this process.

Copy the script from your local machine to the running instance, paste into vim and write the file.

Core dumps can also be dumped on linux with `gcore(1)` or `--abort-on-uncaught-exception` and a core file will be dumped with the state of the process.

### Using manta

The core dump can then be copied to Manta or a solaris system and debugged with mdb in a post-mortem fashion.

If using manta to debug, setup and account with joyent, add a public ssh key, setup your environment variables for the manta sdk.

Install the manta sdk.

```
npm i -g manta
```

### Using mdb with v8 extensions

```
node index.js &
[2] 17334
```

Attach mdb to the running process

```
mdb -p 17334
```

Load the specific v8 extensions

```
> ::load v8
```

Use `::jsstack` to get a combined JavaScript/C stack trace

```
> ::jsstack
```

Use `::findjsobjects` to do exactly as it states. Use the `-p` flag to find objects with a specific property
```
> ::findjsobjects -p hello
```

Supply an address of the JS object with `::jsprint` to print out the

```
> a0784db5::jsprint
```

```
> ::findleaks
```
