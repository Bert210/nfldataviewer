import scheduleContainerReducer from '../containers/ScheduleContainer/reducer';
import rosterContainerReducer from '../containers/RosterContainer/reducer';
// Don't combine reducers because we are combining them in store.js

const reducer = {
    schedule: scheduleContainerReducer,
    roster: rosterContainerReducer,
}

export default reducer
