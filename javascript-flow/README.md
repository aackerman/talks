## JavaScript Flow

[display image of Flow logo]

## Introduction

I'm Aaron. If you've seen Key and Peele, when you hear Aaron, you might think A-a-ron.

[display image of key and peele a-a-ron]

So if you see me after the talk and you want to chat about flow. You can break the ice with something like "You done messed up A-A-RON".

[display images of social media usernames]

You can find me on Twitter, Github at these places. I tweet about only really important stuff, like how hot or cold it is in Minnesota.

[display image of Wunderground temps for Minneapolis]

If you're wondering about the weather. Rain is the weather today, so it's a good day to be learning about flow.

[display image asking for questions]

This is a relatively small room, if you have questions, go ahead and raise your hand and ask them. I'll ask for questions at the end but don't force yourself to wait. We're all professionals here but if you don't understand something it's pretty likely that someone else in the room doesn't understand and it will be good for everyone.

## Learning about types

I grew up about 30 minutes north of here in Coon Rapids. And I went to Coon Rapids Senior High. The school had computer labs and actually offered a couple programming courses. I was really interested in computers but my parents didn't really 'get' computers. So I took all of the computer classes that the school offered.

[display image of clang compiler]

The courses we're teaching C++, probably because that was what the teacher knew.

If you haven't seen this dragon before, and you think what does a dragon have to do with programming, this is an image for the Clang compiler. Which is the default C and C++ compiler that is pre-installed on MacOS.

I learned about integers, strings, for loops, if/else branching, and displaying words in the command prompt. I had no understanding of what a compiler was, how to handle memory, and I had no understanding of algorithms. So I didn't know a lot about types or why the compiler complained but I could add numbers and display words on a screen. I knew my program needed import iostream.h and return the value zero but I didn't know why.

[display image of black jack]

The final project I made was text version of the game black jack. And I remember at the time thinking that it worked pretty well. I'm sure today I would be appalled by the quality and realize that it was completely broken.

[display image of c++ struct]

In the last week of the class the teacher tried to explain structs and pointers and I don't think anybody in the class really understood. Those were my first real experiences with programming back in high school and I didn't really understand the tools so I didn't end up doing any programming at home.

[display image of PHP and JavaScript]

I worked with PHP and JavaScript while I was in college and that led me to my first job. And I have been working in JavaScript along with a variety of other languages ever since. Although I haven't written any PHP in years.

[display image of Flow logo]

I'm here today to talk about flow and static type-checking in JavaScript.

Flow is described as "A static type checker for javascript". For languages that support static type checking, it means that all of the type information can be known at compile-time or before any of the code is actually run or executed. Dynamically typed languages on the other hand determine type safety at runtime.

[display examples of statically typed languages vs dynamically typed languages]
  Examples of statically typed languages
    * Java
    * C#
    * Go
  Examples of dynamically typed languages
    * JavaScript
    * Python
    * Ruby

Here are a few examples of statically and dynamically typed languages just of reference. I personally have extensive experience with dynamically typed languages, I've only grazed the surface of the popular statically typed languages here. They're just not my background. But I've seen the benefits of static typing.

## What is the point of static typing?

One question you might ask is "Why?", "What is the point of static typing?"

[display image of the question "Why?"]

And you might be thinking "Why would I want to specify types that sounds like a lot more typing and extra information. I think JavaScript is an elegant language, we're getting all these new features and I'm using Babel to compile new syntax into code I can use in production why would I want to add all those ugly types."

From another perspective a developer that is used to the statically typed languages I listed before like Java or C# you might be thinking. "Yeah, that sounds great sign me up, I love types, having a statically typed language keeps me from making silly mistakes."

[display image of comic argument]

Developers from different backgrounds have different views on static vs dynamic typing. I hope you're here because you have an open mind and you're interested. In my mind, flow is just another tool that allows you to write better code, faster.

## Using Flow

[display image of "Using Flow"]

Let's get into using flow. No matter whether you're writing JavaScript for the server or the browser the first thing you will need to use is a version of the flow binary. The easiest way to do this is to install from npm.

[display image of `npm install --save-dev flow-bin`]

You can also compile from source, or install the latest release from homebrew, or click to download one of the release from the flow repo on github.

Flow is supported on MacOS, Linux, and just recently Windows. So Windows users can use Flow as well.

After installing the flow binary it's necessary for your project to have a `.flowconfig` file even if the file is mostly empty.

[display image of `flow init`]

You can use the `flow init` command for adding flow to a new or existing project.

If you have a significant project or you make extensive use of webpack loaders you might need configuration in your project to handle non-JavaScript file imports and requires. Configuring flow for your project might be the first hurdle you run into, but it can often be overcome quickly. The maintainers have added several configuration options to work with modern JavaScript module compilers such as webpack and browserify.

