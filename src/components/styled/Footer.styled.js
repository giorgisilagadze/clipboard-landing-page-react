import styled from "styled-components";
import { Logo } from "./Header.styled";

export const StyledFooter = styled.footer`
    margin-top: 170px;
    width: 100%;
    background-color: #f5f7f7;
    padding: 55px 0 51px;

    @media(min-width: 1440px) {
        display: flex;
        align-items: center;
        gap: 150px;
        padding: 39px 0px;
    }

`

export const FootLogo = styled(Logo)`
    width: 55px;
    height: 55px;
`
export const FootDiv = styled.div`
    padding-top: 20px;

    @media(min-width: 1440px) {
        display: flex;
        flex-wrap: wrap;
        padding-top: 0px;
        gap: 10px;
        width: 540px;
    }
`

export const IconsDiv = styled.div`
    width: 152px;
    margin: 48px auto 0px;
    display: flex;
    gap: 40px;

    @media(min-width: 1440px) {
        margin: auto;
    }
`
export const IconsImg = styled.img`
    @media(min-width: 1440px) {
        cursor: pointer;
        &:hover {
            filter: invert(62%) sepia(17%) saturate(1732%) hue-rotate(121deg) brightness(97%) contrast(83%);
        }

    }
`

export const FootP = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.14px;
    color: #4C545C;
    text-align: center;
    margin-top: 20px;

     @media(min-width: 1440px) {
        width: 160px;
        text-align: start;
        margin: 0;
        cursor: pointer;

        &:hover {
            color: #26BBA4;
        }
     }
`