import { StyledHeader, Logo } from "./styled/Header.styled"
// import backImage from "./clipboard-landing-page-master/bg-header-mobile.png"
import { logoImg } from "../images"
import { Button } from "./styled/Buttons.styled"
import { Tittle, Quote } from "./styled/txt.styled"

export default function Header() {
    return (
        <StyledHeader>
            <Logo src={logoImg}/>
            <Tittle mTop = "64px">A history of <br></br> everything you copy</Tittle>
            <Quote mTop = "16px">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</Quote>
            <Button bg = "#26BBA4" mTop = "61px">Download for iOS</Button>
            <Button bg = "#6174FF" mTop = "24px">Download for Mac</Button>
        </StyledHeader>
    )
}