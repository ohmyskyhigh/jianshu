//import {UPDATE_ITEM_INPUT, SUBMIT_ITEM_DATA, DELETE_ITEM_DATA} from './actionType';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { hotSearch } from '../axiosMocker/HeaderData';


export const setHotSearch = createAction('SETHOTSEARCH');

export const getHotSearch = ()=>{
  hotSearch();
  return (dispatch)=>{axios.get('/hotsearch')
          .then(res=>{
            console.log(res.data)
            const action = setHotSearch(res.data);
            dispatch(action);
          })
          .catch(()=>{alert('error')});
        }

}
