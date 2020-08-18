const intialState = {
	counter: 0,
	results: []
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, counter: state.counter + 1 };
		case 'DECREMENT':
			return { ...state, counter: state.counter - 1 };
		case 'ADD':
			return { ...state, counter: state.counter + action.val };
		case 'SUBTRACT':
			return { ...state, counter: state.counter - action.val };
		case 'STORE_RESULT':
			return { ...state, results: state.results.concat(state.counter) };
		case 'DELETE_RESULT': {
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
