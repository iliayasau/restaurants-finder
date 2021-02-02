import { 
	SET_LOADING,
	GET_RESTAURANTS,
} from '../actions';

export const initialState = {
	loading: false,
	restaurants: []
};

export default(state = initialState, {type, payload}) => {
	switch(type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_RESTAURANTS:
			return {
				...state,
				restaurants: payload.restaurants,
				loading: false
			};
		default:
			return state;
	}
};