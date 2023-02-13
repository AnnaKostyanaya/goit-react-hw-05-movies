import { useState, useEffect } from 'react';
import { getTrends } from "../../service/moviesAPI";
import TrendingList from "../TrendingList/TrendingList";
import { Button } from "../Button/Button";
import { nanoid } from 'nanoid'
import { List, Container } from './Home.styled';
import { useLocation } from "react-router-dom";

const Home = () => {
const [movies, setMovies] = useState([]);
const [pageNumber, setPageNumber] = useState(1);

const location = useLocation();
    
useEffect(() => {
try { getTrends(pageNumber).then( resp => {
    const moviesTrending = resp.map(({id, title, poster_path}) => {
        return {realId: nanoid(), id, title, poster_path: `https://image.tmdb.org/t/p/original/${poster_path}`};
    }
    )
    setMovies([...movies, ...moviesTrending]);
    }) 
} catch (error) {
    console.log(error);
}
}, [pageNumber, movies]);

const handleIncrement = () => {
    setPageNumber(PrevNumber => PrevNumber + 1);
}

return (
    <Container>
        <h1>Trending today:</h1>
        <List>
            {movies.map(({realId, id, title, poster_path}) => (
                <TrendingList key={realId} id={id} title={title} poster_path={poster_path} state={{ from: location }}/>
            ))}
        </List>
        {(movies.length > 0) &&
        <Button text={"Load more"} type="button" onClick={handleIncrement} />}
    </Container>
);
};

export default Home;