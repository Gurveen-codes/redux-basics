import * as actionTypes from './actionTypes';

const saveResult = (result) => {
	return {
		type: actionTypes.STORE_RESULT,
		counterValue: result
	};
};

export const storeResult = (counterValue) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(saveResult(counterValue));
		}, 2000);
	};
};

export const deleteResult = (id) => {
	return {
		type: actionTypes.DELETE_RESULT,
		id: id
	};
};
