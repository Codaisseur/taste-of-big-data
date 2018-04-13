var allMovies = []
var movieGenres = ['Action', 'Adventure', 'Fantasy', 'Science Fiction']

document.onreadystatechange = function () {
  if (document.readyState == 'interactive') {
    mostPopularByGenre = document.getElementById('most-popular-by-genre')
    mostPopularByGenre.innerText = movieGenres

    Papa.parse('http://localhost:3000/tmdb_5000_movies.csv', papaParseConfiguration)
  }
}

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

  // store (or push) our clean movie into our allMovies collection:
  allMovies.push(cleanMovie)
}

var sortMovies = function (movies) {
  // When using sort in Javasript; you need to work on a clone of the data.
  var unsorted = movies.slice() // the variable unsorted is a clone of the movies variable

  return unsorted.sort(function (movieA, movieB) {
    return movieB.score - movieA.score
  })
}

var topTen = function(movies) {
  return movies.slice(0,10)
}

var papaParseConfiguration = {
  // Keep this config at the bottom of this file!
  header: true,
  dynamicTyping: true,
  download: true,
  step: distillMovie
}
