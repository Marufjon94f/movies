var elMovies = $_(".movies");
var elMoviesTemplate = $_("#movies-card-template").content;
var elMovieForm = $_(".js-movie-form");
var elMovieSearchInput = $_(".js-movie-search");
var elMovieResult = $_(".result-title")

elMovies.innerHTML = "";

var sliceMovie = movies.slice(0,100);

// Normalizing ***MOVIES***
var normalizedMovies = [];

for (var i = 0; i < sliceMovie.length; i++){
  normalizedMovies.push({
    id: i +1,
    title: movies[i].Title.toString(),
    year: movies[i].movie_year,
    categories:movies[i].Categories.split("|"),
    summary: movies[i].summary,
    imdbId:movies[i].imdb_rating,
  });
}
console.log(normalizedMovies);

var createMoviesElement = function (movie) {
  var elNewMovie = elMoviesTemplate.cloneNode(true);
 
  
  elNewMovie.querySelector(".movies_img").src =
    "https:upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg";
  elNewMovie.querySelector(".movie-title").textContent = movie.title;
  elNewMovie.querySelector(".movie-type").textContent = movie.categories.join(", ");
  elNewMovie.querySelector(".movie-date").textContent = movie.year;
  
  
  

  return elNewMovie;
};

normalizedMovies.forEach(function (movie) {
  elMovies.appendChild(createMoviesElement(movie));
});




elMovieForm.addEventListener("submit", function (evt){
  evt.preventDefault();
  
  var inputMovie = elMovieSearchInput.value.trim();
  
  var searchQuery = new RegExp(inputMovie, "gi");

  var searchResults = [];
  // elMovieForm.filter(movie => movie.Title.match(searchQuery))
 
  // console.log(searchResults); 
  // createMoviesElement(searchResults)
  
  // var searchResults = movies.filter(function(movie){
  //   return movie.Title = match(searchQuery);
  // });
  // createMoviesElement(searchResults);
 console.log(searchQuery);
  normalizedMovies.forEach(function(movie){
    if (movie.title.match(searchQuery)) {
      searchResults.push(movie);
    }
  });

  console.log(searchResults);
  elMovies.innerHTML = "";
  searchResults.forEach(function (movie) {
    elMovies.appendChild(createMoviesElement(movie));
});
});
