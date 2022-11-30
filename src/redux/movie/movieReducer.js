import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SEARCH_FAILURE, FETCH_MOVIES_SEARCH_REQUEST, FETCH_MOVIES_SEARCH_SUCCESS, FETCH_MOVIES_SUCCESS } from "./movieTypes"

const initialState = {
    loading: false,
    movies: [],
    search: '',
    error: '',
}

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: ''
            }
        case FETCH_MOVIES_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload
            }
        case FETCH_MOVIES_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                search: action.search,
            }
        case FETCH_MOVIES_SEARCH_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                search: action.search,
                error: ''
            }
        case FETCH_MOVIES_SEARCH_FAILURE:
            return {
                loading: false,
                movies: [],
                search: action.search,
                error: action.payload
            }
        default:
            return state
    }
}

export default movieReducer