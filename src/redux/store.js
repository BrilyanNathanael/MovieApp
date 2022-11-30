import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./movie/movieReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store