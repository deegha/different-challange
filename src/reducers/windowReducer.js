/**
 * Created at 10/04/2019
*/


import * as Actions from "../actions/windowActions"

const initialState = {
    width : 0,
		height : 0,
		isMobile: false,
}

export const windowReducer = (state= initialState ,action) => {
	switch (action.type) {
		case Actions.SET_WINDOW_DIMENTIONS : 
			return {
					...state,
					width : action.width,
					height : action.height,
					isMobile: action.width < 700? true: false
			}
		default :
			return state
	}
}
