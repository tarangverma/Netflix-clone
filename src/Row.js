import React, { useEffect, useState } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url="https://image.tmdb.org/t/p/w500/";

function Row({title ,fetchUrl , isLargeRow }) {
const [movies, setMovies] = useState([]);
const [trailerUrl , setTrailerUrl] = useState("");
 
// a snippit of code which runs based on a specific condition/variables
useEffect(() => {

    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);

        
        return request;
        
    }
    fetchData();
}, [fetchUrl]); // with tis empty bracket[] we say it to run once when the row loads and not again and again.
 
    const opts = {
      height: "390",
      width: "690",
      playerVars: {
        origin: 'http://localhost:3000', 
        autoplay: 1
      },
    };
      
    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.Console.log(error));
      }

    } // https://youtu.be/5KZ3MKraNKY

  return (
    <div className='row'>
        {/* title */}
       <h2>{title}</h2>

       {/* row posters */}
       <div className='row_poster'>
        
        {movies.map(movie =>(
            <img
            key={movie.id}
            onClick={ () => handleClick(movie)}
             className={`row_posters ${isLargeRow && "row_posterLarge"}`}
            
             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    ))}
        {/* container  posters */}
    </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;