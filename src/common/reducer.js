import {createReducer} from '@reduxjs/toolkit';
import { setFocus, setHotSearch} from './actionCreator.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  'hotSearch': [],
});

//两种动作，change_inputData; submit_data
export const headerReducer = createReducer(defaultState, (action) => {
  action
    .addCase(setHotSearch, (state, action) => {
      return state.set('hotSearch', action.payload);
    })
})
