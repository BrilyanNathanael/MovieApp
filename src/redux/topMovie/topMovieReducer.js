import { FETCH_TOP_MOVIE_FAILURE, FETCH_TOP_MOVIE_REQUEST, FETCH_TOP_MOVIE_SUCCESS } from "./topMovieTypes"

const initialState = {
    loading: false,
    movie: {},
    error: '',
}

const topMovieReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TOP_MOVIE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_TOP_MOVIE_SUCCESS:
            return {
                loading: false,
                movie: action.payload,
                error: ''
            }
        case FETCH_TOP_MOVIE_FAILURE:
            return {
                loading: false,
                movie: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default topMovieReducer