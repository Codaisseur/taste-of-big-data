# Display the genres

Time to display the top-10 list per genre.

All the tools we need are here:
* The app can sort movies on score
* The app can convert a long list into a top 10
* There is a way to put the top 10 on the screen.

We need to just use what we have (with some minor changes)

First, lets create a function that is responsible for all the above steps:

```js
var displayMoviesByGenre = function(){
  // to be filled in this chapter
}
```

And of course, The app should use that function. At the end of the `displayMoviesAfterParsing`, make sure to call the new function:

Add this lime at the end of the body of that function:
```js
  displayMoviesByGenre()
```

In our just created function `displayMoviesByGenre`, the app should run the same actions for every genre.

Inside that function, lets write a `forEach` so we can run code for every genre-object.
```js
  genres.forEach(function(genre) {
    //
  })
```

But what should it do? Well:

1. Create a movie-styled HTML called `genreElement`
1. Display the name of the genre
1. Create a header-lime for movies
1. Filter on relevance, sort and top-10 the movies in the genre
1. Add the top-10 to the table
1. Add the genreElement to the page.

Just 6 steps. Lets set these as reminders in the forEach:
```js
  genres.forEach(function(genre) {
    // create genreElement

    // Create GenreElementHeader

    // Create a header-lime for movies

    // Filter on relevance, sort and top-10 the movies in the genre

    // Add the top-10 to the table

    // Add the genreElement to the page.

  })
```

## Create a genre-element

Under the reminder, add this code:
```js
    // Create a genre-element
    var genreElement = document.createElement('div')
    genreElement.className = 'movie-table'
```

Well, that was easy; first we create a `<div>`-element. On the next line we give it a class name, so it will be styled as our current top-10 table

## Display the name of the genre

In order to see the name of the genre, a heading, or `<h3>` element should be added to the genreElement.

Under the reminder, add this code:
```js
    // Display the name of the genre
    var genreHeading = document.createElement('h3')
    genreHeading.innerText = genre.name
    genreElement.appendChild(genreHeading)
```
That was straightforward.

First we create a h3 element (a heading of level 3 - think MS Word).

The inner text of that heading is the name of our genre.

Lastly the genreHeading is added to the genreElement

If you reload the page, you see no changes. We cant have that. Lets work on the last part first:

## Add the genreElement to the page

At the end of the `forEach` loop, the element must be added to the page. In the page there is an element with the id ''. Lets add it into there.
Under the **correct** reminder (the last one that is), add this code:

```js
    // add the genreElement to the page
    document.getElementById('most-popular-by-genre').appendChild(genreElement)
```
Reload your app. Do you see a nice amount of genre names? NICE!

## Create a header-lime for movies
Our movies should be displayed in a table-like structure. It needs a header line, with 'title, year, score and votes, so you users know what they are looking at.

Under the reminder, add this code:
```js
    // Create a header-lime for movies
    var headerLine = document.createElement('div')
    headerLine.className='movie'
    headerLine.innerHTML = `
      <span class="header-line title">title</span>
      <span class="header-line year">year</span>
      <span class="header-line score">score</span>
      <span class="header-line votes">votes</span>
    `
    genreElement.appendChild(headerLine)
```
If all went well, that code is added above the part that adds the genreElement to the page. We took a shortcut before, because we wanted our changes to be visible in the browser. We still order the code according to our 6 step plan.

A small explanation:

* A `headerLine` div element is created.
* Its class name is set to 'movie', so it will receive proper styling.
* Inside that div, there are four elements for all needed headers.
* The `headerLine` is added to the genreElement.

Make sure to reload the page to see progress!

## Filter on relevance, sort and top-10 the movies in the genre

Oh wow. This will reuse some code of before. Lets see if the code is up to it!

In the first 3 lines of the  `displayMoviesAfterParsing`, that is exactly what is happening. Lets reuse (almost copy-past) that:

Under the reminder, add this code:
```js
    // Filter on relevance, sort and top-10 the movies in the genre
    var relevantMovies = genre.movies.filter(enoughVotes)
    var moviesSortedOnScore = sortMovies(relevantMovies)
    var popularForGenre = topTen(moviesSortedOnScore)

    console.log(popularForGenre)
```

There are just 2 differences in this code:
1. in the original code, the first line used the movies from the `allMovies` collection. Now, we use the movies that belong to this genre.
1. the popular movies we called `mostPopular`. Since that does not make sense in our context, it is renamed to `popularForGenre`

Because we don't add anything to the screen here, the `popularForGenre` movies are logged to the console.
Later we should remove this.

Since all this code is already explained before, it isn't explained here.

And now the *pièce de résistance*, time to display our per-genre top 10.

## Add the top-10 to the table

Well, that is ridiculously easy; That can also be almost-verbatim stolen.
```js
    // Add the top-10 to the table
    popularForGenre.forEach( function(movie) {
      var movieHTML = displayMovie(movie)
      genreElement.appendChild(movieHTML)
    })
```
For all popularForGenre movies

# Exercise
1. ✍️  **The grand finale** Show a top 10 per genre, following the steps from above.
1. ✍️  **Too few results?** Some genres might have too few results, based on the number of votes a movie should have. If your recommended movie-lists are a bit short, try lowering the number.
  1. On the other hand, if you see junk-movies in there, try increasing that number. Play with it - and accept it involves gut feeling!
