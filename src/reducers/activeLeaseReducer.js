/**
 * Created by Deegha 10/04/2019
 */

import * as Actions from '../actions/activeLeaseActions'
import { formatLease } from '../services/helper'

const initialSate = {
  loading: false,
  hasData: false,
  error: {
    hasError: false,
    errorMessage: ''
  },
  leaseData: {
    id: null,
    start_date: '',
    end_date: '',
    rent: null,
    frequency: '',
    payment_day: ''
  },
  lease: []
}

export const activeLeaseReducer = (state=initialSate, action) => {

  switch(action.type) {
    case Actions.SET_ACTIVE_LEASE_LOADING:
      return {
        ...state,
        loading:true
      }
    case Actions.FETCH_ACTIVE_LEASES_FAIL:
      return {
        ...state,
        loading: false,
        error: {
          hasError: true,
          errorMessage: action.error
        },
        hasData: false
      }
    case Actions.FETCH_ACTIVE_LEASES_SUCCESS:
      formatLease()
      return {
        ...state,
        loading: false,
        error: {
          hasError: false,
          errorMessage: ''
        },
        hasData: true,
        leaseData: action.lease
      }
    default:
      return state
  }
}