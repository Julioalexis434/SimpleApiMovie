import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

// importando react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import MovieList from '../../movieList/MovieList'
const Home = () => {
  const [movie, setMovie] = useState([]);

  async function GetApi() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ef7a8c660048942d8397842f0ec94e98"
    );
    const data = await response.json();
    setMovie(data.results.slice(0, 5));
  }

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <div className="poster">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={500}
      >
        {movie.map((item, index) => (
          <div key={index}>
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt=""
              />
            </div>

            <div className="posterImage_overlay">
              <div className="posterImage_title">{item.original_title}</div>
              <div className="container_description">
                <div className="release_date">{item.release_date}</div>
                <div className="description">{item.overview.slice(0, 190) + '...'}</div>
              </div>

              <Link to={`/movie/${item.id}`} className="poster_buttom">
                <button>Detalles</button>
              </Link>
            </div>

          </div>
        ))}
      </Carousel>

<MovieList/>
    </div>
  );
};

export default Home;
