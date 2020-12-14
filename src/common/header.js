import React, { Component, Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper } from './style.js'
import { connect } from 'react-redux';


function Header (){
  const [isFocus, setFocus] = useState(false)
  console.log(isFocus)
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
          <SearchWrapper iconBackground={isFocus? '#999': '#eee'}>
            <NavSearch
              placeholder='搜索'
              onFocus={() => setFocus(true)}
              onBlur = {() => setFocus(false)}
              className={isFocus? 'focused': ''}>
            </NavSearch>
            <span className="iconfont">&#xe614;</span>
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

const mapState2Props = (state)=>{
  return '';
}

const mapDispatch2Props = (dispatch)=>{
  return '';
}

export default connect(mapState2Props, mapDispatch2Props)(Header);
