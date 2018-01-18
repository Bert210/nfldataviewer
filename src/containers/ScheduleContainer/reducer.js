

import { fromJS } from 'immutable';
import {
    LOAD_TEAM_SUCCEEDED,
} from './constants'

const initialState = fromJS({
    data: []
})

const scheduleContainerReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_TEAM_SUCCEEDED:
            return state.set('data', action.data);
        default:
            return state;
    }
}

export default scheduleContainerReducer;