import scheduleContainerReducer from '../containers/ScheduleContainer/reducer';

// Don't combine reducers because we are combining them in store.js

const reducer = {
    schedule: scheduleContainerReducer,
}

export default reducer
