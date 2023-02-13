import { Link } from "react-router-dom";
import { Photo, Item, Name } from './TrendingList.styled';

const TrendingList = ( { id, title, poster_path, state } ) => {
    return (
    <Item>
        <Link to={`movies/${id}`} state={state}>
            <Photo src={poster_path} alt="film poster" />
            <Name>{title}</Name>
        </Link>
    </Item>
);
}

export default TrendingList;