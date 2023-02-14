import { Link, useLocation } from "react-router-dom";
import {useSearchParams} from "react-router-dom";
import { useState, useEffect} from "react";
import { Searchcomponent, SearchForm, SearchFormButtonLabel, SearchFormButton, SearchFormInput, List, Photo, Name, Item, Error } from './Movies.styled';
import { FaSearch } from 'react-icons/fa';
import { Button } from "../../Button/Button";
import Loader from "../../Loader/Loader";
import { getMovieByKeyword } from "../../../service/moviesAPI";
import { nanoid } from 'nanoid';

const Movies = () => {

const location = useLocation();
const [movies, setMovies] = useState([]);
const [status, setStatus] = useState("");
const [searchParams, setSearchParams] = useSearchParams();
const search = searchParams.get("search");
const [pageNumber, setPageNumber] = useState(1);
const [pageTotal, setPageTotal] = useState(1);
const [searchWord, setSearchWord] = useState("");

useEffect(() => {
if (search === "") {
return;
} else {
const movie = getMovieByKeyword(search, pageNumber);
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
    setStatus("OK");
    }) 
} catch (error) {
    setStatus("ERROR");
} 
}
}, [search, pageNumber]);


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

const handleSubmit = event => {
    event.preventDefault();
    if (searchWord.trim() === '') {
        alert('Enter a search word.');
        return;
    }
    if (searchWord !== search) {
        setMovies([]);
        setSearchParams({ search: searchWord })
        setStatus("LOADING");
        setSearchWord("");
        } 
};


return (
<>
    <Searchcomponent>
        <SearchForm className="form" onSubmit={handleSubmit}>
            <SearchFormInput
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                name="searchWord"
                value={searchWord}
                onChange={event => setSearchWord(event.target.value.toLowerCase())}
            />
            <SearchFormButton type="submit" className="button">
                <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                <FaSearch width="48" height="48" />
            </SearchFormButton>
        </SearchForm>
    </Searchcomponent>
    <List>
        {movies.map(({realId, id, title, poster_path}) => (
            <Item key={realId}>
                <Link to={`${id}`} state={{ from: location }}>
                    <Photo src={poster_path} alt="film poster" />
                    <Name>{title}</Name>
                </Link>
            </Item>
        ))}
    </List>
    {((movies.length > 0) && (pageNumber < lastPageDef())) &&
        <Button text={"Load more"} type="button" onClick={handleIncrement} />}
    {(pageNumber === lastPageDef() && movies.length > 0) &&
        <Error>You've reached the end of search results.</Error>}
    {status === "LOADING" &&  <Loader />}
</>
);
}

export default Movies;