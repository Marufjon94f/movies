var elMovies = $_(".movies");
var elMoviesTemplate = $_("#movies-card-template").content;
var elMovieForm = $_(".js-movie-form");
var elMovieSearchInput = $_(".js-movie-search");
var elMovieResult = $_(".result-title")

elMovies.innerHTML = "";

var createMoviesElement = function (movie) {
  var elNewMovie = elMoviesTemplate.cloneNode(true);

  elNewMovie.querySelector(".movies_img").src =
    "https:upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg";
  elNewMovie.querySelector(".movie-title").textContent = movie.Title;
  elNewMovie.querySelector(".movie-type").textContent = movie.Categories.split("|").join(", ");
  elNewMovie.querySelector(".movie-date").textContent = movie.movie_year;
  

  return elNewMovie;
};

movies.forEach(function (movie) {
  elMovies.appendChild(createMoviesElement(movie));
});

// Normalizing ***MOVIES***
var normalizedMovies = [];

for (var i = 0; i < movies.length; i++){
  normalizedMovies.push({
    id: i +1,
    title: movies[i].Title.toString(),
    year: movies[i].movie_year,
    categories:movies[i].Categories.split("|"),
    summary: movies[i].summary,
    imdbId:movies[i].imdb_rating,
  });
}

elMovieForm.addEventListener("submit", function (evt){
  evt.preventDefault();
  
  var inputMovie = elMovieSearchInput.value.trim();
  
  var searchQuery = new RegExp(inputMovie, "gi");

  var searchResults = [];
  // var searchResults = movies.filter(function(movie){
  //   return movie.Title = match(searchQuery);
  // });

  // elMovieResult.textContent = searchResults[0].Title;

  normalizedMovies.forEach(function(movie){
    if (movie.title.match(searchQuery)) {
      searchResults.push(movie);
      elMovieResult.textContent = searchResults[0].title, year, categories;
    }
  });
});