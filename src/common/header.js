import React, { Component, Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Button,
  Addition,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoRefresh,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoHeader,
} from './style.js';
import { useSelector, useDispatch } from 'react-redux';
import { setFocus } from './actionCreator';


function Header() {
  const isFocus = useSelector((state) => state.get('header').get('isFocus'));
  const dispatch = useDispatch();

  return (
    <Fragment>
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem pos='left' className='active'>首页</NavItem>
          <NavItem pos='left'>下载</NavItem>
          <NavItem pos='right'>登录</NavItem>
          <NavItem pos='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              placeholder='搜索'
              type='text'
              className={isFocus ? 'focused': ''}
              onFocus={()=>dispatch(setFocus(true))}
              onBlur={()=>dispatch(setFocus(false))}/>
            {showSearchInfo(isFocus)}
            <span className={isFocus ? 'iconfont focused': 'iconfont'}>&#xe614;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <span className="iconfont">&#xe708;</span>
            写文章</Button>
          <Button>注册</Button>
        </Addition>
      </HeaderWrapper>
    </Fragment>
  )
}

const showSearchInfo = (isShow) =>{
  if(isShow){
    return (
      <SearchInfo>
        <SearchInfoHeader>
          <SearchInfoTitle>
            热门搜索
          </SearchInfoTitle>
          <SearchInfoRefresh>
            换一批
          </SearchInfoRefresh>
        </SearchInfoHeader>
        <SearchInfoList>
          <SearchInfoItem>地图</SearchInfoItem>
          <SearchInfoItem>地图</SearchInfoItem>
          <SearchInfoItem>地图</SearchInfoItem>
          <SearchInfoItem>地图</SearchInfoItem>
          <SearchInfoItem>地图</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  }
  else{
    return null;
  }
}

export default Header;
