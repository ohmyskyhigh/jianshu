import {createReducer} from '@reduxjs/toolkit';
import { setFocus } from './actionCreator.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  'isFocus': false
});

//两种动作，change_inputData; submit_data
export const headerReducer = createReducer(defaultState, (action) => {
  action
    .addCase(setFocus, (state, action) => {
      return state.set('isFocus', action.payload);
    })
})
