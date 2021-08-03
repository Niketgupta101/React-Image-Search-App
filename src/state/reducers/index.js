import { combineReducers } from "redux";
import lenReducer from './lenReducer'
import loadingReducer from './loadingReducer'
import pagelimitReducer from './pagelimitReducer'
import queryReducer from './queryReducer'


const reducers = combineReducers({
    itemslength:lenReducer,
    isLoading: loadingReducer,
    pageLimit: pagelimitReducer,
    query: queryReducer
})

export default reducers;