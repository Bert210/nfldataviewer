import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const storeCreator = (initState = {}, history) => {
  
	const reducer = combineReducers({
		...rootReducer, 
		router:routerReducer
	});

	const middlewares = [
		sagaMiddleware,
		routerMiddleware(history)
	]

	const enhances = [
		applyMiddleware(...middlewares),
		// devtools
	]

	// const middleware = routerMiddleware(history);

	const composeEnhancers = devtools || compose;


	const store = createStore(
		reducer, initState,  composeEnhancers(...enhances)
		// reducer, initState, composeEnhancers(applyMiddleware(middleware, sagaMiddleware))
	)

	sagaMiddleware.run(rootSaga);

	return store;
}