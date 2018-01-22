import { LOAD_ROSTER } from './constants';
import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { loadRosterFailed, loadRosterSucceeded } from './actions';

const rosterURL = (team) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return `${proxyUrl}http://api.suredbits.com/nfl/v0/team/${team.id}/roster`
}

function fetchRosterData(teamName){
    console.log(teamName);
    return fetch(rosterURL(teamName))
        .then( res => res.json());
}

function* fetchRoster(action){
    try{
        const data = yield call(fetchRosterData, action.team);
        yield put(loadRosterSucceeded(data));
    } catch (e) {
        yield put(loadRosterFailed(e.message));
    }
}

function* loadRosterSaga() {
    yield takeLatest(LOAD_ROSTER, fetchRoster);
}

export default function* rosterContainerSagas() {
    yield [
        fork(loadRosterSaga),
    ]
}


