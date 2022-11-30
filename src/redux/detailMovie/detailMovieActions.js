import axios from 'axios'
import { FETCH_MOVIE_DETAIL_REQUEST, FETCH_MOVIE_DETAIL_SUCCESS, FETCH_MOVIE_DETAIL_FAILURE } from './detailMovieTypes'

export const fetchMovieDetailRequest = () => {
    return {
        type: FETCH_MOVIE_DETAIL_REQUEST,
    }
}

export const fetchMovieDetailSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_DETAIL_SUCCESS,
        payload: movie
    }
}

export const fetchMovieDetailFailure = (error) => {
    return {
        type: FETCH_MOVIE_DETAIL_FAILURE,
        payload: error
    }
}

export const fetchMovieDetail = (id) => {
    return (dispatch) => {
        dispatch(fetchMovieDetailRequest())
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then(response => {
            const movie = response.data
            dispatch(fetchMovieDetailSuccess(movie))
        }).catch(error => {
            const errorMsg = error
            dispatch(fetchMovieDetailFailure(error))
        })
    }
}