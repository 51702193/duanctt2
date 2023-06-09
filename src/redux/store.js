import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)


sagaMiddleware.run(rootSaga)

export default store;