/**
 * Created by Deegha 10/04/2019
 */
import { backendClient } from '../services/backendClient'

/**
 * Action constants
*/

export const SET_ACTIVE_LEASE_LOADING     = 'SET_ACTIVE_LEASE_LOADING'

export const FETCH_ACTIVE_LEASES_FAIL     = 'FETCH_ACTIVE_LEASES_FAIL'
export const FETCH_ACTIVE_LEASES_SUCCESS  = 'FETCH_ACTIVE_LEASES_SUCCESS'

/**
 * Action Creators
*/

const setActiveLeaseLoading = () => ({
  type: SET_ACTIVE_LEASE_LOADING
})

const fethActiveLeaseFail = (error) => ({
  type: FETCH_ACTIVE_LEASES_FAIL,
  error
})

const fetchActiveLeaseSuccess = (lease) => ({
  type: FETCH_ACTIVE_LEASES_SUCCESS,
  lease
})

export const fetchActiveLease = (id) => async (dispatch) => {
  dispatch(setActiveLeaseLoading())
   
  try{
    const response = await backendClient.get(`leases/${id}`, 'v1')
    dispatch(fetchActiveLeaseSuccess(response))
  }catch(err) {
    dispatch(fethActiveLeaseFail('somthing went wrong, please try again'))
  }
}