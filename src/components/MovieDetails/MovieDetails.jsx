import { useParams, Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { getMovieById } from "../../service/moviesAPI";
import { Poster, Text, Backward, Container, List, Item } from './MovieDetails.styled';

const MovieDetails = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [overview, setOverview] = useState('');
    const [poster, setPoster] = useState('');
    const [genres, setGenres] = useState([]);
    const [score, setScore] = useState('');
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

useEffect(() => {
try { getMovieById(movieId).then(response => {
    setTitle(response.title)
    setDate(response.release_date)
    setOverview(response.overview)
    if (response.poster_path === null) {
        setPoster(`https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`)
    } else {
        setPoster(`https://image.tmdb.org/t/p/original/${response.poster_path}`)
    }
    setGenres(response.genres)
    setScore(response.vote_average)
    }) 
    } catch (error) {
        console.log(error);
    }
}, []);

return (
<Container>
    <Backward to={backLinkHref}>Back to movies</Backward>
    <h2>{title}</h2>
    <p><Text>Date:</Text> {date}</p>  
    <p><Text>User Score:</Text> {score}</p>
    <p><Text>Overview:</Text> {overview}</p>     
    <Poster src={poster} alt="poster"/>
    <p><Text>Genres:</Text> {genres.map(genre => {
        return genre.name;
    }).join(", ")}</p> 

    <List>
        <Item>
            <Link to="cast">Read about a cast</Link>
        </Item>
        <Item>
            <Link to="reviews">Get to know the reviews</Link>
        </Item>
    </List>
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
    </Suspense>
</Container>
);
};

export default MovieDetails;