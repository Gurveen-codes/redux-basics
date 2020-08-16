const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
	count: 0
};

//Reducer
const rootReducer = (state = intialState, action) => {
	return state;
};

//Store
const store = createStore(rootReducer);

//Dispatching Action

//Subscription
