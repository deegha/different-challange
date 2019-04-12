/**
 * Created by Deegha 10/04/2019
 */

import { backendClient } from '../services/backendClient'

 /**
 * Action constants
*/

export const SET_LEASE_LOADING = 'SET_LEASE_LOADING'

export const FETCH_LEASES_FAIL    = 'FETCH_LEASES_FAIL'
export const FETCH_LEASES_SUCCESS = 'FETCH_LEASES_SUCCESS'


/**
 * Action creators
*/

const setLeaseLoading = () => ({
  type: SET_LEASE_LOADING
})

const fethLeasesFail = (error) => ({
  type: FETCH_LEASES_FAIL,
  error
})

const fetchLeasesSuccess = (leases) => ({
  type: FETCH_LEASES_SUCCESS,
  leases
})

export const fetchLeases = () => async (dispatch) => {
  dispatch(setLeaseLoading())
   
  try{
    const response = await backendClient.get('leases', 'v1')
    dispatch(fetchLeasesSuccess(response))
  }catch(err) {
    dispatch(fethLeasesFail('Somthing went wrong please try again'))
  }
}
