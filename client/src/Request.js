const key = "9cae49abc42c5040548188e56eea926a";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;

//const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2FlNDlhYmM0MmM1MDQwNTQ4MTg4ZTU2ZWVhOTI2YSIsInN1YiI6IjY0OTk1YmIyYmJkMGIwMDBhZGYxNGE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ae76DGvVsh64kMCI6cyN0slonY11CDgHCtVVccHJaVY'
