import {ActionTypes} from '../constants/cartTypes'

export const addToBasket = (item) =>{
    return{
        type:ActionTypes.ADD_TO_BASKET,
        payload:item
    }
}