So you have flow installed and a configuration file created, you're ready to start type-checking JavaScript.

[display image of `flow check`]

Running `flow check` is the easiest way to do that. It will check all of the JavaScript in the current folder. You'll probably see no results initially and that's because flow pushes type-checking to be opt-in. This can help with the feeling of being overwhelmed with warnings and errors for an existing project.

[display image of `// @flow` pragma]

So flow offers this comment indentifier that tells flow that code in this file should be type-checked.

[display image of `flow check --all`]

It's also possible to type-check all files by adding the dash dash all flag to the `flow check` command.

Let's get into our first example.

[display code the ex1.js in flow-examples]

As you can see we opt-in to using flow by adding `@flow` in a comment at the top of our file. We have a function `foo` that accepts one argument `x` and returns ten `x`. Who ever wrote this must have been one of those 10x developer, don't laugh at that one, that's a bad joke.

This code doesn't have any type annotations yet, but let's see what happens when we run `flow check` on this code.

[display terminal window and run `npm run check:ex1`]

So we can see that flow identified a problem with calling `foo` with 'Hello World'. Flow infered based on the code that we're multiplying the input by 10 and only numbers can be multiplied so the `x` argument should be a number not a string.

[display code the ex2.js in flow-examples]

I've modified the code a for example two. I've added an annotation that the argument `x` should be a number and the return value of `foo` should also be a number and let's take a look at the output we get from flow.

[display terminal window and run `npm run check:ex2`]

Now flow didn't have to do the inference. We codified that `x` should be a number. And flow tells use again that calling `foo` with a string is invalid because `x` should be a number.

## Running code with flow types

[display image of "Running Code with Flow Types"]

At this point you may be wondering about the flow syntax and actually running that code in my first two examples. Let's try to run example 2 that contains type annotations

[display terminal window and run `npm run ex2`]

As you can see, the script errored on an expected token. Writing flow isn't standardized syntax so the type annotations need to be removed from the code to run. There are a few options options for running code with flow type annotations.

[display options for stripping types]

* Using Babel to strip types with the `flow-strip-types` plugin.
* Using a module like `flow-remove-types` to remove types
* Using flow comments

Let's look at the remove types and comments options.

[display code for ex3.js]

In example 3 we've adjusted this script to output the value returned from `foo` and we can run `flow check` to figure out if this script is type-safe.

[display terminal window and run `npm run check:ex3`]

Now that we know example 3 is type safe let's run the example.

[display terminal window and run `npm run ex3`]

