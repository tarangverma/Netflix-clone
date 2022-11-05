const API_KEY = ""

const requests= {
    Trending: `/trending/all/day?api_key=${API_KEY}`,
    NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    Comedyovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanticMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    Documentries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`

}
export default requests;