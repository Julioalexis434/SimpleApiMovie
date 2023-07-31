import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  async function getData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=ef7a8c660048942d8397842f0ec94e98&page=1`
    );
    const data = await response.json();

    setMovieList(data.results);
  }
  return (
    <>
      <div className="movie_list">
        <h2 className = 'titleList'>{(type ? type : "POPULAR").toLocaleUpperCase()}</h2>
        <div className="list_cards">
          {movieList.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