[highlight the script that node eval'd]

For this example I passed a string for node to eval. It's requires the `flow-remove-types` module require hook. That allows for zero configuration stripping of types at runtime instead of using a build step, this is done through a just in time transformation when code is included with require. This might be OK in development or if your project is small. For larger projects I recommend using a build step using `flow-remove-types` module or the Babel plugin for stripping types.

One piece of good news is that if you're using Babel with the React preset you can use flow with zero changes to your configuration.

So stripping types with or without a build step is one option for running code with flow types. The other option is using flow comments. If you choose the option of using flow comments, there's a lot more typing, and typing block comments inline with your code is pretty ugly, but you're always writing valid JavaScript. Let's look at what that looks like.

[display code for ex4.js]

As you can see the two type annotations are commented, and we've gone back to calling the `foo` method with "Hello World".

[display terminal window and run `npm run check:ex4`]

And when we check this with flow, the output is the same as Example 2. In fact, we can look at the two scripts side-by-side to see the difference.

[display code for ex2.js and ex4.js]

There is no noticable difference to how flow operates on these two pieces of code. You get the same type checks with comments and you don't have to strip anything out, until your minification step removes all comments.

## Implicit typing (inference) vs. Explicit typing (manifest)

[display image of implicit vs explicit typing, ex1 vs ex3]

So those we're some simple examples, but I want to segue for a second and get some terms in your mind. There are many properties of different type systems, but at some point the compiler has to define types for variables. Many type systems use implicit typing where the compiler makes inferences about the code, its surrounding syntax and usage. You see this in JavaScript, Ruby, and Python. In other type systems there is explicit or manifest typing where the types have to be written out to satisfy the compiler before the  code will run. You can see this in languages like Java, C#, and Go.

It's also that case that type systems will employ a little bit of both. Inference where the types are implied and manifest where the types are written for more clarity.

Flow makes use of inference to give developers error checking without writing out any types and it can often give you better error checking when more types are added.

## Class types

[display slides with syntax flow supports]

Flow has support for nearly all if not all of the ES2015 specced syntax. Classes, arrow functions, import/export syntax is all supported. Even some syntax that is in the spec process is supported by flow, such as features like the Async/Await keywords and Object Rest/Spread syntax. So unless it's syntax is very early in the spec process, it's probably supported by flow and you won't run into errors.

Let's take a look at a simple class

[display code from 'rect.js' file]

We have a class called Rect, that accepts width and height as number parameters to the constructor and it has a `getArea` method to return the area of the rectangle.

If we switch over to example 5.

[display code for ex5.js file]

We import the Rect class create a method called getArea to get the area of a Rectangle create and instance of Rect and log out the area of the instance. Let's see how this example type checks.

OK so let's see a quick show of hands. Who would say, yeah that looks right I think it's not going to have any errors.

[poll the audience]

[display terminal window and run `npm run check:ex5`]

So this type checks with flow just fine, let's run the code

[display terminal window and run `npm run ex5`]

And we get the output area of 10.

## Subtypes

If we take a look at the next example

[display code for ex6.js file]

We import Rect and extend the Rect class to create the Square class. Square just has one number parameter and inherits the getArea method from Rect. After that we define a getArea method that accepts a Square and outputs the areas. We create an instance of each class and log the areas.

Let's go ahead and run this file to see the output before we do any type checking.

[display terminal window and run `npm run ex6`]

As we can see the code all ran just fine.
But when we type-check this code with flow we'll run into an error.

[display terminal window and run `npm run check:ex6`]

A Rectangle is not a Square. But the Rect class and Square class both have the `getArea` method so you might be wondering why flow is complaining. Both of the objects have the same `getArea` method, so what's the problem.

It has to do with the way types of resolved in Flow. For classes specifically where inheritance is involved the type is checked by name. My specific example was simple, if you think about it a different way we could subclass Square again to create a ColoredSquare that takes a color parameter and has a `getColor` method. If inside the method we used the `getColor` method any super classes would be invalid.

## Interface types

So in the last example we saw that when we specified a sub class as the parameter type passing in a super class was an error for flow. If we only care about using certain methods we can use interface types to allow a method to use several different types.

Let's take a look at the next example

[display code for ex7.js file]

We import Square and Rect, both of them have the same `getArea` method, and define an variable `LikeARect` with an object literal and it has a `getArea` method. Below that we are using flow to define an interface type `ILikeRect` that we use as a parameter type for our new `getArea` method. Now that we're are using an interface I bet everything will be fine, everything will typecheck and run appropriately.

[display terminal window and run `npm run check:ex7`]

So everything checks out

[display terminal window and run `npm run ex7`]

And everything runs correctly. So in the case where you want to be more specific about the structure of an object and not worry about class names it's appropriate to use an interface.

## Structural vs. Nominal Types

[display image of Structural vs. Nominal]

I've been trying to lightly put some more esoteric terms about types systems in your mind and I have a couple more after talking about how flow handles class types versus interface types.

Type systems where types are compared by their fields and methods are said to be structural.

In the Go programming language interfaces are structural, if an object implements all the methods of the interface correctly it can be used where a variable is typed to be the interface.

Type systems where types are compared strictly by names are said to be nominal. As I said before in flow class types are compared nominally. Interface and object types are compared structurally. I personally don't know the reason for this. I would imagine the performance of comparing by named vs complex structures would be much faster, so the reasons are likely for performance. We would probably have to ask the team that works on flow to get the correct answer.

## Object types

[display slide that says "Object types"]

To me simple object types are the part of flow that I like the most. Especially for data objects that are coming from an API. If I can use the same type definitions with node on the server and in the browser a huge perk. Say a field is renamed in your database, that change propagates to the API and then to the UI. If you have type definitions for that object in place you won't have to hunt down every single location where the field needs to be updated in the UI, flow will tell you.

[display code for ex8.js file]

I work on a platform that handles rebates, and we have consumer submissions. Imagine that this piece of code will be used to fetch and display submissions to user in a platform administration app. For the purposes here we're just going to log out the state where the consumer submitted from.

I've imported the type from a seperate file and I've annotated that the response from the fetch is an array of submissions.

In this case the submission type definition is defined elsewhere and shared between the front-end and the server.

So one team member decides, oh state doesn't actually make a lot of sense for submissions because other countries like Canada have provinces, so let's make it more generic and call the field region.

It's common to say that naming is hard and it is, but I've always found renaming to be harder.

So the database field has to change, part of the API has to change and the type definition has to change. So let's go ahead and change the type definition of the submission. So this person isn't even considering having to change any UI code at this point. But the changes are committed, linting runs, and flow runs. Let's check out what flow has to say.

[display terminal window and run `npm run check:ex8`]

Flow says we don't have a state field anymore. So that's pretty cool. We can change a shared definition of a data object and flow will help us understand all of the cascading changes.

## Enums

[display slide about enums]

Flow offers enums. Here we have a `Response` type that can have any of the string values 'yes', 'no', or 'maybe'. Enums that that can be statically verified are great. It's nice to be able to say, the input is definitely a string, but to be able to refine that down to a strict subset of different strings is really awesome.

## Maybe types

[display slide about maybe types]

There are several different words to describe the concept of a variable that has a type that may or may not hold a value. C# has a Nullable generic type, Java has the Optional generic type, and Haskell has the Maybe. Flow calls these Maybe types. In all cases the idea is that the underlying value of a variable could be null or a completely different type.

In the case on the screen the variable 'o' maybe is a string and may be undefined or null.

So far I've just scratched the surface of the expressiveness of flow's type system. There's much more that I won't be able to cover today. So it's worth a look at the documentation to see what flow offers.

## Flow coverage

It's often the case that flow can understand the majority of your programs by adding a minimal amount of types. As a baseline you want your program to have no type errors. After that flow offers a coverage tool that will allow you to fill in the rest of the types to get to 100% coverage.

Let's go back and look at my example about fetching rebate submissions.

[display code for ex8.js file]

There are two variables here, the raw response object from fetch and the array of submissions after parsing the response from JSON. And I've only annotated one of the variables with a type.

Let's take out that annotation. Check for errors and then check for coverage.

[display terminal window and run `npm run check:ex8`]

So there were no errors, we didn't actually need that annotation to fix any type errors.

[display terminal window and run `npm run coverage:ex8`]

So flow reports that we have about 66 percent coverage. So not having full coverage tells us that we're missing something. If we adjust the configuration for getting coverage we can add the color flag. Let's look at that.

[add the color flag to the coverage report]
[display terminal window and run `npm run coverage:ex8`]

So now we can see flow highlighting several areas that are affecting coverage. And if we add back the type annotation we can get to full coverage on this script. So the coverage report can be a very useful tool for identifying areas where useful types can be added.

## Built-in types

Flow offers a lot in the way of built-in types.

[display slide about "Built in types"]

Aside for the basic JavaScript types, string, number, boolean, null and void flow offers a few special types.

[display slide about "any" type]

The any type is simultaneously a subtype and supertype of everything. It's an outlier that is specially treated and it's often used when you just want to tell flow to get out of the way. Use of the `any` type should always be used with caution because in many ways it bypasses the type system.

[display slide about "mixed" type]

Flow offers another type called `mixed`. It's distinguishable from the `any` type because it is a supertype of everything but not a subtype of everything. The documentation describes mixed as a more annoying form of any. If a parameter has a mixed type flow still handles errors based on the underlying type of variable. So if the type is really a string flow won't ever throw an error when passing a string into a function like `takesMixed` on the screen. But if you try to call methods that strings don't have, you will get type errors. So it's often better to use the `mixed` type instead of the `any` type to get the maximum benefits from using flow.

[display slide about other built-in types]

Flow also offers the necessary type declarations for the JavaScript standard library, browser object APIs and the DOM APIs. And the node.js standard library.

And the last set of library definitions flow offers is specifically for working with React. Flow has a built-in understanding of prop types and state, and can work with JSX out-of-the-box.

## Working with code you don't own

[display title slide "Working with code you don't own"]

It's a reality to be working with third-party code that you didn't write and probably doesn't have types exported. The community for having types in JavaScript is small compared to the overall size of the entire community. So a lot of libraries won't have type definitions.

[display slide about the flow-typed repo]

The `flow-typed` repo is the spot for community supplied type definitions for flow. So several popular libraries are included for support, but many more are missing.

[display slide about notable projects]

If you're looking to use flow, it might take time to get the definitions for third-party libraries that you intend to use. And that very similar to what you would run into if you go the route of using TypeScript.

Some notable inclusions:

* Express
* Moment
* Mocha
* Rx.js
* Underscore
* Redux

## Editor support

[display next slide]

The editor support for flow is alright in my opinion. I don't use vim myself so I didn't go ahead and try the plugin. The vim users out there will have to try it for themselves. There we're a couple plugins for sublime text, but I really didn't like them, they we're very visually intrusive. I personally like the visuals that the flow plugin for VS Code provides, let's take a look.

[open up vs code and the atom editor with nuclide]

* https://github.com/flowtype/vim-flow
* https://github.com/flowtype/flow-for-vscode
* https://github.com/facebook/nuclide

After looking at the plugins for these popular editors the issue I run into is that the flow command is leaps and bounds more useful and more informative over any of the IDE support. so I don't feel like I'm getting enough out of plugins.

## Learning more about flow

[display slide about learning more about flow]

There's a lot about flow that I wasn't able to get to today. I hope I was able to give you a better understanding of what flow is all about. If you have familiarity with TypeScript I'm sure you could draw a lot of parallels.

To learn more about flow I would push you to read the documentation. It's a good place to get started, but it does leave you with a lot of questions. The flow team is active on twitter so if you have questions you can likely get them answered pretty quickly.

[display thanks and questions slide]

I would like to thank everyone for coming to learn about flow and I believe that I have time for questions any questions that weren't answered during the talk.
