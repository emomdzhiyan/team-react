import { SET_TEAM_LIST } from '../constants';

const initialState = {
  team: [],
};

function team(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM_LIST: {
      return {
        ...state,
        team: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
}

export default team;
