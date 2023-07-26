import { HeaderContainer, HeaderLink, NavContainer, NavLinkWrapper } from "../styledcomponents/Header"
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Header (props) {
    return (
        <HeaderContainer>
            <h1>Rene Santiago</h1>
            <NavContainer>
                <NavLinkWrapper href="https://github.com/SonsOfMagnetism" target="_blank">
                    <div><BsGithub size={45}/></div>
                </NavLinkWrapper>
                <HeaderLink target="_blank" href={`mailto:rsj510@gmail.com?subject=${encodeURIComponent("Job Request for (Job Title & Company Here) ")}&body=${encodeURIComponent("Paste over with job description")}`}>
                    rsj510@gmail.com
                </HeaderLink>
                <HeaderLink class="link" target="_blank" href="https://drive.google.com/file/d/18jlvG2FC0WQIsyBLRt1tKpnOG5ckrx1A/view?usp=sharing" download>
                    Download Resume
                </HeaderLink>
                <NavLinkWrapper href="https://www.linkedin.com/in/rene-santiago/" target="_blank">
                    <div><BsLinkedin size={45}/></div>
                </NavLinkWrapper>
            </NavContainer>
        </HeaderContainer>
    )
}