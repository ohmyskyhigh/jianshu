import React, { Component, Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper } from './style.js';
import { useSelector, useDispatch } from 'react-redux';
import { setFocus } from './actionCreator';


function Header() {
  const isFocusDat = useSelector((state) => state.get('header').get('isFocus'));
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
              className={isFocusDat ? 'focused': ''}
              onFocus={()=>dispatch(setFocus(true))}
              onBlur={()=>dispatch(setFocus(false))}/>
            <span className={isFocusDat ? 'iconfont focused': 'iconfont'}>&#xe614;</span>
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

export default Header;
