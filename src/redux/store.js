import { createStore, compose } from 'redux';
import rootReducer from "./reducers";

const store = createStore(rootReducer, undefined, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;

// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from '../reducers/index';
// import thunk from 'redux-thunk';

// export default function configureStore(initialState){
//   return createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(thunk),
//       window.devToolsExtension ? window.devToolsExtension() : f => f
//     )
//   );
// }