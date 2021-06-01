# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Tests to check if two arrays are identical
* `assertEqual`: Tests that two literals are equal
* `assertObjectsEqual`: Tests to check if two objects are identical 
* `countLetters`: gives the occurances of letters in a string
* `countOnly`: returns the occurances of a single item
* `eqArrays`: Tests if two arrays are equal
* `eqObjects`: Tests if two objects are equal
* `findKey`: returns the keys of an object
* `findKeyByValue`: Returns the key corresponding to a value in an object
* `head`: Returns the first element in an array 
* `index`: object for holding all the function calls of this library 
* `letterPosition`: Returns the position of a specified letter in a string
* `map`: implementation of JS's map function on MDN
* `middle`: Returns the middle elment(s) of an array 
* `tail`: Returns a new array omiting the first element 
* `takeUntil`: returns an array with elements until a specified item
* `without`: removes a specified item from an array

