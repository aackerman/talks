# RubyMN 2013-10-28

## Method-related hooks

```
method_missing
respond_to_missing?
method_added
method_removed
method_undefined
singleton_method_added
singleton_method_removed
singleton_method_undefined
```

## Class & Module Hooks

```
inherited
included
append_features
prepended
prepend_features
extend_object
extended
initialize
initialize_copy
const_missing
```

## Marshalling Hooks

```
marshal_dump
marshal_load
```

## Coercion Hooks

```
coerce
to_xxx

Overloadable Operators
*
**
%
-
-@
+@
+
/
+=
-=
*=
/=
**=
=~
!~
<<
>>
<=>
[]
[]=
!=
==
===
<
>
<=
>=
|
^
&
~

Already Overloaded Operators
*  - rest and spread on sets
&  - to_proc
<< - append to array or string

Non-overloadable Operators
||
||=
&&
&&=
and
or
not
=
->
.
..
...
::
()
{}
```

## Other hooks
```
trace_var
at_exit
ObjectSpace.define_finalizer
Signal.trap
rescue
ensure
throw
catch
```

Discuss `ActiveSupport::Concern` and `Module#included`
