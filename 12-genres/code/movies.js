var allMovies = []
var genres = []

document.onreadystatechange = function () {
  if (document.readyState == 'interactive') {
    mostPopularByGenre = document.getElementById('most-popular-by-genre')

    Papa.parse('http://localhost:3000/tmdb_5000_movies.csv', papaParseConfiguration)
  }
}

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

var displayMoviesAfterParsing = function () {
  var relevantMovies = allMovies.filter(enoughVotes)
  var moviesSortedOnScore = sortMovies(relevantMovies)
  var mostPopular = topTen(moviesSortedOnScore)

  mostPopular.forEach(displayMovie)
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
  // preview: 5,
  step: distillMovie,
  complete: displayMoviesAfterParsing,
}
