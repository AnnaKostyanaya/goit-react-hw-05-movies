import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getReviewById } from "../../service/moviesAPI";
import { Photo, Item, User, Name, Text } from './Reviews.styled';
import PropTypes from 'prop-types';

const Reviews = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    const [status, setStatus] = useState("");

useEffect(() => {
    setStatus("LOADING");
    try {  getReviewById(movieId).then(response => {
        const movieReview = response.map(({author_details, content, created_at, state}) => {
            if (author_details.avatar_path === null || (author_details.avatar_path).includes("/https")) {
                    author_details.avatar_path = "https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg";
                    return {author_details, content, created_at};
                } 
            else {
                author_details.avatar_path = `https://image.tmdb.org/t/p/original/${author_details.avatar_path}`;
                return {author_details, content, created_at};
            }
        }
        )
        setReview([...movieReview]);
        setStatus("OK");
        }) 
    } catch (error) {
        setStatus("ERROR");
    }
}, [movieId]);

return (
<>
    <h2>Review</h2>
    <ul>
        {review.map((review) => (
        <Item key={review.created_at}>
            <User>
                <Photo src={review.author_details.avatar_path} alt="user"/>
                <Name>{review.author_details.username}</Name>
            </User>
            <Text>{review.content} <span>Create at: {(new Date(review.created_at)).toDateString()}</span></Text>
        </Item>
        ))}
    </ul>
    {(review.length === 0) &&
    <p>There are no reviews.</p>}
    {status === "LOADING" &&  <Loader />}
</>
);
};

Reviews.propTypes = {
    state: PropTypes.object,
};

export default Reviews;