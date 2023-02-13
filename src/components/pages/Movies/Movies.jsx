import { Link, useLocation } from "react-router-dom";
import {useSearchParams} from "react-router-dom";
import { useState, useEffect} from "react";
import { Searchcomponent, SearchForm, SearchFormButtonLabel, SearchFormButton, SearchFormInput, List, Photo, Name, Item, Error } from './Movies.styled';
import { FaSearch } from 'react-icons/fa';
import { Button } from "../../Button/Button";
import PropTypes from 'prop-types';

const Movies = ({ onSubmit, onClick, data, pageNumber, lastPage }) => {
const location = useLocation();

const [movies, setMovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const search = searchParams.get("search");

useEffect(() => {
    setMovies([...data]);

    return () => {
        setMovies([]);
    };
}, [data]);

const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
        alert('Enter a search word.');
        return;
    }
    onSubmit(search);
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
                name="search"
                value={search || ''}
                onChange={event => setSearchParams({ search: event.target.value.toLowerCase() })}
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
    {((movies.length > 0) && (pageNumber < lastPage)) &&
        <Button text={"Load more"} type="button" onClick={onClick} />}
    {(pageNumber === lastPage && movies.length > 0) &&
        <Error>You've reached the end of search results.</Error>}
</>
);
}

Movies.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    pageNumber: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            realId: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
};

export default Movies;