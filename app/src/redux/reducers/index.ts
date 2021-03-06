import { combineReducers } from 'redux'
import { mainReducer } from './mainReducer'

const rootReducer = combineReducers({
    mainReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer