import { fork } from 'redux-saga/effects';
import scheduleContainerSagas from '../containers/ScheduleContainer/sagas';

// export default [
//     yield fork(...scheduleContainerSagas),
// ];r

export default function* rootSaga() {
    yield [
        fork(scheduleContainerSagas),
    ]
}