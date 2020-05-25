import { GET_MATCHES, GET_MATCHES_FAILURE, GET_MATCHES_SUCCESS } from './types';

const initialState = {
  matches: [],
  fetchingMatches: false,
  matchesError: null,
};

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATCHES:
      return { ...state, fetchingMatches: true };
    case GET_MATCHES_SUCCESS:
      return {
        ...state,
        fetchingMatches: false,
        matches: action.payload,
        matchesError: initialState.matchesError,
      };
    case GET_MATCHES_FAILURE:
      return {
        ...state,
        fetchingMatches: false,
        matches: initialState.matches,
        matchesError: action.error,
      };
    default:
      return state;
  }
};

export default matchesReducer;
