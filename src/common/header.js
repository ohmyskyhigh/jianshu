import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch} from './style.js'

class Header extends Component {
  render () {
    return (
      <Fragment>
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem pos='left' className='active'>首页</NavItem>
            <NavItem pos='left'>下载</NavItem>
            <NavItem pos='right'>写文章</NavItem>
            <NavItem pos='right'>登录</NavItem>
            <NavSearch placeholder='搜索' type='text'/>
          </Nav>
        </HeaderWrapper>

      </Fragment>
    )
  }
}

export default Header;
