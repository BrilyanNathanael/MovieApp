import { FETCH_LIST_MOVIES_FAILURE, FETCH_LIST_MOVIES_REQUEST, FETCH_LIST_MOVIES_SUCCESS } from "./listMovieTypes"

const initialState = {
    loading: false,
    movies: [],
    error: '',
}

const listMovieReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_LIST_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_LIST_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: ''
            }
        case FETCH_LIST_MOVIES_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default listMovieReducer