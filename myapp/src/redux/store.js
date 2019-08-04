import { createStore } from "redux";
import { combineReducers } from "redux";
import Dashboard from "../features/dashboard/reducers/default";

export default createStore(combineReducers({ Dashboard }),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());