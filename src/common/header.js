import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper } from './style.js'

class Header extends Component {
  render () {
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
              <NavSearch placeholder='搜索' type='text'/>
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
}

export default Header;
