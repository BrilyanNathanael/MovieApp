import axios from 'axios'
import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SEARCH_FAILURE, FETCH_MOVIES_SEARCH_REQUEST, FETCH_MOVIES_SEARCH_SUCCESS, FETCH_MOVIES_SUCCESS } from './movieTypes'

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}

export const fetchMoviesSearchRequest = (search) => {
    return {
        type: FETCH_MOVIES_SEARCH_REQUEST,
        search: search
    }
}

export const fetchMoviesSearchSuccess = (movies, search) => {
    return {
        type: FETCH_MOVIES_SEARCH_SUCCESS,
        payload: movies,
        search: search
    }
}

export const fetchMoviesSearchFailure = (error, search) => {
    return {
        type: FETCH_MOVIES_SEARCH_FAILURE,
        payload: error,
        search: search
    }
}

export const fetchMovieLatest = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest())
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/now_playing`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
        .then(response => {
            const movies = response.data.results
            dispatch(fetchMoviesSuccess(movies))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchMoviesFailure(errorMsg))
        })
    }
}

export const fetchMoviesPopular = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest())
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
        .then(response => {
            const movies = response.data.results
            dispatch(fetchMoviesSuccess(movies))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchMoviesFailure(errorMsg))
        })
    }
}

export const fetchMoviesSearch = (search) => {
    return (dispatch) => {
        dispatch(fetchMoviesSearchRequest(search))
        axios.get(`${process.env.REACT_APP_BASE_URL}/search/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY,
                query: search
            }
        })
        .then(response => {
            const movies = response.data.results
            dispatch(fetchMoviesSearchSuccess(movies, search))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchMoviesSearchFailure(errorMsg, search))
        })
    }
}