import { Card, Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import { CardMovie } from "./components/CardMovie";
import { MovieList } from "./components/MovieList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  //get all movies
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/person/popular?api_key=4bd2d6f8b72b5d4d6711364476b9c6d8&language=ar"
    );
    setMovies(res.data.results);
  };
  useEffect(() => {
    getAllMovies();
    console.log(movies);
  }, []);
  //search
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4bd2d6f8b72b5d4d6711364476b9c6d8&query=${word}&language=ar`
      );
      setMovies(res.data.results);
    }
  };

  ///pagination
  const getPagination = async (num) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4bd2d6f8b72b5d4d6711364476b9c6d8&language=ar&page=${num}`
    );
    setMovies(res.data.results);
  };
  return (
    <div>
      <NavBar search={search}></NavBar>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  getPagination={getPagination}
                ></MovieList>
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
