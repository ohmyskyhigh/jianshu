import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, Logo, Nav } from './style.js'

class Header extends Component {
  render () {
    return (
      <Fragment>
        <HeaderWrapper>
          <Logo/>
        </HeaderWrapper>
      </Fragment>
    )
  }
}

export default Header;
