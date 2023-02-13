import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCreditsById } from "../../service/moviesAPI";
import { List, Photo, Item, Name, Character, Popularity, Caption } from './Cast.styled';


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

useEffect(() => {
    try {
        getCreditsById(movieId).then( response => {
            const movieCast = response.map(({character, name, popularity, profile_path}) => {
                return {
                    character: character === "" ? "No information" : character,
                    name: name === "" ? "No information" : name,
                    popularity: popularity === "" ? "No information" : popularity,
                    profile_path: (profile_path === null || profile_path === "") ? `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg` : `https://image.tmdb.org/t/p/original/${profile_path}`
                }
            })
            setCast([...movieCast]);
        })  
    } catch (error) {
        console.log(error);
    }
}, [movieId]);

return (
<>
<h2>Cast</h2>
    <List>
        {cast.map((actor) => (
        <Item key={actor.name}>
            <Character><Caption>Character:</Caption>{actor.character}</Character>
            <Name><Caption>Name:</Caption>{actor.name}</Name>
            <Popularity><Caption>Popularity:</Caption>{actor.popularity}</Popularity>
            <Photo src={actor.profile_path} alt="actor"/>
        </Item>
        ))}
        {(cast.length === 0) &&
        <p>No information about the cast.</p>}
    </List>
</>
);
};

export default Cast;