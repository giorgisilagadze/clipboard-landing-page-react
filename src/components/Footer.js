import { StyledFooter, FootLogo, FootDiv, IconsDiv, IconsImg, FootP } from "./styled/Footer.styled";
import { logoImg, fb, tw, insta } from "../images"

const about = ["FAQs", "Contact Us", "Privacy Policy", "Press Kit", "Install Guide"]
const socIcons = [fb, tw, insta]

export default function Footer() {
    return (
        <StyledFooter>
            <FootLogo src={logoImg}/>
            <FootDiv>
                {about.map(item => 
                    <FootP>{item}</FootP>
                )}
            </FootDiv>
            <IconsDiv>
                {socIcons.map(item => 
                    <IconsImg src={item}/>
                )}
            </IconsDiv>
        </StyledFooter>

    )
}