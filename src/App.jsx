import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/pages/home/Home";
import MovieList from "./Components/movieList/MovieList";
import MovieDetail from "./Components/DetailMovie/MovieDetail";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route path="/movies/:type" element={<MovieList/>} />
          <Route path="/*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
