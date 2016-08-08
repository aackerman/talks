## Notes

JavaScript Flow

[display image of Flow logo]

## Introduction

I'm Aaron. If you've seen Key and Peele, when you hear Aaron, you might think A-a-ron. I get it often and I think it's great, so if you see me after the talk and you want to chat. You can break the ice with something like "You done messed up A-A-RON".

[display image of key and peele a-a-ron]

I work at a company call YA, formerly Young America, if you've ever sent in a paper rebate, you may remember sending it to Norwood Young America, Minnesota. So I work on a platform for digital marketing that includes rebates as part of the product line.

[display images of social media usernames]

You can find me on Twitter, Github at these places. I tweet about only really important stuff, like how hot or cold it is in Minnesota.

By the way, today the high temp for today will be.

[display image of Wunderground temps for Minneapolis]

## Learning about types

Programming is hard, right? We're in the beginner track, so I'm straying from the main topic of flow to talk a little bit about my beginner experiences with programming.

I grew up about 30 minutes north of here in Coon Rapids. And I went to Coon Rapids Senior High. The school had computer labs and actually offered a couple programming courses. I was really interested in computers but my parents didn't really 'get' computers. So I took all of the computer classes that the school offered.

[display image of clang compiler]

The courses we're teaching C++, probably because that was what the teacher knew.

I learned about integers, strings, for loops, if/else branching, and displaying words in the command prompt. I had no understanding of what a compiler was, how to handle memory, and I had no understanding of algorithms. So I didn't know a lot about types or why the compiler complained but I could add numbers and display words on a screen. I knew my program needed import iostream.h and return the value zero but I didn't know why.

[display image of black jack]

The final project I made was text version of the game black jack. And I remember at the time thinking that it worked pretty well. I'm sure today I would be appalled by the quality and realize that it was completely broken.

[display image of c++ struct]

In the last week of the class the teacher tried to explain structs and pointers and I don't think anybody in the class really understood. So I've come a long way from there but, I've been writing software for a relatively short period of time, my first job was about six years ago.

[display image of PHP and JavaScript]

My first job was a Junior software developer at an agency, writing PHP and JavaScript for clients. I remember my first interview very vividly. I showed the interviewers this automated dice-roller I had written because I was really into playing Dungeons and Dragons with my friends at that point in time. So I got through the interview and I was hired at an absurdly low salary for a Junior developer.

[display image of a small stack of cash]

I'm here today to talk about flow and static type-checking in JavaScript.

[display image of Flow logo]

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

Here are a few examples of statically and dynamically typed languages just of reference. And flow is a tool that allows its users to have static type checking and a dynamically typed language.

## What is the point of static typing?

And the first question you might ask is "Why?"

[display image of the question "Why?"]

And you might be thinking "Why would I want to specify types that sounds like a lot more typing and extra information. I think JavaScript is an elegant language, we're getting all these new features and I'm using Babel to compile new syntax into code I can use in production why would I want to add all those ugly types."

From another perspective a developer that is used to the statically typed languages I listed before like Java or C# you might be thinking. "Yeah, that sounds great sign me up, I love types, having a statically typed language keeps me from making silly mistakes."

Developers from different backgrounds have different views on static vs dynamic typing. I hope you're here because you have an open mind and you're interested. In my mind, flow is just another tool that allows you to write better code, faster.

## What is Flow?



## Using Flow

With front-end code and using flow with Node. Compiling with Babel or using flow comments.

## Implicit typing (inference) vs. Explicit typing (manifest)

## Structural vs. Nominal Types

## Flow vs TypeScript

TypeScript is a language compiler. It is self-hosted being written entirely in TypeScript itself. Typescript performs the job that Flow and Babel perform in concert.

Flow on the other hand is written in a majority of OCaml and JavaScript.

## JavaScript Types

## Flow syntax

## Special Syntax

$Keys, $Exact, $All, $Tuple, $Either, $Diff, $Shape

## Using flow in an existing project

## Flow with React

## Installing and using flow

## Built-in types

## Subtypes

## Generic Types

## Union Types

## Read/Write-only interfaces

## Language of describing types

## Typecasts

## Flow pragmas

## Importing types and type declarations for third-party libs

## Flow-typed community repo

## Built-in type declarations

### Static types in a small project vs large project

## Benefits of static typing

## Static typing is not a replacement for tests

## `flow-strip-types` vs. flow comments vs `flow-remove-types`

## Flow in Babel vs Flow in Node

## Integration with webpack features
