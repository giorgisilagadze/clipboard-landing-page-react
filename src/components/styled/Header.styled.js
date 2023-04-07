import styled from "styled-components";
import bgImg from "../../images/bg-header-mobile.png";
import bgImgDesk from "../../images/bg-header-desktop.png"

export const StyledHeader = styled.header`
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    padding: 123px 32px 0px ;

    @media(min-width: 1440px) {
        background-image: url(${bgImgDesk});
    }


`
export const Logo = styled.img`
    margin: auto;
    display: block;
    
`

export const Break = styled.br`
    @media(min-width: 1440px) {
        display: none;
    }

`
