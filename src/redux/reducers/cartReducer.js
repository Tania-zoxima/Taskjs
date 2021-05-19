import { ActionTypes } from '../constants/cartTypes'

const initialState = {
    basket: [],
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_BASKET:
            console.log(state.basket);
            return {
                basket: {...state.basket, payload}
            }

        default:
            return state;
    }
}