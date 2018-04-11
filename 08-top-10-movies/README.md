# Top 10 movies

A movie recommendation app at least needs a top 10, right?

And it should display in the browser, right?

Yup.

In broad terms that means these steps will have to be taken:
1. Declare a variable that can hold a collection of all cleaned movies
1. Store all movies (not just a few) into that collection
1. Sort all movies on score
1. Get the top 10

Ready? Go!

## A collection for all movies

A variable that holds all movies is easy to think about. We need a collection of all movies. An Array that is.

That could be as simple as:
```js
var allMovies = []
```

Add that line of code to the top of movies.js file.

It is an empty collection. But that is fine. Since in our parser we call a function for every movie, we could use that function to store it in the allMovies collection

## Store all movies

Currently in our `distillMovie` function, we just log the movie to the console. Instead, we should add it to the collection.
Lets change the last line of that function, so it does not log the movie, but it stores it in the `allMovies` array

Currently, the last lines of the body of that function are:
```js
  // log the clean movie in our console:
  console.log(cleanMovie)
```

Remove them, and add in these lines:

```js
  // store (or push) our clean movie into our allMovies collection:
  allMovies.push(cleanMovie)
```

Let me explain that. `allMovies` is an Array. In javascript you can add things into an array, by `push`ing it in.

> **In geek 🤓 terminology**: `allMovies` is an array. All arrays in Javascript have a function called `push` that you can call with the thing you want to store in the array.

### All movies, you asked?

Yes. All movies, thank you very friendly.

To do that, it suffices to remove the `preview` property from the PapaParse configuration. PapaParse cannot sort our incoming data. It just parses it.

If we want to have a top 10 list of all movies in the CSV file, not just a preview of the first movies in that file, we need to parse all movies, and after that, sort them in a way that makes sense to us.

## Sort movies

Lets create a new array with movies, sorted on score.

Sorting an array of objects is quite easy to write, but a lot of complex things are happening behind the that easy-looking code.

In general, it looks like this:
```js
unsortedArray.sort(function (elementA, elementB) {
  // return a number below 0 to give precedence to elementA,
  // return a number above 0 to give precedence to elementB
})
```

It will go over 2 elements in the unsorted, and if the inner function returns a number greater than 0, the second element is sorted before the first element. If it returns a negative number (less than 0 that is), the first element is sorted before the second element.

For our movies, the simplest thing that could work might be just subtracting the score of movieA from the score of movieB:
```js
movies.sort(function (movieA, movieB) {
  return movieB.score - movieA.score
})
```
This will return a number above 0 if the score of movieB is higher than the score of movieA.

Since we want our movies to be sorted from a function, we create a function that wraps the above code:
```js
var sortMovies = function (movies) {
  // make a clone of the movies array
  var unsorted = movies.slice()

  return unsorted.sort(function (movieA, movieB) {
    return movieB.score - movieA.score
  })
}
```

Now we have a `sortMovies` function. We could give it a collection of movies, and it would return a new collection of movies, sorted on score.

```js
var moviesSortedOnScore = sortMovies(allMovies)
```

## Get the top 10

Now that the collection is sorted (pun intended), we should select the first 10, and get rid of the remaining (non-top 10) movies.

Arrays are like bread, you can slice pieces of it.

In Javascript, you have to let the slice function know where to **begin** the slice, and **up to** (not including) where your slice should end.

For the top 10, it starts at the 1st element (number 0, remember?) and it ends at the 11th element (number 10).

```js
// In your console, play with this:
var moviesSortedOnScore = sortMovies(allMovies)

console.log(moviesSortedOnScore.slice(0,10))
```

Since we want to capture everything in functions that receive input, and, it could look like this:

```js
var topTen = function(movies) {
  return movies.slice(0,10)
}
```

You could use the function like so:
```js
// first, set up a collection of movies
var moviesSortedOnScore = sortMovies(allMovies)

// then convert it into a top-10
var mostPopular = topTen(moviesSortedOnScore)

console.log(mostPopular)
```

# Exercises

You will make changes to your movies.js file. Make sure to check in your console for correct output.

1. ✍️  **`allMovies`**: Create a variable that holds all movies **at the top** of movies.js
1. ✍️  **Store all movies**:
  1. Change the `distillMovie` function so it doesn't log to the console any more, but stores the movie in the `allMovies` array.
  1. Make sure to parse all movies, by removing the `preview` property from your configuration.
1. ✍️ **Sort it**: Inside your movies.js, declare a function to sort movies on their score.
1. ✍️ Make a **Top 10**: Inside your movies.js, create a function that returns a slice of the first 10 movies

After you've done this, you will display the top 10 in the next chapter!
