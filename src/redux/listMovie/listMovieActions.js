import axios from 'axios'
import { FETCH_LIST_MOVIES_FAILURE, FETCH_LIST_MOVIES_REQUEST, FETCH_LIST_MOVIES_SUCCESS } from './listMovieTypes'

export const fetchListMoviesRequest = () => {
    return {
        type: FETCH_LIST_MOVIES_REQUEST
    }
}

export const fetchListMoviesSuccess = (movies) => {
    return {
        type: FETCH_LIST_MOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchListMoviesFailure = (error) => {
    return {
        type: FETCH_LIST_MOVIES_FAILURE,
        payload: error
    }
}

export const fetchListMovies = () => {
    return (dispatch) => {
        dispatch(fetchListMoviesRequest())
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
        .then(response => {
            const movies = response.data.results
            dispatch(fetchListMoviesSuccess(movies))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchListMoviesFailure(errorMsg))
        })
    }
}