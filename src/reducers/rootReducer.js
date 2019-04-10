/**
 * Created at 18/08/2018
*/

import { combineReducers } from "redux"
import { windowReducer as dimentions } from './windowReducer'
import { leasesReducer as lease } from './leasesReducer' 
import { activeLeaseReducer as activelease } from './activeLeaseReducer'

export const rootReducer = combineReducers({
    dimentions,
    lease,
    activelease
})
