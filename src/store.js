import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from "redux-saga";
import reducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTIONS_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas)

export default store;