import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import counterReducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';

const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer
});

const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log('[Middleware Dispatching]', action);
			const result = next(action);
			console.log('[State]', store.getState());
			return result;
		};
	};
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
