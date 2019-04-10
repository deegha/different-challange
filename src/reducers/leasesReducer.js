/**
 * Created by Deegha 10/04/2019
 */

import * as Actions from '../actions/leaseActions'

const initilState = {
  loading: false,
  hasData: false,
  error: {
    hasError: false,
    errorMessage: ''
  },
  leases: [{ 
    id: '',
    tenant:'' 
  }] 
}

export const leasesReducer = (state=initilState, action) => {

  switch (action.type) {
    case Actions.SET_LEASE_LOADING:
      return {
        ...state,
        loading: true
      }
    case Actions.FETCH_LEASES_FAIL:
      return {
        ...state,
        loading: false,
        error: {
          hasError: true,
          errorMessage: action.error
        }
      }
    case Actions.FETCH_LEASES_SUCCESS:
      return {
        ...state,
        loading: false,
        leases: action.leases,
        error: {
          hasError: false,
          errorMessage: ''
        }
      }
    default:
      return state
  }
}
