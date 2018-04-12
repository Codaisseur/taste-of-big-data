# Genres

We could say that 1 genre has many movies attached to it

Or, in geek 🤓 terminology, there is a **one-to-many association**, one genre will link to many movies.

Well actually, a movie has many genres as well. But from the perspective of the genre, we don't care about that.

And the genres are the first class citizens of this chapter, so lets go with the idea that from the perspective of a genre, it will be associated to many movies.

## Lets talk movies again

Lets say we have these movies:
* The Godfather, genres: Crime and Drama
* Gone Girl, genres: Mystery, Thriller and Drama

In a visual representation, it could look like this:

genre | associated movies
--- | ---
Drama | The Godfather, Gone Girl
Crime | The Godfather
Mystery | Gone Girl
Thriller | Gone Girl
Comedy | -

If The Godfather and Gone Girl have a high enough score, both movies should show up in the top-10 list for Drama.

Since Gone Girl is not a Crime movie (according to TMDB), it should not show up in the top-10 list for Crime.

And since both movies aren't comedy at all, however high they score, you won't get them recommended if you look for a comedy.

But I'm getting ahead of myself.

Let's make some changes to the code, so we can look at genres (in the console for starters)

### Change some code to view genres

To work with the raw movies as Parsed by Papa,  the function `distillMovie` is where we should be.

As a reminder, this is what it currently looks like:
```js

var distillMovie = function (rawMovieData) {
  // don't continue if there are errors
  if (rawMovieData.errors.length > 0) {
    return // a return immediately breaks out of the function
  }

  // From the rawMovieData, go to the data property,
  // and use the element on position 0 - the first element of the array, that is.
  var rawMovie = rawMovieData.data[0]

  // Declare a variable that holds an object for our cleanMovie
  var cleanMovie = {}

  // set the properties on our clean movie based on the raw movie
  cleanMovie.title = rawMovie.title
  cleanMovie.score = rawMovie.vote_average
  cleanMovie.votes = rawMovie.vote_count
  cleanMovie.year = rawMovie.release_date

  // log the clean movie in our console:
  allMovies.push(cleanMovie)
}
```

#### Look at the genres

In that function we have access to the `rawMovie`, with all CSV properties available.
Lets look at the parsed genres of the rawMovie.

We will add some code at the end of that function.

The code comes below the text, but above the closing curly brace (`}`)

Below you see the updated version of that function:

```js
var distillMovie = function (rawMovieData) {
  // don't continue if there are errors
  if (rawMovieData.errors.length > 0) {
    return // a return immediately breaks out of the function
  }

  // From the rawMovieData, go to the data property,
  // and use the element on position 0 - the first element of the array, that is.
  var rawMovie = rawMovieData.data[0]

  // Declare a variable that holds an object for our cleanMovie
  var cleanMovie = {}

  // set the properties on our clean movie based on the raw movie
  cleanMovie.title = rawMovie.title
  cleanMovie.score = rawMovie.vote_average
  cleanMovie.votes = rawMovie.vote_count
  cleanMovie.year = rawMovie.release_date

  // log the clean movie in our console:
  allMovies.push(cleanMovie)

  // Let's  inspect our genres
  var genres = JSON.parse(rawMovie.genres)
  console.log(`${rawMovie.title} is about `, genres)
}
```

If you reload the page in your browser, you will see the name of the movie, and the genres, **of all movies**!

#### Consider how to represent genres with many movies

Now, when parsing the movie, we have access to the names of the genres. But in advance we do not know what all the genres are. Yet you want to have a construction in Javascript to 'store' the association between genres and the clean movies.

You know about the array, a wonderful thing to store many objects in. You also know about the object, a wonderful thing to represent something from the real world in.

Our `cleanMovie` is an object. Lets create objects for our genres as well.

The first thing that comes to mind is an object with the property `name`, and its value is the name of the genre, lets say Drama.
It looks like this:
```js
{ name: 'Drama' }
```
That object also needs a property for all movies that have the genre 'Drama' associated. Did you know you can even put an array as the value of an objects' property?

It would look like this for a genre object with a property `movies` that is empty:

```js
// don't paste this in your console, it is just explanatory...
{ name: 'Drama',  movies: [] }
```
Let's say we put the cleanMovie objects for Gone Girl and The Godfather in there.

