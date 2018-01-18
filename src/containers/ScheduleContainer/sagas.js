import { fork, takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_TEAM } from './constants';
import { loadTeamSucceeded, loadTeamFailed } from './actions';

const scheduleUrl = (teamId) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return `${proxyUrl}http://api.suredbits.com/nfl/v0/team/${teamId}/schedule`
}

function fetchTeamData(teamName) {
    const url = scheduleUrl(teamName);
    return fetch(url)
    	.then(data => data.json());
}

function* fetchTeam(action) {
    // console.log(action.team);
    try {
        // const data = fetchTeamData(action.team)
        // console.log(data);
        const data = yield call(fetchTeamData, action.team)
        yield put(loadTeamSucceeded(data));
    } catch (e) {
        yield put(loadTeamFailed(e.message));
    }
}

function* loadTeamSaga() {
    yield takeLatest(LOAD_TEAM, fetchTeam);
}

// export default [
//     loadTeamSaga,
// ]

export default function* scheduleContainerSagas() {
    yield [
        fork(loadTeamSaga),
    ]
}