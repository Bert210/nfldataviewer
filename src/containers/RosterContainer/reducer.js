import {
    LOAD_ROSTER_SUCCEEDED,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
    data: [],
})

const rosterContainerReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_ROSTER_SUCCEEDED:
            return state.set('data', action.data);
        default:
            return state;
    }
}

export default rosterContainerReducer;