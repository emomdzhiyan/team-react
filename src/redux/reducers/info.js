import {
  SET_REDIRECTION,
  CLEAR_REDIRECTION,
  ADD_SUCCESS,
  CLEAR_SUCCESS,
  ADD_ERROR,
  CLEAR_ERROR
} from '../constants';


const initialState = {
  error: '',
  success: '',
  redirection: false
};

function info(state = initialState, action) {
  switch (action.type) {
    case SET_REDIRECTION: {
      return {
        ...state,
        redirection: true,
      };
    }
    case CLEAR_REDIRECTION: {
      return {
        ...state,
        redirection: false,
      };
    }
    case ADD_SUCCESS: {
      return {
        ...state,
        success: action.payload,
      };
    }
    case CLEAR_SUCCESS: {
      return {
        ...state,
        success: '',
      };
    }
    case ADD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case CLEAR_ERROR: {
      return {
        ...state,
        error: '',
      };
    }
    default: {
      return state;
    }
  }
}

export default info;
