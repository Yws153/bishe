import { combineReducers } from 'redux'

import homeReducer from 'app/reducers/home.reducer'

export default combineReducers({
    homeState: homeReducer
})
