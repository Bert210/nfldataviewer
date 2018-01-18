import { fork } from 'redux-saga/effects';
import scheduleContainerSagas from '../containers/ScheduleContainer/sagas';

// export default [
//     yield fork(...scheduleContainerSagas),
// ];

export default function* rootSaga() {
    yield [
        fork(scheduleContainerSagas),
    ]
}