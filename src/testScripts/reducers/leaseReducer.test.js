import { leasesReducer as lease } from '../../reducers/leasesReducer' 
import { leaseList } from '../mockDate/lease'
import * as Actions from '../../actions/leaseActions' 

const initialState = {
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

describe("lease reducers", () => {
  test("data requested", () => {

    const newState = lease(initialState, {
      type: Actions.SET_LEASE_LOADING
    })
    expect(newState).toEqual({
      ...initialState,
      loading: true
    })
  })

  test("data requested fail", () => {
    const newState = lease(initialState, {
      type: Actions.FETCH_LEASES_FAIL,
      error: 'there was an error'
    })
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: {
        hasError: true,
        errorMessage: 'there was an error'
      }
    })
  })

  test("data requested success", () => {
    const newState = lease(initialState, {
      type: Actions.FETCH_LEASES_SUCCESS,
      leases: leaseList
    })
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      hasData: true,
      leases: leaseList,
      error: {
        hasError: false,
        errorMessage: ''
      }
    })
  })

})

