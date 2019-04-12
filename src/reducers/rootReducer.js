/**
 * Created by Deegha 10/04/2019
 */


import { combineReducers } from "redux"
import { leasesReducer as lease } from './leasesReducer' 
import { activeLeaseReducer as activelease } from './activeLeaseReducer'

export const rootReducer = combineReducers({
    lease,
    activelease
})
