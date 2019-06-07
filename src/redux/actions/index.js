import { createAction } from 'redux-actions';

import {
  SEND_INVITE,
  ACTIVATE_USER,
  GET_USERS,
  SET_TEAM_LIST,
  SET_REDIRECTION,
  CLEAR_REDIRECTION,
  ADD_SUCCESS,
  CLEAR_SUCCESS,
  ADD_ERROR,
  CLEAR_ERROR
} from '../constants';

export const sendInvite = createAction(SEND_INVITE);
export const activateUser = createAction(ACTIVATE_USER);
export const getUsers = createAction(GET_USERS);
export const setTeamList = createAction(SET_TEAM_LIST);
export const setRedirection = createAction(SET_REDIRECTION);
export const clearRedirection = createAction(CLEAR_REDIRECTION);
export const addSuccess = createAction(ADD_SUCCESS);
export const clearSuccess = createAction(CLEAR_SUCCESS);
export const addError = createAction(ADD_ERROR);
export const clearError = createAction(CLEAR_ERROR);
