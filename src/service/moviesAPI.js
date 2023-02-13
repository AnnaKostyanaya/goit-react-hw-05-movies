import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '48201fa6f91a1e64f8af04954a183bb3';

axios.defaults.baseURL = URL;

export const getTrends = async (pageNumber) => {
const response = await axios(`trending/movie/day`, {
params: {
    page: pageNumber,
    api_key: KEY,
},
});

return response.data.results;
};

export const getMovieById = async (movieId) => {
const response = await axios(`movie/${movieId}`, {
params: {
    query: movieId,
    api_key: KEY,
},
});

return response.data;
};

export const getMovieByKeyword = async (keyword, pageNumber) => {
    const response = await axios(`search/movie`, {
    params: {
        query: keyword,
        page: pageNumber,
        api_key: KEY,
    },
    });
    
    return response.data;
    };

export const getCreditsById = async (movieId) => {
    const response = await axios(`movie/${movieId}/credits`, {
    params: {
        query: movieId,
        api_key: KEY,
    },
    });
    
    return response.data.cast;
    };

export const getReviewById = async (movieId) => {
    const response = await axios(`/movie/${movieId}/reviews`, {
    params: {
        query: movieId,
        api_key: KEY,
    },
    });
    
    return response.data.results;
    };