# Step by step

Pat yourself on the shoulder... You should congratulate yourself for converting that movie from data into Javascript! 🍻

What are the things that we're interested in in each movie?

Since we want to build a movie recommendations app, we at least need the **scores** of the movie.

The amount of **votes** also tells us something about popularity.

And just to make things interesting we want to have a look at the release **year**.

Also, to know what movie we're talking about, a **title** is useful.

If we look at the Avatar movie from the previous chapter, that object had WAAAYYYY to many properties. We want to trim it down to something that we understand:

```javascript
{
  title: "Avatar",
  score: 7.2,
  votes: 11800,
  year: 2009
}
```

If we look at our header line in CSV, these are the properties that are available:
```ruby
budget, genres, homepage, id, keywords, original_language, original_title,
overview, popularity, production_companies, production_countries, release_date,
revenue, runtime, spoken_languages, status, tagline, title, vote_average,
vote_count
```

We want to make sure that only the interesting properties will be parsed - The sole purpose of Big Data is to gather information. That means that you actively have to cut junk. Just by looking at the endless list of properties above, we can cut almost everything!

## Clean our movies

We want the title, score, votes, and year of each movie, right?

Right!

* The `title` properties is readily available.
* The `score` isn't available, but `vote_average` is.
* The `votes` isn't available, but `vote_count` is.
* The `year` isn't available, but a (string) of `release_date` is. Lets use that for now.

Lets say that we declare a function that converts a movie (the `rawMovieData` from PapaParse) into something that we want to work with.

Lets call the function `distillMovie` since we only use certain properties of the rawMovie, and don't use other properties.

The function that creates our small-but-useful movie object, should receive the rawMovie as input, and it should return a cleanMovie.

### A function to hold this logic

Step by step, we will build our function.

In javascript a function that is available with the name `distillMovie`, and that receives `rawMovieData` to work on, looks like this:

```javascript
var distillMovie = function (rawMovieData) {
  // To be done: The body of our function
}
```

We just declare a variable (distillMovie), and store a function in it. The function expects input, or an argument. That argument is available with the name rawMovieData.

Now, that rawMovieData is in some pretty PapaParse specific layout. It is an object, that has the property `data`. That data property is an array (with just 1 element), that holds the parsed movie. Let's first get to the actual rawMovie from our rawMovieData:

```javascript
var distillMovie = function (rawMovieData) {
  // From the rawMovieData, go to the data property,
  // and use the element on position 0 - the first element of the array, that is.
  var rawMovie = rawMovieData.data[0]
}
```

We want to have a `cleanMovie` object, right? Lets create a variable for it:

```javascript
var distillMovie = function (rawMovieData) {
  // From the rawMovieData, go to the data property,
  // and use the element on position 0 - the first element of the array, that is.
  var rawMovie = rawMovieData.data[0]

  // Declare a variable that holds an object for our cleanMovie
  var cleanMovie = {}
}
```

That cleanMovie is just an empty object. Time to assign the 4 properties to it:

```javascript
var distillMovie = function (rawMovieData) {
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
}
```

Yes, almost there; we must do something with the clean movie, so we can look at it.

I am thinking on logging it to the console. You too? Nice!

At the very end of the function body, slip in a `console.log` statement:

```javascript
var distillMovie = function (rawMovieData) {
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
  console.log(cleanMovie)
}
```

It would be nice to just test this in the console, but I want to have that function in the movies.js file, so we can always use it.

Copy the **complete function** from `var distillMovie` till the last `}` on the into the bottom of the movies.js file.

If you have the function in there, time to use it in the configuration of PapaParse.

### Use the function for parsing movies

Time to use the function from our parser. Remember the configuration object from before? Let's make 3 changes to it.
1. When it is complete - it should just log that it is done
2. Let's preview 10 movies, 1 is just not enough
3. Every movie (or `step` in the conversion) should be handled by our nice function.
    We do that by adding a `step` property, with the value of the name of our function.

Copy the updated configuration from below to the bottom of movies.js

```javascript
var papaParseConfiguration = {
	header: true,
  dynamicTyping: true,
  download: true,
  preview: 10,                    // Changed
  complete: function(results) {
    console.log("I am done!");    // Changed
  },
  step: distillMovie              // This is new here
}
```

With the function and the configuration set up correctly, lets parse some movies, shall we?

### Run our parser

The hardest part is done. Time to 'just' parse the movies.
In movies.js, there is a part where we can interact with the page, it currently looks like this:
```js
document.onreadystatechange = function () {
  if (document.readyState == 'interactive') {
    mostPopularByGenre = document.getElementById('most-popular-by-genre')
    mostPopularByGenre.innerText = movieGenres

  }
}
```

Below the line that sets the `innerText` to `movieGenres`, add the line to parse your movies. After that, it looks like below:

```js
document.onreadystatechange = function () {
  if (document.readyState == 'interactive') {
    mostPopularByGenre = document.getElementById('most-popular-by-genre')
    mostPopularByGenre.innerText = movieGenres

    Papa.parse('http://localhost:3000/tmdb_5000_movies.csv', papaParseConfiguration)
  }
}
```

# Exercises

After finishing each individual exercise, reload the page in your browser and inspect the console.

> ✍️  **1:** Add the `distillMovie` function to movies.js
>
> ✍️  **2:** Add the (updated) configuration for PapaParse to Movies.js
>
> ✍️  **3:** Add the papa.parse call in the correct place in your movies.js
>
> ✍️  **Optional:** Remove all the `console.log` statements from previous exercises.
