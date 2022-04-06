import * as types from '../types'

export const fetchcart = (results) => async dispatch => {
dispatch({
    type: types.GET_PRODUCTS,
    payload: {
        results
    }
})
}