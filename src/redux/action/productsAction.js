import * as types from '../types'

export const fetchcart = () => async dispatch => {
dispatch({
    type: types.GET_PRODUCTS,
    payload: ['products']
})
}