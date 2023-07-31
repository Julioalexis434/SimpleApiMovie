import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
const MovieDetail = () => {
  const [movieDetail, setmovie] = useState();
  const { id } = useParams();

  async function getData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ef7a8c660048942d8397842f0ec94e98&page=1`
    );
    const data = await response.json();
    setmovie(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="imagenes">
          {movieDetail ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
              className="imagenPath"
            ></img>
          ) : (
            ""
          )}

          {movieDetail ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
              className="imagenPoster"
            ></img>
          ) : (
            ""
          )}
        </div>

        <div className="overview">
          {movieDetail ? movieDetail.overview : ""}
        </div>

       
      </div>
      <div className="Container_info">
        <div>

        {movieDetail ? movieDetail.genres.map((item)=>(
          <span className="nameGenres">{item.name}</span>
        )) : ""}
        </div>

<h3>{movieDetail ? movieDetail.release_date : ''}</h3>
      </div>
      
    </>
  );
};

export default MovieDetail;
