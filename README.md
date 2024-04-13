# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @fakeha38/lotide`

**Require it:**

`const _ = require('fakeha38/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: returns the head (first element) of na array
- `tail(...)`: returns the tail (all elements except the head) of an array
- `middle(...)`: returns an array with middle part of our original array
- `eqArrays(...)`: returns true or false by comparing two input arrays
- `assertArraysEqual(...)`: asserts the result of eqArray, if it is true or false
- `assertEqual(...)`: returns assertion if two primitive data inputs are equal or not
- `countOnly(...)`: returns counts for a specific subset of input array items. 
- `countLetters(...)`: returns a count of each of the letters in input string sentence.
- `letterPositions(...)`: returns all the indices (zero-based positions) in the input string where each character is found.
- `findKeyByValue(...)`: returns the first key which contains the given value from an object.
- `eqObjects(...)`: returns true or false by comparing two input objects
- `assertObjectsEqual(...)`: asserts the result of eqObjects, if it is true or false
- `findKey(...)`: returns the first key (of an input object) for which the input callback returns a truthy value. 
- `flatten(...)`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- `without(...)`: returns a subset of a given array, removing unwanted elements(input).
- `takeUntil(...)`: will keep collecting items from a provided array until the callback provided returns a truthy value.

