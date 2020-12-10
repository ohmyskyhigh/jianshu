import styled from 'styled-components';
import logoPic from '../resource/jianshu-logo.png';

export const HeaderWrapper = styled.div
`
position: relative;
height: 58px;
border-bottom: 2px solid #f0f0f0;
`

export const Logo = styled.a
`
position: absolute;
top: 0;
left: 0;
height: 56px;
width: 100px;
display: block;
background: url(${logoPic});
background-size: contain;
`

export const Nav = styled.div
`
width: 960px;
height: 100%;
margin: 0 auto;
background: green
`
