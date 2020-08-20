import * as actionTypes from '../actions/actions';

const intialState = {
	results: []
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat(action.counterValue)
			};
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
