import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieByKeyword } from "../../service/moviesAPI";
import { nanoid } from 'nanoid';

const SharedLayout = lazy(() => import("../SharedLayout/SharedLayout"));
const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export const App = () => {

const [movies, setMovies] = useState([]);
const [pageNumber, setPageNumber] = useState(1);
const [pageTotal, setPageTotal] = useState(1);
const [searchWord, setSearchWord] = useState("");

useEffect(() => {
  if (searchWord === "") {
    return;
  } else {
    const movie = getMovieByKeyword(searchWord, pageNumber);
    try { movie.then( resp => { 
      setPageTotal(resp.total_results);
      const newMovie = resp.results.map(({id, title, poster_path}) => {
      if (poster_path === null) {
        return {realId: nanoid(), id, title, poster_path: `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`};
      } else {  
        return {realId: nanoid(), id, title, poster_path: `https://image.tmdb.org/t/p/original/${poster_path}`};
      }
      }
      )
      setMovies(prevState => [...prevState, ...newMovie]);
      }) 
    } catch (error) {
      console.log(error);
    } 
  }
}, [searchWord, pageNumber]);

const formSubmitHandler = (keyWord) => {
  if (searchWord !== keyWord) {
    setSearchWord(keyWord);
    setMovies([]);
    } 
}

const handleIncrement = () => {
  setPageNumber(PrevNumber => PrevNumber + 1);
}

const lastPageDef = () => {
  let lastPage = Number(pageTotal % 12);
  if (lastPage === 0) {
      return lastPage = Number(pageTotal / 12);
  } else {
      return lastPage = Number.parseInt(pageTotal / 12) + 1;
  }
}  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies onSubmit={formSubmitHandler} onClick={handleIncrement} data={movies} pageNumber={pageNumber} lastPage={lastPageDef()}/>} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
