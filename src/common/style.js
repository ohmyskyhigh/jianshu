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
padding-left: 100px;
padding-right: 100px;
marginLeft:100px;
marginRight:100px;
height: 100%;
background:green;
`

export const NavItem = styled.div
`
line-height:56px;
margin-left: 25px;
margin-right: 25px;
font-size: 18px;
float: ${props => props.pos};
&.active{
  color: #ea6f5a;
}
`

export const NavSearch = styled.input.attrs((props) =>
  {return ({type:props.type,
            placeholder: props.placeholder,
 })}
)
`
width: 160px;
height: 25px;
margin-top: 12.5px;
border: 0;
border-radius: 19px;
background: #eee;
&::placeholder{
  color: #999;
  padding-left: 5px;
}
`
