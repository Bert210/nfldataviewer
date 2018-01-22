import {
    LOAD_ROSTER,
    LOAD_ROSTER_SUCCEEDED,
    LOAD_ROSTER_FAILED,
} from './constants';

export const loadRoster = (team) => ({
    type: LOAD_ROSTER,
    team,
})


export const loadRosterSucceeded = (data) => ({
    type: LOAD_ROSTER_SUCCEEDED,
    data,
})


export const loadRosterFailed = (message) => ({
    type: LOAD_ROSTER_FAILED,
    message,
})