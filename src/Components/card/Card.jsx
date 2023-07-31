import React, { useEffect, useState } from "react";
import "./card.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [isloadin, setIsloadin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloadin(false);
    }, 1500);
  });

  return (
    <>
      {isloadin ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} width={200} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${item.id}`}>
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt=""
              className="card_image"
            />

            <div className="overlay_card">
              <div>{item.original_title}</div>
                <div>{item.release_date}</div>
                <div>
                  {item.overview.slice(0, 100) + "..."}
                </div>
              </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
