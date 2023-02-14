import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getCreditsById } from "../../service/moviesAPI";
import { List, Photo, Item, Name, Character, Popularity, Caption } from './Cast.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


const Cast = ({ state }) => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState("");

useEffect(() => {
    setStatus("LOADING");
    try { getCreditsById(movieId).then( response => {
            const movieCast = response.map(({character, name, popularity, profile_path, state}) => {
                return {
                    realId: nanoid(),
                    character: character === "" ? "No information" : character,
                    name: name === "" ? "No information" : name,
                    popularity: popularity === "" ? "No information" : popularity,
                    profile_path: (profile_path === null || profile_path === "") ? `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg` : `https://image.tmdb.org/t/p/original/${profile_path}`
                }
            })
            setCast([...movieCast]);
            setStatus("OK");
        })  
    } catch (error) {
        setStatus("ERROR");
    }
}, [movieId]);

return (
<>
<h2>Cast</h2>
    <List>
        {cast.map((actor) => (
        <Item key={actor.realId}>
            <Character><Caption>Character:</Caption>{actor.character}</Character>
            <Name><Caption>Name:</Caption>{actor.name}</Name>
            <Popularity><Caption>Popularity:</Caption>{actor.popularity}</Popularity>
            <Photo src={actor.profile_path} alt="actor"/>
        </Item>
        ))}
    </List>
    {(cast.length === 0) &&
        <p>No information about the cast.</p>}
    {status === "LOADING" &&  <Loader />}
</>
);
};

Cast.propTypes = {
    state: PropTypes.object,
};

export default Cast;