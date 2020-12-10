import React, { Component, Fragments } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, Logo, Nav } from './style.js'

class Header extends Component {
  render () {
    return (
      <Fragments>
        <HeaderWrapper>
          <Logo/>
        </HeaderWrapper>
        //<Nav/>
      </Fragments>
    )
  }
}

export default Header;
