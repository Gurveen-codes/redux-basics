import * as actionTypes from './actions';

const intialState = {
	counter: 0,
	results: []
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return { ...state, counter: state.counter + 1 };
		case actionTypes.DECREMENT:
			return { ...state, counter: state.counter - 1 };
		case actionTypes.ADD:
			return { ...state, counter: state.counter + action.val };
		case actionTypes.SUBTRACT:
			return { ...state, counter: state.counter - action.val };
		case actionTypes.STORE_RESULT:
			return { ...state, results: state.results.concat(state.counter) };
		case actionTypes.DELETE_RESULT: {
			// const newState = { ...state };
			// const newResults = [ ...newState.results ];
			// newResults.splice(action.id, 1);
			// newState.results = newResults;
			// return newState;

			const updatedResults = state.results.filter((_, index) => index !== action.id);
			return { ...state, results: updatedResults };
		}

		default:
			return state;
	}
};

export default reducer;
