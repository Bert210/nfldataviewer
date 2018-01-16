import {
    LOAD_TEAM,
    LOAD_TEAM_SUCCEEDED,
    LOAD_TEAM_FAILED,
} from './constants';

export const loadTeam = (team) => ({
    type: LOAD_TEAM,
    team,
})

export const loadTeamSucceeded = (data) => ({
    type: LOAD_TEAM_SUCCEEDED,
    data,
})

export const loadTeamFailed = (message) => ({
    type: LOAD_TEAM_FAILED,
    message,
})