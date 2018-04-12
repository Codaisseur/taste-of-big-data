# Display the top 10

Glad we have the sorting and slicing done... Lets display it.

## What does it look like for one movie?

To display a movie, we should create an element in the page where we want to display our movie, and fill it with all the contents we need.

Lets consider the movie called [Tomorrowland](https://www.themoviedb.org/movie/158852-tomorrowland?language=en)

The javascript object looks like this:
```js
{ title: "Tomorrowland", score: 6.2, votes: 2846, year: "2015-05-19" }
```

In HTML, it the contents for that movie should look like this:

```html
<div class="movie">
  <span class="movie title">Tomorrowland</span>
  <span class="movie year">2015-05-19</span>
  <span class="movie score">6.2</span>
  <span class="movie votes">2846</span>
</div>
```

### Generate an HTML element

If you create this HTML snippet in javascript, you can attach it to a parent element on your page, making it visible for your end user.
In the app, a place called 'Most popular movies' is waiting to be filled with sensible info.

Let's create a function that creates a div, with the four needed spans inside it. It should receive a `movie` object as input:

```js
var displayMovie = function(movie) {
  movieElement = document.createElement('div')
  movieElement.className = 'movie'

  movieElement.innerHTML = `
    <span class="movie title">${movie.title}</span>
    <span class="movie year ">${movie.year} </span>
    <span class="movie score">${movie.score}</span>
    <span class="movie votes">${movie.votes}</span>
  `

  return movieElement
}
```

If you have a movie object, you could use the function to create a movie element like so:

```js
// movie looks like this:
// { title: "Tomorrowland", score: 6.2, votes: 2846, year: "2015-05-19" }

var elementForTomorrowland = movieElement(movie)
console.log(elementForTomorrowland)
```
This will log in your console:
```html
<div class="movie">
  <span class="movie title">Tomorrowland</span>
  <span class="movie year ">2015-05-19 </span>
  <span class="movie score">6.2</span>
  <span class="movie votes">2846</span>
</div>
```
Exactly what we need, but not in the right place! It should be inside the HTML, not in the console. Lets make a small change.

> 🙄 Remember that I told you that strings with back ticks are powerful?
>
> In the above code you see things like `${movie.title}`. That is a powerful way of *printing* the javascript value of `movie.title` *inside* the string.
>
> Also, with strings in back ticks you can let them span over multiple lines. That is very good for readability.

## Display the top 10

So we have a function that can give us a top 10, and we have a function that can generate html for movies. Time to stitch 'em together.

It would be nice if there was a way that we could run the `displayMovie` function for each element in our array. Lucky for us, Javascript provides!

Every array has a `forEach` function. That function allows you to run some code for every element in your array, and it is guaranteed to run in the correct order (which is kinda important for a top 10 )

From our **most popular** movies collection, we want - **for each** movie it contains - have the functionality that it **displays** the **movie**.

Combining the bold words in Javascript, it gives us this code:

```js
// lets assume we have this 'mostPopular' collection
mostPopular.forEach( function(movie) {
  var movieHTML = displayMovie(movie)
  mostPopularMovies.appendChild(movieHTML)
})
```

> 🤓 Lets **break it down**.
>
> The `forEach` allows you to run a function. It calls that function with each consecutive element in the array.
>
> In the above example, Javascript calls the displayMovie function 10 times; once per movie, the result is appended to the screen.

If you want to run this in the console, here is a snippet that could work:
```js
var moviesSortedOnScore = sortMovies(allMovies)
var mostPopular = topTen(moviesSortedOnScore)
var mostPopularMovies = document.getElementById('most-popular')

mostPopular.forEach( function(movie) {
  var movieHTML = displayMovie(movie)
  mostPopularMovies.appendChild(movieHTML)
})
```

Convert that snippet into a function. We want to call it as soon as it is time. Immediately when PapaParse is done with the conversion is that time.

Putting it in a function also allows us to keep that code nice contained place and give it a good name!

Struggling to come up with a name? What about `displayMoviesAfterParsing`? It might not be the best, but it expresses intent.

Place this function in your movies.js file.

```js
var displayMoviesAfterParsing = function () {
  var moviesSortedOnScore = sortMovies(allMovies)
  var mostPopular = topTen(moviesSortedOnScore)
  var mostPopularMovies = document.getElementById('most-popular')

  mostPopular.forEach( function(movie) {
    var movieHTML = displayMovie(movie)
    mostPopularMovies.appendChild(movieHTML)
  })
}
```

And we want to run this code immediately on finishing parsing, right?

Lets add it to the `papaParseConfiguration`:

```js
var papaParseConfiguration = {
  // Keep this config at the bottom of this file!
  header: true,
  dynamicTyping: true,
  download: true,
  step: distillMovie,
  complete: displayMoviesAfterParsing,
}
```
Reload and behold the beauty!

# Exercises

1. ✍️ **Create HTML**: declare the `displayMovie` function in your movies.js
1. ✍️ **Display the Top 10**: Run the code in your console, so the top 10 shows up in your page
