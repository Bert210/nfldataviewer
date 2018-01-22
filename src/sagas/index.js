import { fork } from 'redux-saga/effects';
import scheduleContainerSagas from '../containers/ScheduleContainer/sagas';
import rosterContainerSagas from '../containers/RosterContainer/sagas';
// export default [
//     yield fork(...scheduleContainerSagas),
// ];r

export default function* rootSaga() {
    yield [
        fork(scheduleContainerSagas),
        fork(rosterContainerSagas),
    ]
}