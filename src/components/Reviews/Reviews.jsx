import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../service/moviesAPI";
import { Photo, Item, User, Name, Text } from './Reviews.styled';

const Reviews = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);

useEffect(() => {
    getReviewById(movieId).then(response => {
    const movieReview = response.map(({author_details, content, created_at}) => {
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
    }) 
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
</>
);
};

export default Reviews;