import { combineReducers } from "redux";
import detailMovieReducer from "./detailMovie/detailMovieReducer";
import listMovieReducer from "./listMovie/listMovieReducer";
import movieReducer from "./movie/movieReducer";
import topMovieReducer from "./topMovie/topMovieReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    movieDetail: detailMovieReducer,
    listMovie: listMovieReducer,
    topMovie: topMovieReducer
})

export default rootReducer