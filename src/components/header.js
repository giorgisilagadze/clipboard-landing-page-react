import { StyledHeader } from "./styled/Header.styled"
import { Logo } from "./styled/Header.styled"
// import backImage from "./clipboard-landing-page-master/bg-header-mobile.png"
import logoImage from "../clipboard-landing-page-master/images/logo.svg"

export default function Header() {
    return (
        <StyledHeader>
            <Logo src={logoImage}/>
            <h1>A history of everything you copy</h1>
        </StyledHeader>
    )
}