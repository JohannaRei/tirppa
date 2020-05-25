import { GET_MATCHES, GET_MATCHES_SUCCESS, GET_MATCHES_FAILURE } from './types';
// import MatchesAPI from './MatchesAPI

const mockData = [
  {
    name: 'Etelän hömötirppa',
    latin: 'Etelus hömötius',
  },
  {
    name: 'Töyhtöhyyppä',
    latin: 'Töyhtimys hyyppidicus',
  },
  {
    name: 'Silcciuiccu',
    latin: 'Silkkimus uikkimus',
  },
];

const _getMatches = () => ({
  type: GET_MATCHES,
});

const _getMatchesSuccess = (payload) => ({
  type: GET_MATCHES_SUCCESS,
  payload,
});

const _getMatchesFailure = (error) => ({
  type: GET_MATCHES_FAILURE,
  error,
});

export const getMatches = (sound) => (dispatch) => {
  dispatch(_getMatches());
  return setTimeout(() => {
    dispatch(_getMatchesSuccess(mockData));
  }, 3000);
  //.catch(err => dispatch(_getMatchesFailure(err)))
};
