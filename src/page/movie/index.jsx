import React from "react";
import ChairList from "./ChairList";
import OrderDetail from "./OrderDetail";
import MovieContext from "../../context/moviecontext";

const Movie = () => {
  return (
    <MovieContext>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ChairList />
        <OrderDetail />
        <div></div>
      </div>
    </MovieContext>
  );
};

export default Movie;
