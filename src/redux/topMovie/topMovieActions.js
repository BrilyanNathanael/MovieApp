import { FETCH_TOP_MOVIE_FAILURE, FETCH_TOP_MOVIE_REQUEST, FETCH_TOP_MOVIE_SUCCESS } from "./topMovieTypes"
import axios from 'axios'

export const fetchTopMovieRequest = () => {
    return {
        type: FETCH_TOP_MOVIE_REQUEST
    }
}

export const fetchTopMovieSuccess = (movie) => {
    return {
        type: FETCH_TOP_MOVIE_SUCCESS,
        payload: movie
    }
}

export const fetchTopMovieFailure = (error) => {
    return {
        type: FETCH_TOP_MOVIE_FAILURE,
        payload: error
    }
}

export const fetchTopMovie = () => {
    return (dispatch) => {
        dispatch(fetchTopMovieRequest())
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/top_rated`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
        .then(response => {
            const movie = response.data.results[0]
            dispatch(fetchTopMovieSuccess(movie))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchTopMovieFailure(errorMsg))
        })
    }
}
