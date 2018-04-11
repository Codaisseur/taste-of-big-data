let movieGenres = ['Action', 'Adventure', 'Fantasy', 'Science Fiction']

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

  // log the clean movie in our console:
  console.log(cleanMovie)
}

var papaParseConfiguration = {
  // Keep this config at the bottom of this file!
  header: true,
  dynamicTyping: true,
  download: true,
  preview: 10,
  step: distillMovie
}
