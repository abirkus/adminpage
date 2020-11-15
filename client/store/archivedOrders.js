import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
const GET_CUSTOM_DATA = 'GET_CUSTOM_DATA'

/**
 * INITIAL STATE
 */
const allOrders = []

/**
 * ACTION CREATORS
 */
const getAllOrders = orders => ({type: GET_ALL_ORDERS, orders})

export const getCustomData = orders => {
	return {
		type: GET_CUSTOM_DATA,
		orders,
	}
}
/**
 * THUNK CREATORS
 */
export const getAllOrdersThunk = () => async dispatch => {
	try {
		const res = await axios.get('/api/orders')
		dispatch(getAllOrders(res.data))
	} catch (err) {
		console.error(err)
	}
}

export const fetchCustomDataThunk = obj => {
	return async dispatch => {
		try {
			const {data} = await axios.put('/api/orders/', obj)
			dispatch(getCustomData(data))
		} catch (err) {
			console.log('Error', err)
		}
	}
}

/**
 * REDUCER
 */
export default function(state = allOrders, action) {
	switch (action.type) {
		case GET_ALL_ORDERS:
			return action.orders
		case GET_CUSTOM_DATA:
			return action.orders
		default:
			return state
	}
}