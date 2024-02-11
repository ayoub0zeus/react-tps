import { createStore } from "redux";
import Reducer from "./reducer";

const x =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(Reducer, x);

export default store;
