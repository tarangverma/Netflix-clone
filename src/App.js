import Row from "./Row";
import './App.css';
import requests from "./requests";
import Banner from "./Banner";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
     {/* NavBar */}
     <NavBar />
     {/* Banner */}
     <Banner />
     <Row title="Netflix Originals" fetchUrl={requests.NetflixOriginals}
          isLargeRow
      />
     <Row title="Trending Now" fetchUrl={requests.Trending} />
     <Row title="Top Rated" fetchUrl={requests.TopRated} />
     <Row title="Action Movies" fetchUrl={requests.ActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.Comedyovies} />
     <Row title="Horror Movies" fetchUrl={requests.HorrorMovies} />
     <Row title="Romantic Movies" fetchUrl={requests.RomanticMovies} />
     <Row title="Documentaries" fetchUrl={requests.Documentries} />
     
    </div>
  );
}

export default App;


//  021dc5145788f34457619fa458bb8423 api

// https://api.themoviedb.org/3/movie/550?api_key=021dc5145788f34457619fa458bb8423 examplenpx create react aap