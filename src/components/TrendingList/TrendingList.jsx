import { Link } from "react-router-dom";
import { Photo, Item, Name } from './TrendingList.styled';
import PropTypes from 'prop-types';

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

TrendingList.propTypes = {
    state: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
};

export default TrendingList;