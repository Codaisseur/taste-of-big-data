var allMovies = []
let movieGenres = ['Action', 'Adventure', 'Fantasy', 'Science Fiction']

document.onreadystatechange = function () {
  if (document.readyState == 'interactive') {
    mostPopularByGenre = document.getElementById('most-popular-by-genre')
    mostPopularByGenre.innerText = movieGenres

    Papa.parse('http://localhost:3000/tmdb_5000_movies.csv', papaParseConfiguration)
  }
}

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

var displayMoviesAfterParsing = function () {
  var relevantMovies = allMovies.filter(enoughVotes)
  var moviesSortedOnScore = sortMovies(relevantMovies)
  var mostPopular = topTen(moviesSortedOnScore)
  var mostPopularMovies = document.getElementById('most-popular')

  mostPopular.forEach( function(movie) {
    var movieHTML = displayMovie(movie)
    mostPopularMovies.appendChild(movieHTML)
  })
}

var enoughVotes = function (movie) {
  return movie.votes > 50
}

var sortMovies = function (movies) {
// make a clone of the incoming movies array
  var unsorted = movies.slice()

  return unsorted.sort(function (movieA, movieB) {
    return movieB.score - movieA.score
  })
}

var topTen = function(movies) {
  return movies.slice(0,10)
}

var displayMovie = function(movie) {
  movieElement = document.createElement('div')
  movieElement.className = 'movie'

  movieElement.innerHTML = `
    <span class="movie title">${movie.title}</span>
    <span class="movie year ">${movie.year} </span>
    <span class="movie score">${movie.score}</span>
    <span class="dismovie votes">${movie.votes}</span>
  `
  var mostPopularMovies = document.getElementById('most-popular')
  mostPopularMovies.appendChild(movieElement)
}

var papaParseConfiguration = {
  header: true,
  dynamicTyping: true,
  download: true,
  step: distillMovie,
  complete: displayMoviesAfterParsing,
}
