import React from "react";
import MovieList from "./MovieList";
import "./App.css";
import moviesData from "./moviesData.json";

function App() {
  return (
    <div className="App">
      <h1>MOVIES-LIST</h1>
      <MovieList movies={moviesData.movies} />
    </div>
  );
}

export default App;
