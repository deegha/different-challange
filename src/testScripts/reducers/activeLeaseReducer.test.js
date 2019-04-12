import { activeLeaseReducer as activeLease } from '../../reducers/activeLeaseReducer' 
import { leaseRow, generatedLeaseArray } from '../mockDate/activeLease'
import * as Actions from '../../actions/activeLeaseActions' 

const initialState = {
  loading: false,
  hasData: false,
  error: {
    hasError: false,
    errorMessage: ''
  },
  lease: []
}

describe("active lease reducers", () => {
  test("data requested", () => {

    const newState = activeLease(initialState, {
      type: Actions.SET_ACTIVE_LEASE_LOADING
    })
    expect(newState).toEqual({
      ...initialState,
      loading: true
    })
  })

  test("data requested failed", () => {

    const newState = activeLease(initialState, {
      type: Actions.FETCH_ACTIVE_LEASES_FAIL,
      error: 'there was an error'
    })
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: {
        hasError: true,
        errorMessage: 'there was an error'
      },
    })
  })

  test("data requested success", () => {
    const newState = activeLease(initialState, {
      type: Actions.FETCH_ACTIVE_LEASES_SUCCESS,
      lease: leaseRow
    })
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      hasData: true,
      lease: generatedLeaseArray,
      error: {
        hasError: false,
        errorMessage: ''
      },
    })
  })
})

