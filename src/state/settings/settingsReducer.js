import {
  SET_AUTOMATIC_RECORDING_SUCCESS,
  SET_AUTOMATIC_RECORDING_FAILURE,
} from './types';

const initialState = {
  automaticRecordingEnabled: false,
  error: null,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTOMATIC_RECORDING_SUCCESS:
      return { ...state, automaticRecordingEnabled: action.payload };
    case SET_AUTOMATIC_RECORDING_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default settingsReducer;
