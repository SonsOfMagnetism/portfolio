import { HeaderContainer, NavContainer, NavLinkWrapper } from "../styledcomponents/Header"
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Header (props) {
    return (
        <HeaderContainer>
            <h1>Rene Santiago</h1>
            <NavContainer>
                <NavLinkWrapper href="https://github.com/SonsOfMagnetism" target="_blank">
                    <div><BsGithub size={45}/></div>
                </NavLinkWrapper>
                <NavLinkWrapper href="https://www.linkedin.com/in/rene-santiago/" target="_blank">
                    <div><BsLinkedin size={45}/></div>
                </NavLinkWrapper>
            </NavContainer>
        </HeaderContainer>
    )
}