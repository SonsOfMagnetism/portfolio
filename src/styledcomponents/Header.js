import styled from "styled-components";
import theme from "../json/theme.json"

export const HeaderContainer = styled.header`
padding: 6px;
text-align: center;
background-color: ${theme.color2};
color: ${theme.color1};
`

export const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const NavLinkWrapper = styled.a`
text-decoration: none;
color: ${theme.color4};
&:hover {
    color: ${theme.color5};
    font-weight: 800;
}
`
export const HeaderLink = styled.a`
width: 20%;
padding: 15px;
font-weight: 800;
margin: 6px;
text-decoration: none;
font-size: 1.1em;
border-radius: 20px;
background-color: ${theme.color4};
color: ${theme.color2};
&:hover {
    background-color: ${theme.color3};
    color: ${theme.color5};
}
`