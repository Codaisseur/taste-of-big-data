# Relevant movies ONLY!

So we have a nice top 10 visible in our page, but it is full of junk 😭

And with junk, I mean: a movie with just 1 or 2 votes (or maybe even less than 20) is not popular at all.

Our top-10 should only show movies that have received enough votes.

In geek 🤓 terminology that means: We have to filter certain movies out of our collection.

If you look at the last function we wrote, lets see where it makes sense to filter:

```js
var displayMoviesAfterParsing = function () {
  var moviesSortedOnScore = sortMovies(allMovies)
  var mostPopular = topTen(moviesSortedOnScore)

  mostPopular.forEach(displayMovie);
}
```

> 🙄 How to choose where to filter
>
>`allMovies` should not be changed; otherwise the name would be wrong
>
> We could filter before we sort.
>
> We could filter before we create a top 10
>
> `mostPopular` contains just 10 movies. If we filter there, we will get a top 2 or to 3. That is too late to filter.

Since sorting is kinda intensive, for humans and for computers (try alphabetizing a shelf of books, you will find out), we want to sort the smallest set possible.

Lets filter before sorting.

## Filter

Now that we have decide where we should introduce our filter, time to think about what a valid amount of votes is.

In this case, I'm basing it on gut feeling. 50 votes is the minimum.

Bam. I said it.

Feel free to chose a different amount - Maybe you're happy with movies with 3 votes or more.

Or maybe with movies with 5000 votes and more. Maybe you only want to see movies that everybody has seen at least twice.

I don't judge.

But I stick to 50 :)

Now, a filter needs a way of knowing if it should include a movie or not. Lets create a function for that!

You need a function that returns a positive signal (geeks prefer the word `true` for that) if a movie has more than 50 votes.

If the movie doesn't have that many votes, it will return a negative signal (or `false`) as you might have guessed.

Lets name that function `enoughVotes`:

```js
var enoughVotes = function (movie) {
  return movie.votes > 50
}
```
That function should live in your movies.js file and is very handy, because we can use it to form a filter. A filter will include all movies that gave a positive signal, and will exclude the ones with a negative signal.

So, we want to have a collection of **filtered movies**, that is a subset of **allMovies** based on a **filter** that only allows movies with **enough votes**.

In code, that looks like this:

```js
var filteredMovies = allMovies.filter(enoughVotes)
```

If you run that in your console, you will see a collection that is smaller than the allMovies collection (unless you're filtering is off, then you'd might have the same amount of movies).

But again: The console is not the correct place; you want to have a nice view in the browser. Lets fix that!

Make a change to the `displayMoviesAfterParsing` function.

```js
var displayMoviesAfterParsing = function () {
  var relevantMovies = allMovies.filter(enoughVotes)
  var moviesSortedOnScore = sortMovies(relevantMovies)
  var mostPopular = topTen(moviesSortedOnScore)

  mostPopular.forEach(displayMovie)
}
```

# Exercises

> 1. ✍️  **Add the `enoughVotes`** function to movies.js. Make sure to filter on any amount of votes that you prefer.
> 1. ✍️  **Filter your movies** preferably before sorting. Do that by altering your `displayMoviesAfterParsing` function.

Well then, fixed!
