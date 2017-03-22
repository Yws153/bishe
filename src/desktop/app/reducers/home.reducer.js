import { fromJS } from 'immutable'
import * as actionType from 'app/constants/actionType'

const homeState = fromJS({
    view: {

    },
    visibility: false,
    todos: [{
        aa: '1'
    }]
})

export default function homeReducer(state = homeState, action) {
    return ({
        [actionType.INIT]           : () => state.set('visibility', false)
    }[action.type] || (() => state))()   
}