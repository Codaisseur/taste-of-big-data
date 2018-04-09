console.log("Greetings from movies.js")
movieGenres = ["Action", "Adventure", "Fantasy", "Science Fiction"]
console.log(movieGenres)

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    mostPopularByGenre = document.getElementById('most-popular-by-genre')
    mostPopularByGenre.innerHTML = movieGenres
  }
}