In the example below, the code is split over multiple lines, just for readability:
```js
// don't paste this in your console, it is just explanatory...
{
  name: 'Drama',
  movies: [
    { title: "Gone Girl", score: 7.9, votes: 5862, year: "2014-10-01" },
    { title: "The Godfather", score: 8.4, votes: 5893, year: "1972-03-14" }
  ]
}
```

Now, we want to have a collection of all our genres, Right?

That means we have an array full of `genre` objects. Since it is an array of many genres, lets call it so. Based on 2 genre object without any movies in it, this is a shape that would fit:

```js
var genres = [ { name: 'Drama', movies: [] } , { name: 'Comedy', movies: [] } ]
```

#### Create the objects from the raw data

Now that you know what you'll work towards, lets start!

*First we should clean up, though*

At the top of the movies.js file, look for the line that reads
```js
var movieGenres = ['Action', 'Adventure', 'Fantasy', 'Science Fiction']
```
That was there just to tickle our interest.

Remove it.

Then, in the same file, search for the line:
```js
mostPopularByGenre.innerText = movieGenres
```
Remove it as well.

At the top of the file, add a variable for `genres`, just below the lint that is there for `allMovies`:

```js
var genres = []
```

In the `distillMovie` function, it is time to replace the lines that were just added. They are just spamming your log, and making the app slow.

Now that all the cruft is removed, time to implement our changes.

First we have to parse all genres of a movie. Add the next line at the end of the body of `distillMovie`

```js
  var thisMoviesGenres = JSON.parse(rawMovie.genres)
```
At this point we have to run some code `forEach` genre in `thisMoviesGenres`.
```js
thisMovieGenres.forEach(function (rawGenre) {
  // some code that we will see later
})
```

This `distillMovie` will be executed for every movie in our CSV file.
The first time it runs, the app has no genres of its own, just that empty array.

That means, the first time it sees a (new) genre, it should create an object for each genre in the `genres` array, *and add the `cleanMovie` to it*.

But after distilling the some movies, the app will know about some genres.

That means that we should not create genre objects if it already exists. We should just use the existing genre.

### Create or re-use an object

If the genre cannot be found in our app (Javascript calls this `undefined`), it should be created. Otherwise it should just be used. Either way, after creating or reusing it, the clean movie must be added.

That sounds like geeky-English. Lets express it in code:

```js
thisMovieGenres.forEach(function (rawGenre) {
  // lets find the genre
  var genre = genres.find(function (genre) {
    return genre.name === rawGenre.name
  })
  // If the app couldn't find the genre (undefined), it should be created now.
  if (genre === undefined) {
    genre = {
      name: rawGenre.name,  // the name of the genre
      movies: []            // an empty collection, so we can later push the clean movie in
    }
    // Now that we created a genre, it should be added to the `genres` collection.
    genres.push(genre);
  }
  // whether we created a genre or found a genre, it is time to add the movie to it:
  genre.movies.push(cleanMovie)
})
```


# Exercise

Time to update your app so it generates you genres and associations:
> 1. ✍️  **Clean up** the movies.js file, following the steps above
>
> 1. ✍️  **Create genres**. Create, with the guidance above, a genres array, and fill it with genres. Fill those genres with clean movies.

After you've created the `genres`, and filled it with all movies, it would be nice to have a look at it.
If all works, you should have some nice output if you log it:
```js
console.log(genres)
```

<details>
  <summary>Spoiler alert - click here if you're stuck</summary>
  <p> Below is the complete contents of the `distillMovie` function. For brevity, all the comments are removed:</p>
  <pre>
```
var distillMovie = function (rawMovieData) {
  if (rawMovieData.errors.length > 0) {
    return
  }
  var rawMovie = rawMovieData.data[0]
  var cleanMovie = {}

  cleanMovie.title = rawMovie.title
  cleanMovie.score = rawMovie.vote_average
  cleanMovie.votes = rawMovie.vote_count
  cleanMovie.year = rawMovie.release_date

  allMovies.push(cleanMovie)

  var thisMovieGenres = JSON.parse(rawMovie.genres)
  thisMovieGenres.forEach(function (rawGenre) {
    var genre = genres.find( function (genre) {
      return genre.name === rawGenre.name
    })
    if (genre === undefined) {
      genre = {
        name: rawGenre.name,
        movies: []
      }
      genres.push(genre);
    }

    genre.movies.push(cleanMovie)
  })
}

    ```
  </pre>
  code
</details>

---
See if your result of logging to the console resembles the screenshot below. If it doesn't look like it, *ask for help*!
![Genres with many movies](https://cd.sseu.re/genres-with-many-movies.png)
