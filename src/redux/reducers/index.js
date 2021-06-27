import { combineReducers } from "redux";
// import visibilityFilter from "./visibilityFilter";
// import todos from "./todos";
import app from "./app";
import mainPage from "./mainPage";
import postNews from "./postNews";

// export default combineReducers({ todos, visibilityFilter });
export default combineReducers({ app, mainPage, postNews });
