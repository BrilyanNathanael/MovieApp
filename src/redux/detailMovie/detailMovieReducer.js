import { FETCH_MOVIE_DETAIL_REQUEST, FETCH_MOVIE_DETAIL_SUCCESS, FETCH_MOVIE_DETAIL_FAILURE } from './detailMovieTypes'

const initialState = {
    loading: false,
    movie: {},
    error: ''
}

const detailMovieReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIE_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_MOVIE_DETAIL_SUCCESS:
            return {
                loading: false,
                movie: action.payload
            }
        case FETCH_MOVIE_DETAIL_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default detailMovieReducer