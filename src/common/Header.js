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
import { getHotSearch } from './actionCreator';


function Header() {
  const [isFocus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const hotSearches = useSelector((state) => state.get('header').get('hotSearch'));
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
              onFocus={()=>{
                setFocus(true)
                if(hotSearches.size<1){
                  dispatch(getHotSearch());
                }
              }}
              onBlur={()=>setFocus(false)}/>
            {showSearchInfo(isFocus, hotSearches)}
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

const showSearchInfo = (isShow, hotSearches) =>{
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
          {hotSearches.map((item, idx) =>{
            return (
              <SearchInfoItem key={idx}>{item}</SearchInfoItem>
            )
          })}
        </SearchInfoList>
      </SearchInfo>
    )
  }
  else{
    return null;
  }
}

export default Header;
