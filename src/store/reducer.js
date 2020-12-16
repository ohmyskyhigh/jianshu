import {createReducer} from '@reduxjs/toolkit';

const defaultState = {
  isfocus: false,
};

//两种动作，change_inputData; submit_data
export const reducer = createReducer(defaultState, (action) => {
  return defaultState;
})
