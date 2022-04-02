import * as types from '../types'

export const fetchcart = () => async dispatch => {
dispatch({
    type: types.GET_CARTS,
    payload: ['1st cart', '2nd cart', '3 cart']
})
}